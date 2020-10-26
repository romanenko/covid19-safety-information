"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const messenger = require("./messenger");
const quiz = require("./quiz");

let Wit = null;
let log = null;
try {
  // if running from repo
  Wit = require("../").Wit;
  log = require("../").log;
} catch (e) {
  Wit = require("node-wit").Wit;
  log = require("node-wit").log;
}

// Webserver parameter
const PORT = process.env.PORT || 8445;

// Wit.ai parameters
const WIT_TOKEN = process.env.WIT_TOKEN;

// Setting up our bot
const wit = new Wit({
  accessToken: WIT_TOKEN,
  logger: new log.Logger(log.INFO),
});

// Starting our webserver and putting it all together
const app = express();

app.use(bodyParser.json({ verify: messenger.verifyRequestSignature }));

// Webhook setup
app.get("/webhook", (req, res) => {
  if (
    req.query["hub.mode"] === "subscribe" &&
    req.query["hub.verify_token"] === process.env.FB_VERIFY_TOKEN
  ) {
    res.send(req.query["hub.challenge"]);
  } else {
    res.sendStatus(400);
  }
});

// Message handler
app.post("/webhook", (req, res) => {
  // Parse the Messenger payload
  // See the Webhook reference
  // https://developers.facebook.com/docs/messenger-platform/webhook-reference
  const data = req.body;

  if (data.object === "page") {
    data.entry.forEach((entry) => {
      entry.messaging.forEach(async (event) => {
        if (event.message && !event.message.is_echo) {
          // Yay! We got a new message!
          // We retrieve the Facebook user ID of the sender
          const sender = event.sender.id;

          // We retrieve the message content
          const { text, attachments } = event.message;

          if (attachments) {
            // We received an attachment
            // Let's reply with an automatic message
            messenger
              .sendMessage(
                sender,
                "Sorry I can only process text messages for now."
              )
              .catch(console.error);
          } else if (text) {
            // We received a text message

            // Default answer with usage guide
            let messages = [
              {
                text: 'You can ask me for advice whether it is safe to perform an activity in COVID-19 pandemic times. For example: "Is it safe to go to a restaurant?"'
              }
            ];

            const currentQuiz = await quiz.getRunningQuiz(sender);

            if (currentQuiz) {
              messages = await quiz.handleQuizAnswer(currentQuiz, text);
            } else {
              const { intents, entities } = await wit.message(text);

              if (intents.length > 0) {
                const topIntent = intents[0];

                if (
                  topIntent.name === "safety_info" &&
                  Array.isArray(entities["activity:activity"])
                ) {
                  const activity = entities["activity:activity"][0].value;

                  messages = await quiz.startQuiz(sender, activity);
                }
              }
            }

            await messenger.sendMessages(sender, messages);
          }
        } else {
          console.log("received event", JSON.stringify(event));
        }
      });
    });
  }
  res.sendStatus(200);
});

app.listen(PORT);
console.log("Listening on :" + PORT + "...");

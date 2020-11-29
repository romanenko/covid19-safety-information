# Creating a COVID-19 info chatbot with Facebook app and Wit.ai

You are going to create a Facebook Messenger Chatbot in this tutorial, which will inform users whether it's safe to perform a certain activity or not. It will also provide a handy advice on how to stay safe during COVID-19 pandemic. 

[Watch the short video about it](https://www.youtube.com/watch?v=FrucqUNOy9A)

After this tutorial, you and your students will know

- How to create a Facebook App
- How to create a [Wit.ai](http://wit.ai) App
- Basic knowledge of training AI models
- Fun of making chatbots!

Let's explore about:  

[Skills and Conversation Scenarios](#skills-and-conversation-scenarios)  
[Dialog Example](#dialog-example)   
[Training Wit.ai](#training-Wit.AI)     
[Facebook Page](#facebook-page)  
[Facebook App](#facebook-app)  
[Glitch App](#glitch-app)  
[Environment Variables](#environment-variables)  
[Airtable](#airtable)  
[Testing your Chatbot](#testing-your-chatbot)  

Main source for health information is CDC official ["Daily Activities and Going Out" safety guide](https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/going-out.html).

## Skills and Conversation Scenarios

Users will discover your bot via link, or by visiting a Facebook page and start chatting. It can also be embedded to any webpage [via Facebook Chat Plugin](https://developers.facebook.com/docs/messenger-platform/discovery/facebook-chat-plugin/). 

Once the conversation started — bot should **greet the user** with introductory message, describing its purpose and giving a hint of how to start interaction — by **asking what activity user is scheming to do**. After that, bot will **ask three questions** to learn more about the environment and social distancing factors, **evaluate the risk** and **end the conversation** with a relevant link to read more about the activity on CDC website.

This brings you and your students to the three skills, you need your bot to have:

1. Greet the user and provide instructions
2. Perform a simple quiz
3. Handle gibberish (random input) and politely bring user back to known scenarios

You will use Facebook and its [Messenger Platform](https://developers.facebook.com/docs/messenger-platform/) to provide conversational interface to the user, Wit.ai to make it understand input in natural language and [Airtable](https://airtable.com) to store health information about the activities and to keep the progress of the Quiz.

## Dialog Example

Example of conversation the user might have with your bot:

```
🤖: Hey! Nice to meet you! You can ask me for advice whether it is safe
		to perform an activity in COVID-19 pandemic times. For example: 
    "Is is safe to go to a restaurant?"

👩‍🦰: Is visiting a hair salon safe?

🤖: How possible you and people around you will wear a mask?

   [ 😷  |  🤷‍♀️  | 🙂  ]

👩‍🦰: 😷 

🤖: How crowded the place will be? 

    [🧍‍♀️ | 👫  | 👨‍👩‍👦‍👦  ]

👩‍🦰: 🧍‍♀️

🤖: How enclosed the space will be around you?

    [ 🤸‍♀️  |  🤷‍♀️  | 🏡  ]

👩‍🦰: 🤸‍♀️

🤖: Ok! Seems like visiting a hair salon is a safe thing to do! 
    Learn more about CDC guidelines in: https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/personal-social-activities.html#nails

🤖: Try asking me about another activity. Like: "Is it safe to go to the gym?"

// And so on...
```

## Training Wit.ai

[Wit.ai](http://wit.ai/) is a tool to build an open source chatbot with advanced natural language(speech or messages) processing, or NLP.

Let's start by signing up for [Wit.ai](http://wit.AI) account and creating the App. After you signed up, you will see [Wit.ai](http://wit.ai) main page. Click "New App" to create an app.

![Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/Screen_Shot_2020-10-25_at_2.56.48_PM.png](Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/Screen_Shot_2020-10-25_at_2.56.48_PM.png)

![Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/Screen_Shot_2020-10-25_at_3.02.07_PM.png](Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/Screen_Shot_2020-10-25_at_3.02.07_PM.png)

In order to use Wit.ai, you need to **train** the model inside of it.

The goal of training is to create an accurate model that answers our questions correctly most of the time.

To train your Wit.ai app, you need to give **utterances** (questions that users might ask), such as:

  Is going to the gym safe?

  Is it safe to use outdoor dining?

You don’t need to describe every way of the questions. Wit will infer this from the few examples you gave. These examples are the training set of your Wit. So, the more examples you give, the better your app will understand what your users are saying.

You also want to teach Wit that you have some **intent** for these utterances, like getting the safety information. To do so, in the **Choose or add an Intent** dropdown, enter the name of your new intent and click **Create Intent**. 

![Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/Screen_Shot_2020-10-25_at_3.14.40_PM.png](Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/Screen_Shot_2020-10-25_at_3.14.40_PM.png)

The app should also be able to handle **gibberish**, a random word that will be marked as "Out of scope". 

![Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/CleanShot_2020-10-27_at_00.24.16.gif](Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/CleanShot_2020-10-27_at_00.24.16.gif)

You can always get some ideas and examples from already created [Wit.ai](http://wit.ai) App in [here](https://wit.ai/apps/695984467678144/understanding).

## Facebook Page

Messenger platform is built with Customer to Business communication in mind, so for Messenger bot to exist, it is a good idea to start by creating a Facebook Page for it. 

The page can be used to guide potential users with the main features of the bot and share useful information with your audience in the future.

Start by opening the Facebook Page creation interface and filling the **Name** and **Category** fields. Best categories for your project could be "Health" or "Education". You can skip adding profile and cover pictures and fill them later. When you are ready to proceed, hit **Create Page** and you are done.

Once the Page is created, it'll be shown to you in Admin mode by default. You'll need to switch to Visitor Preview mode to see how it'll appear to visitors, and, most importantly, to access the Chat interface.

**"Send Message"** action button will be shown and chat interface will be available to interact with users.

![Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/2020-10-25_17.11.42.gif](Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/2020-10-25_17.11.42.gif)

In its initial state chat is just the conversation, where human admins of the Page are interacting with visitors. What you want is a Machine that can do it automatically. Here enters the Facebook App — another step to automate process of having a dialog with your audience.

### Facebook App

You will need to register as a developer on [Facebook for Developers](https://developers.facebook.com/) portal. It's easy! Just hit the "**Log in"** menu item at the top right corner of the page and accept the legal agreement to get started.

When you are done "**My Apps**" menu item will become available. Follow it and start creating an app.

![Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/Screen_Shot_2020-10-25_at_2.41.00_PM.png](Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/Screen_Shot_2020-10-25_at_2.41.00_PM.png)

As this mentioned earlier, Messenger Platform initially was build to benefit and enrich business interactions, so App setup would go easier if you select **"Manage Business Integrations"** category on the first step. If you picked something else, or, literally "Something Else" — not a big deal! You can always customize features and integrations of the App in the future.

After the creation, you can add some products to the app. You are going to set up "**Messenger**".

The first thing to do after clicking "**Set up**" button is to add a page. Follow the steps in the popup window and select your Facebook page that you want to use the bot with.

![Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/2020-10-25_16.38.40.gif](Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/2020-10-25_16.38.40.gif)

## Glitch App

Now, it's time to add a code to hook up all these things together! You need a Node.js app to make a bridge between Facebook app and [Wit.ai](http://wit.ai) App. 

No need to worry, there is a base code in the [Glitch](https://glitch.com/~covid-19-bot-tutorial) and you can simply copy the whole project with "**Remix Projec**t" button and adjust it as you want. It is going to be a project with same code but act as a unique App with the unique combination of environment variables.

![Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/Screen_Shot_2020-10-25_at_5.21.47_PM.png](Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/Screen_Shot_2020-10-25_at_5.21.47_PM.png)

It is a relatively simple Node.js app, which acts as a server to respond to requests, coming from the Facebook App. It handles two types of requests:

- `GET /webhook` — to setup and verify a webhook URL
- `POST /webhook` — to receive, process and respond to incoming messages

The app consists of four main modules:

### app.js - App entry point.

This is where Express server and [Wit.ai](http://wit.ai) connection sets up and main two webhook request handlers are implemented.

The most notable part is the message handler code:

```jsx
// Retreiving unique sender id to identify user across different calls
const sender = event.sender.id;

// Define messages as array of objects
// with required `text` parameter for the message
// and a possible `meta` field with potential additional configuration
// to enhance the message with attachments or Quick Replies in the future
//
// Setting it with default message to provide usage guide for new users
let messages = [
  {
    text:
      'You can ask me for advice whether it is safe to perform an activity in COVID-19 pandemic times. For example: "Is it safe to go to a restaurant?"',
  },
];

// Fetching the quiz session object, associated with the sender
// to understand whether you are in the process of quiz 
const currentQuiz = await quiz.getRunningQuiz(sender);

if (currentQuiz) {
  // If you are — pass the inbound text to the handler function 
  // to continue or to end the ongoing quiz
  messages = await quiz.handleQuizAnswer(currentQuiz, text);
} else {
  // Otherwize — pass the text to WIT.AI to recongize intent and activity from it
  const { intents, entities } = await wit.message(text);

  if (intents.length > 0) {
    const topIntent = intents[0];

    if (
      topIntent.name === "safety_info" &&
      Array.isArray(entities["activity:activity"])
    ) {
      const activity = entities["activity:activity"][0].value;
      
      // If recognized intent has the name "safety_info" and "activity:activity" entity 
      // accociated with it - start a new quiz, with current user and activity
      messages = await quiz.startQuiz(sender, activity);
    }
  }
}

// Deliver the message to the user
await messenger.sendMessages(sender, messages);
```

### quiz.js

This is the module, you are free to customize. It has the Quiz Q&A data:

```jsx
const quizSteps = [
  {
    columnName: "Masks",
    question: "How likely you and people around you will wear a mask?",
    quickReplies: ["🙂 Not likely", "🤷‍♀️ Maybe", "😷 Definitely"],
  },
  {
    columnName: "Crowds",
    question: "How crowded the place will be?",
    quickReplies: ["👨‍👩‍👦‍👦 Crowded", "👫 Maybe", "🧍‍♀️ Not at all"],
  },
  {
    columnName: "Air",
    question: "How enclosed the space will be around you?",
    quickReplies: ["🏡 Enclosed", "🏕 Maybe", "🤸‍♀️ Not at all"],
  },
];
```

Where each step of it has a `question` and set of `quickReplies` to suggest to the User. Field `columnName` represents the name of the column in Airtable, used to store the answer, while User goes through the Quiz. Values, stored in the table are integers in range of 1-3.

### db.js and messenger.js

These modules are used to help establish communication with Facebook Messenger Platform and Airtable API and to provide handy functions to perform basic operations — send messages, retrieve or update a record in Airtable database.

## Environment Variables

Variables which get to set in the environment of the app, before it gets executed. Values then are used in code — this is a common practice to keep secret keys separate from the codebase.

In this project you can control them by modifying the `.env` file and Glitch has a neat UI to manage it:

![Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/Untitled.png](Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/Untitled.png)

Now, you are going to fill the environment variables which are required to connect Facebook app and [Wit.ai](http://wit.ai) app.

First, let's get the app secret. Let's go to your Facebook app → Settings → Basic. Copy and paste the **App Secret** in the FB_APP_SECRET of the Glitch `.env`. It may require your facebook password to get **App Secret** for the first time. 

![Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/2020-10-25_18.12.38.gif](Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/2020-10-25_18.12.38.gif)

Then, let's get the **WIT_TOKEN**. Go to your [Wit.ai](http://wit.AI) app, copy **Server Access** token and paste it in the  **WIT_TOKEN** of the Glitch `.env`

![Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/2020-10-25_18.16.38.gif](Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/2020-10-25_18.16.38.gif)

You also need to provide other environment variables such as **FB_PAGE_TOKEN**, **FB_VERIFY_TOKEN**, **AIRTABLE_API_KEY**, **AIRTABLE_DB_NAME**. We can just type random values for these variables temporarily. 

Go to your Facebook App → Messenger → Settings and generate click "Add callback URL".  You can find callback URL in Glitch → Share → Live app. Paste it and don't forget to add "/webhook" to the end of the url.

![Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/2020-10-25_19.19.29.gif](Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/2020-10-25_19.19.29.gif)

The last step is **FB_PAGE_TOKEN**. Go to your Facebook app → Messenger → Settings and generate the token. Remove your previous **FB_PAGE_TOKEN** and paste the token.

![Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/2020-10-25_19.24.35.gif](Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/2020-10-25_19.24.35.gif)

## Airtable

Every time your Node app receives the message — you should assume it might be unaware of all previous actions. To keep it in context of ongoing conversation you have to keep the state of it in some **persistence layer.** 

Some apps doesn't require having one, but conversational apps, usually do. In this case, you will keep quiz progress across the dialog events and remove it, once the quiz is completed — you don't need to keep any extra data after it.

You will use [Airtable](https://airtable.com/) as a simple service to store session data for ongoing quizzes and access it with its handy JavaScript library.

Start by signing up for an Airtable account and creating a Workspace.

![Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/CleanShot_2020-10-26_at_19.32.36.gif](Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/CleanShot_2020-10-26_at_19.32.36.gif)

Next, create a Base. Choose **"Start from scratch"** and give it a name:

![Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/CleanShot_2020-10-26_at_19.36.05.gif](Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/CleanShot_2020-10-26_at_19.36.05.gif)

Your database will have a table, created for you by default:

![Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/Untitled%201.png](Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/Untitled%201.png)

You can keep it, but change it for your needs. Change the name of the table to **"Quizzes"** and configure four columns with the following configuration:

- **SessionId** — Single line text
- **Activity** — Single line text
- **Masks** — Rating, Max 3 stars
- **Crowds** — Rating, Max 3 stars
- **Air** — Rating, Max 3 stars

This is what end result should look like:

![Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/Untitled%202.png](Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/Untitled%202.png)

Now, to connect this table to your Glitch app, you'll need to get its Base id and API Key. The easiest way to get them is to take a peek to its dynamically generated API documentation.

Navigate to: [https://airtable.com/api](https://airtable.com/api) and select a Base to view its API documentation. 

Scroll to **"Authentication"** section, switch to "JavaScript" and turn on "show API key" checkbox:

![Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/Untitled%203.png](Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/Untitled%203.png)

Let's copy these values and paste them to your `.env` ****file in the Glitch app:

![Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/Untitled%204.png](Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/Untitled%204.png)

## Testing your Chatbot

Now that you have everything set up, navigate to your Facebook page, Click **"View as Visitor"** and, in visitor mode, click **"Send Message"**:

![Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/CleanShot_2020-10-26_at_23.59.27.gif](Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/CleanShot_2020-10-26_at_23.59.27.gif)

Try to ask the bot whether it is safe to go to a restaurant and go through the quiz. It should rate your answers and give you an advice with a link to CDC page. 

Yay! You did it! 🎉

![Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/CleanShot_2020-10-27_at_00.07.14.gif](Creating%20a%20Covid-19%20info%20chatbot%20with%20Facebook%20app%2078e7b28d019c4e5bbc5d3587a318ccf1/CleanShot_2020-10-27_at_00.07.14.gif)

## Future directions

Now that you have an idea how Facebook Messenger Platform,  [Wit.ai](http://wit.ai), Node.js App on Glitch and Airtable can work together to create conversational interfaces. Here are some ideas on what to do next:

- Try to modify `quizSteps` in `quiz.js` and try to go through the quiz with the new scenarios
- Take a peek at **"Understanding"** section of your project's  [Wit.ai](http://wit.ai) dashboard. New utterances, coming from production will appear at the top of the page — you can verify classification results and correct any mistakes to fine-tune your model
- Train  [Wit.ai](http://wit.ai) to recognize another intent, for instance "Is loss of taste and smell is a symptom of COVID-19" could stand for a **"symptoms_info"**. Add a code to handle it in message handler in `app.js`
- Here's another idea! Add a table with Activities to Airtable database and fill it with activity names and associated CDC article links on this page: [https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/going-out.html](https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/going-out.html). Implement a lookup to provide a relevant link, if such Activity was found in the table.

## Authors

- [Jane Hyeseo Shin](https://github.com/janeshin059)
- [Michael Romanenko](https://michael.romanenko.kg/)


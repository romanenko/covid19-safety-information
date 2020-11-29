---
id: ideas
title: Ideas on What to Do Next
---

Now that you have an idea how Facebook Messenger Platform,  [Wit.ai](http://wit.ai), Node.js App on Glitch and Airtable can work together to create conversational interfaces. Here are some ideas on what to do next:

- Try to modify `quizSteps` in `quiz.js` and try to go through the quiz with the new scenarios
- Take a peek at **"Understanding"** section of your project's  [Wit.ai](http://wit.ai) dashboard. New utterances, coming from production will appear at the top of the page — you can verify classification results and correct any mistakes to fine-tune your model
- Train  [Wit.ai](http://wit.ai) to recognize another intent, for instance "Is loss of taste and smell is a symptom of COVID-19" could stand for a **"symptoms_info"**. Add a code to handle it in message handler in `app.js`
- Here's another idea! Add a table with Activities to Airtable database and fill it with activity names and associated CDC article links on this page: [https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/going-out.html](https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/going-out.html). Implement a lookup to provide a relevant link, if such Activity was found in the table.
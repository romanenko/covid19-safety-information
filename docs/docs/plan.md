---
id: plan
title: Planning the Work
---

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

Let's start by [creating Wit.ai app](wit-ai.md) 
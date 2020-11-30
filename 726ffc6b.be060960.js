(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{126:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Screen_Shot_2020-10-25_at_5.21.47_PM-9870fccf6533e0622ee9daf634b9c28f.png"},127:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Untitled-fc769d9ef141e4320ba2891a9e077320.png"},128:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/2020-10-25_18.12.38-347f5e3f8f00d31ad12ccaa7c0e59c1a.gif"},129:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/2020-10-25_18.16.38-1ecdbaa46d1275463e41cd6bf7928b76.gif"},130:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/2020-10-25_19.19.29-b0782d6e9048b154d77022b756dce61f.gif"},131:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/2020-10-25_19.24.35-948936cf773a523bc84ae2a8944c1725.gif"},132:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/CleanShot_2020-10-26_at_19.32.36-ea06c5c68d7b9ade0a470a78544ee7fa.gif"},133:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/CleanShot_2020-10-26_at_19.36.05-535327335c0ec259b0a0d203cb6697a9.gif"},134:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/airtable1-6ffa9559c433e62c8778c397f0c62612.png"},135:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/airtable2-61d71c6ad8add15a0ceb357b3630f61d.png"},136:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/airtable3-97486ddc5ae87d8177b6147c8b5a9e3b.png"},137:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/airtable4-051d7fcb8e001dd71e7a0e79c1380e04.png"},71:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),o=(a(0),a(86)),r={id:"chatbot-logic",title:"Chatbot Logic"},s={unversionedId:"chatbot-logic",id:"chatbot-logic",isDocsHomePage:!1,title:"Chatbot Logic",description:"Now, it's time to add some code to hook up all these things together! You'll need a Node.js app to make a bridge between Facebook app and Wit.ai App.",source:"@site/docs/chatbot-logic.md",slug:"/chatbot-logic",permalink:"/covid19-safety-information/docs/chatbot-logic",editUrl:"https://github.com/romanenko/covid19-safety-information/docs/chatbot-logic.md",version:"current",sidebar:"someSidebar",previous:{title:"Facebook App",permalink:"/covid19-safety-information/docs/facebook-app"},next:{title:"Testing your Chatbot",permalink:"/covid19-safety-information/docs/testing"}},c=[{value:"Node App",id:"node-app",children:[{value:"app.js - App entry point",id:"appjs---app-entry-point",children:[]},{value:"quiz.js",id:"quizjs",children:[]},{value:"db.js and messenger.js",id:"dbjs-and-messengerjs",children:[]}]},{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Airtable",id:"airtable",children:[]}],l={rightToc:c};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Now, it's time to add some code to hook up all these things together! You'll need a Node.js app to make a bridge between Facebook app and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://wit.ai"}),"Wit.ai")," App. "),Object(o.b)("h2",{id:"node-app"},"Node App"),Object(o.b)("p",null,"No need to worry, there is a base code in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://glitch.com/~covid-19-bot-tutorial"}),"Glitch"),' and you can simply copy the whole project with "',Object(o.b)("strong",{parentName:"p"},"Remix Project"),'" button and adjust it as you want. It is going to be a project with same code but act as a unique Application with its own set of environment variables.'),Object(o.b)("p",null,Object(o.b)("img",{alt:"../static/img/article/Screen_Shot_2020-10-25_at_5.21.47_PM.png",src:a(126).default})),Object(o.b)("p",null,"It is a relatively simple Node.js app, which acts as a server to respond to requests, coming from the Facebook App. It handles two types of requests:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"GET /webhook")," \u2014 to setup and verify a webhook URL"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"POST /webhook")," \u2014 to receive, process and respond to incoming messages")),Object(o.b)("p",null,"The app consists of four main modules:"),Object(o.b)("h3",{id:"appjs---app-entry-point"},"app.js - App entry point"),Object(o.b)("p",null,"This is where Express server and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://wit.ai"}),"Wit.ai")," connection sets up and main two webhook request handlers are implemented."),Object(o.b)("p",null,"The most notable part is the message handler code:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'// Retreiving unique sender id to identify user across different calls\nconst sender = event.sender.id;\n\n// Define messages as array of objects\n// with required `text` parameter for the message\n// and a possible `meta` field with potential additional configuration\n// to enhance the message with attachments or Quick Replies in the future\n//\n// Setting it with default message to provide usage guide for new users\nlet messages = [\n  {\n    text:\n      \'You can ask me for advice whether it is safe to perform an activity in COVID-19 pandemic times. For example: "Is it safe to go to a restaurant?"\',\n  },\n];\n\n// Fetching the quiz session object, associated with the sender\n// to understand whether you are in the process of quiz \nconst currentQuiz = await quiz.getRunningQuiz(sender);\n\nif (currentQuiz) {\n  // If you are \u2014 pass the inbound text to the handler function \n  // to continue or to end the ongoing quiz\n  messages = await quiz.handleQuizAnswer(currentQuiz, text);\n} else {\n  // Otherwize \u2014 pass the text to WIT.AI to recongize intent and activity from it\n  const { intents, entities } = await wit.message(text);\n\n  if (intents.length > 0) {\n    const topIntent = intents[0];\n\n    if (\n      topIntent.name === "safety_info" &&\n      Array.isArray(entities["activity:activity"])\n    ) {\n      const activity = entities["activity:activity"][0].value;\n      \n      // If recognized intent has the name "safety_info" and "activity:activity" entity \n      // accociated with it - start a new quiz, with current user and activity\n      messages = await quiz.startQuiz(sender, activity);\n    }\n  }\n}\n\n// Deliver the message to the user\nawait messenger.sendMessages(sender, messages);\n')),Object(o.b)("h3",{id:"quizjs"},"quiz.js"),Object(o.b)("p",null,"This is the module, you are free to customize. It has the Quiz Q&A data:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const quizSteps = [\n  {\n    columnName: "Masks",\n    question: "How likely you and people around you will wear a mask?",\n    quickReplies: ["\ud83d\ude42 Not likely", "\ud83e\udd37\u200d\u2640\ufe0f Maybe", "\ud83d\ude37 Definitely"],\n  },\n  {\n    columnName: "Crowds",\n    question: "How crowded the place will be?",\n    quickReplies: ["\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66 Crowded", "\ud83d\udc6b Maybe", "\ud83e\uddcd\u200d\u2640\ufe0f Not at all"],\n  },\n  {\n    columnName: "Air",\n    question: "How enclosed the space will be around you?",\n    quickReplies: ["\ud83c\udfe1 Enclosed", "\ud83c\udfd5 Maybe", "\ud83e\udd38\u200d\u2640\ufe0f Not at all"],\n  },\n];\n')),Object(o.b)("p",null,"Where each step of it has a ",Object(o.b)("inlineCode",{parentName:"p"},"question")," and set of ",Object(o.b)("inlineCode",{parentName:"p"},"quickReplies")," to suggest to the User. Field ",Object(o.b)("inlineCode",{parentName:"p"},"columnName")," represents the name of the column in Airtable, used to store the answer, while User goes through the Quiz. Values, stored in the table are integers in range of 1-3."),Object(o.b)("h3",{id:"dbjs-and-messengerjs"},"db.js and messenger.js"),Object(o.b)("p",null,"These modules are used to help establish communication with Facebook Messenger Platform and Airtable API and to provide handy functions to perform basic operations \u2014 send messages, retrieve or update a record in Airtable database."),Object(o.b)("h2",{id:"environment-variables"},"Environment Variables"),Object(o.b)("p",null,"Variables which get to set in the environment of the app, before it gets executed. Values then are used in code \u2014 this is a common practice to keep secret keys separate from the codebase."),Object(o.b)("p",null,"In this project you can control them by modifying the ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file and Glitch has a neat UI to manage it:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"../static/img/article/Untitled.png",src:a(127).default})),Object(o.b)("p",null,"Now, you are going to fill in the environment variables which are required to connect Facebook app and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://wit.ai"}),"Wit.ai")," app."),Object(o.b)("p",null,"First, let's get the app secret. Let's go to your Facebook app \u2192 Settings \u2192 Basic. Copy and paste the ",Object(o.b)("strong",{parentName:"p"},"App Secret")," in the FB_APP_SECRET of the Glitch ",Object(o.b)("inlineCode",{parentName:"p"},".env"),". It may require your facebook password to get ",Object(o.b)("strong",{parentName:"p"},"App Secret")," for the first time. "),Object(o.b)("p",null,Object(o.b)("img",{alt:"../static/img/article/2020-10-25_18.12.38.gif",src:a(128).default})),Object(o.b)("p",null,"Then, let's get the ",Object(o.b)("strong",{parentName:"p"},"WIT_TOKEN"),". Go to your ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://wit.AI"}),"Wit.ai")," app, copy ",Object(o.b)("strong",{parentName:"p"},"Server Access")," token and paste it in the  ",Object(o.b)("strong",{parentName:"p"},"WIT_TOKEN")," of the Glitch ",Object(o.b)("inlineCode",{parentName:"p"},".env")),Object(o.b)("p",null,Object(o.b)("img",{alt:"../static/img/article/2020-10-25_18.16.38.gif",src:a(129).default})),Object(o.b)("p",null,"You also need to provide other environment variables such as ",Object(o.b)("strong",{parentName:"p"},"FB_PAGE_TOKEN"),", ",Object(o.b)("strong",{parentName:"p"},"FB_VERIFY_TOKEN"),", ",Object(o.b)("strong",{parentName:"p"},"AIRTABLE_API_KEY"),", ",Object(o.b)("strong",{parentName:"p"},"AIRTABLE_DB_NAME"),". We can just type random values for these variables temporarily. "),Object(o.b)("p",null,'Go to your Facebook App \u2192 Messenger \u2192 Settings and generate click "Add callback URL".  You can find callback URL in Glitch \u2192 Share \u2192 Live app. Paste it and don\'t forget to add "/webhook" to the end of the url.'),Object(o.b)("p",null,Object(o.b)("img",{alt:"../static/img/article/2020-10-25_19.19.29.gif",src:a(130).default})),Object(o.b)("p",null,"The last step is ",Object(o.b)("strong",{parentName:"p"},"FB_PAGE_TOKEN"),". Go to your Facebook app \u2192 Messenger \u2192 Settings and generate the token. Remove your previous ",Object(o.b)("strong",{parentName:"p"},"FB_PAGE_TOKEN")," and paste the token."),Object(o.b)("p",null,Object(o.b)("img",{alt:"../static/img/article/2020-10-25_19.24.35.gif",src:a(131).default})),Object(o.b)("h2",{id:"airtable"},"Airtable"),Object(o.b)("p",null,"Every time your Node app receives the message \u2014 you should assume it might be unaware of all previous actions. To keep it in context of ongoing conversation you have to keep the state of it in some ",Object(o.b)("strong",{parentName:"p"},"persistence layer.")," "),Object(o.b)("p",null,"Some apps doesn't require having one, but conversational apps usually do. In this case, you will keep quiz progress across the dialog events and remove it, once the quiz is completed \u2014 you don't need to keep any extra data after it."),Object(o.b)("p",null,"You will use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://airtable.com/"}),"Airtable")," as a simple service to store session data for ongoing quizzes and access it with its handy JavaScript library."),Object(o.b)("p",null,"Start by signing up for an Airtable account and creating a Workspace."),Object(o.b)("p",null,Object(o.b)("img",{alt:"../static/img/article/CleanShot_2020-10-26_at_19.32.36.gif",src:a(132).default})),Object(o.b)("p",null,"Next, create a Base. Choose ",Object(o.b)("strong",{parentName:"p"},'"Start from scratch"')," and give it a name:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"../static/img/article/CleanShot_2020-10-26_at_19.36.05.gif",src:a(133).default})),Object(o.b)("p",null,"Your database will have a table, created for you by default:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"../static/img/article/airtable1.png",src:a(134).default})),Object(o.b)("p",null,"You can keep it, but change it for your needs. Change the name of the table to ",Object(o.b)("strong",{parentName:"p"},'"Quizzes"')," and configure four columns with the following configuration:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"SessionId")," \u2014 Single line text"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Activity")," \u2014 Single line text"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Masks")," \u2014 Rating, Max 3 stars"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Crowds")," \u2014 Rating, Max 3 stars"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Air")," \u2014 Rating, Max 3 stars")),Object(o.b)("p",null,"This is what end result should look like:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"../static/img/article/airtable2.png",src:a(135).default})),Object(o.b)("p",null,"Now, to connect this table to your Glitch app, you'll need to get its Base id and API Key. The easiest way to get them is to take a peek to its dynamically generated API documentation."),Object(o.b)("p",null,"Navigate to: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://airtable.com/api"}),"https://airtable.com/api")," and select a Base to view its API documentation. "),Object(o.b)("p",null,"Scroll down to ",Object(o.b)("strong",{parentName:"p"},'"Authentication"'),' section, switch to "JavaScript" and turn on "show API key" checkbox:'),Object(o.b)("p",null,Object(o.b)("img",{alt:"../static/img/article/airtable3.png",src:a(136).default})),Object(o.b)("p",null,"Let's copy these values and paste them to your ",Object(o.b)("inlineCode",{parentName:"p"},".env")," ****file in the Glitch app:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"../static/img/article/airtable4.png",src:a(137).default})))}p.isMDXComponent=!0},86:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,m=b["".concat(r,".").concat(d)]||b[d]||u[d]||o;return a?i.a.createElement(m,s(s({ref:t},l),{},{components:a})):i.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var l=2;l<o;l++)r[l]=a[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);
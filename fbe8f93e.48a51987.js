(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=(n(0),n(87));const o={id:"plan",title:"Planning the Work"},i={unversionedId:"plan",id:"plan",isDocsHomePage:!1,title:"Planning the Work",description:"Skills and Conversation Scenarios",source:"@site/docs/plan.md",slug:"/plan",permalink:"/covid19-safety-information/docs/plan",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/plan.md",version:"current",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/covid19-safety-information/docs/"},next:{title:"Training Wit.ai",permalink:"/covid19-safety-information/docs/wit-ai"}},s=[{value:"Skills and Conversation Scenarios",id:"skills-and-conversation-scenarios",children:[]},{value:"Dialog Example",id:"dialog-example",children:[]}],c={rightToc:s};function l({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"skills-and-conversation-scenarios"},"Skills and Conversation Scenarios"),Object(a.b)("p",null,"Users will discover your bot via link, or by visiting a Facebook page and start chatting. It can also be embedded to any webpage ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.facebook.com/docs/messenger-platform/discovery/facebook-chat-plugin/"}),"via Facebook Chat Plugin"),". "),Object(a.b)("p",null,"Once the conversation started \u2014 bot should ",Object(a.b)("strong",{parentName:"p"},"greet the user")," with introductory message, describing its purpose and giving a hint of how to start interaction \u2014 by ",Object(a.b)("strong",{parentName:"p"},"asking what activity user is scheming to do"),". After that, bot will ",Object(a.b)("strong",{parentName:"p"},"ask three questions")," to learn more about the environment and social distancing factors, ",Object(a.b)("strong",{parentName:"p"},"evaluate the risk")," and ",Object(a.b)("strong",{parentName:"p"},"end the conversation")," with a relevant link to read more about the activity on CDC website."),Object(a.b)("p",null,"This brings you and your students to the three skills, you need your bot to have:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Greet the user and provide instructions"),Object(a.b)("li",{parentName:"ol"},"Perform a simple quiz"),Object(a.b)("li",{parentName:"ol"},"Handle gibberish (random input) and politely bring user back to known scenarios")),Object(a.b)("p",null,"You will use Facebook and its ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.facebook.com/docs/messenger-platform/"}),"Messenger Platform")," to provide conversational interface to the user, Wit.ai to make it understand input in natural language and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://airtable.com"}),"Airtable")," to store health information about the activities and to keep the progress of the Quiz."),Object(a.b)("h2",{id:"dialog-example"},"Dialog Example"),Object(a.b)("p",null,"Example of conversation the user might have with your bot:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'\ud83e\udd16: Hey! Nice to meet you! You can ask me for advice whether it is safe\n        to perform an activity in COVID-19 pandemic times. For example: \n    "Is is safe to go to a restaurant?"\n\n\ud83d\udc69\u200d\ud83e\uddb0: Is visiting a hair salon safe?\n\n\ud83e\udd16: How possible you and people around you will wear a mask?\n\n   [ \ud83d\ude37  |  \ud83e\udd37\u200d\u2640\ufe0f  | \ud83d\ude42  ]\n\n\ud83d\udc69\u200d\ud83e\uddb0: \ud83d\ude37 \n\n\ud83e\udd16: How crowded the place will be? \n\n    [\ud83e\uddcd\u200d\u2640\ufe0f | \ud83d\udc6b  | \ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66  ]\n\n\ud83d\udc69\u200d\ud83e\uddb0: \ud83e\uddcd\u200d\u2640\ufe0f\n\n\ud83e\udd16: How enclosed the space will be around you?\n\n    [ \ud83e\udd38\u200d\u2640\ufe0f  |  \ud83e\udd37\u200d\u2640\ufe0f  | \ud83c\udfe1  ]\n\n\ud83d\udc69\u200d\ud83e\uddb0: \ud83e\udd38\u200d\u2640\ufe0f\n\n\ud83e\udd16: Ok! Seems like visiting a hair salon is a safe thing to do! \n    Learn more about CDC guidelines in: https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/personal-social-activities.html#nails\n\n\ud83e\udd16: Try asking me about another activity. Like: "Is it safe to go to the gym?"\n\n// And so on...\n')))}l.isMDXComponent=!0},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
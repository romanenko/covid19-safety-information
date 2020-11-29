(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(87)),i={id:"ideas",title:"Ideas on What to Do Next"},c={unversionedId:"ideas",id:"ideas",isDocsHomePage:!1,title:"Ideas on What to Do Next",description:"Now that you have an idea how Facebook Messenger Platform,  Wit.ai, Node.js App on Glitch and Airtable can work together to create conversational interfaces. Here are some ideas on what to do next:",source:"@site/docs/ideas.md",slug:"/ideas",permalink:"/covid19-safety-information/docs/ideas",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/ideas.md",version:"current",sidebar:"someSidebar",previous:{title:"Testing your Chatbot",permalink:"/covid19-safety-information/docs/testing"},next:{title:"Keep learning",permalink:"/covid19-safety-information/docs/learn-more"}},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Now that you have an idea how Facebook Messenger Platform,  ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://wit.ai"}),"Wit.ai"),", Node.js App on Glitch and Airtable can work together to create conversational interfaces. Here are some ideas on what to do next:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Try to modify ",Object(o.b)("inlineCode",{parentName:"li"},"quizSteps")," in ",Object(o.b)("inlineCode",{parentName:"li"},"quiz.js")," and try to go through the quiz with the new scenarios"),Object(o.b)("li",{parentName:"ul"},"Take a peek at ",Object(o.b)("strong",{parentName:"li"},'"Understanding"')," section of your project's  ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://wit.ai"}),"Wit.ai")," dashboard. New utterances, coming from production will appear at the top of the page \u2014 you can verify classification results and correct any mistakes to fine-tune your model"),Object(o.b)("li",{parentName:"ul"},"Train  ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://wit.ai"}),"Wit.ai"),' to recognize another intent, for instance "Is loss of taste and smell is a symptom of COVID-19" could stand for a ',Object(o.b)("strong",{parentName:"li"},'"symptoms_info"'),". Add a code to handle it in message handler in ",Object(o.b)("inlineCode",{parentName:"li"},"app.js")),Object(o.b)("li",{parentName:"ul"},"Here's another idea! Add a table with Activities to Airtable database and fill it with activity names and associated CDC article links on this page: ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/going-out.html"}),"https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/going-out.html"),". Implement a lookup to provide a relevant link, if such Activity was found in the table.")))}p.isMDXComponent=!0},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,b=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);
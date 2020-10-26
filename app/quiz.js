const { findOne, updateOrInsert, destroy } = require("./db");

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

function getMessagePayload(step) {
  return {
    text: step.question,
    meta: {
      quick_replies: step.quickReplies.map((title, index) => ({
        content_type: "text",
        title,
        payload: index + 1,
      })),
    },
  };
}

async function getRunningQuiz(sessionId) {
  return findOne("Quizzes", "SessionId", sessionId);
}

async function startQuiz(sessionId, activityName) {
  await updateOrInsert("Quizzes", "SessionId", {
    SessionId: sessionId,
    Activity: activityName,
  });
  const messages = [
    {
      text: `Seems like you are going to ${activityName}. You can read some information about going out: https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/going-out.html`,
    },
    {
      text:
        "To tell you more about the potential risks, could you, please, answer couple of questions?",
    },
    getMessagePayload(quizSteps[0]),
  ];
  return messages;
}

async function handleQuizAnswer(quiz, text) {
  const currentStepIndex = quizSteps.findIndex((step) => {
    const score = quiz.get(step.columnName);
    return !Number.isInteger(score);
  });
  const currentStep = quizSteps[currentStepIndex];

  const quickReplyIndex = currentStep.quickReplies.indexOf(text);
  const submittedScore =
    quickReplyIndex >= 0 ? quickReplyIndex + 1 : parseInt(text, 10);

  if (
    !Number.isInteger(submittedScore) ||
    submittedScore < 1 ||
    submittedScore > 3
  ) {
    return [
      { text: `${currentStep.question}. Please, provide an answer in range of 1-3` }
    ];
  }

  const nextStep = quizSteps[currentStepIndex + 1];

  if (nextStep) {
    await updateOrInsert("Quizzes", "SessionId", {
      ...quiz._rawJson.fields,
      [currentStep.columnName]: submittedScore,
    });

    return [getMessagePayload(nextStep)];
  }

  let totalScore = submittedScore;

  for (let i = 0; i < quizSteps.length - 1; i++) {
    totalScore += quiz.get(quizSteps[i].columnName);
  }

  const safetySummary = totalScore < 6 ? "not safe" : "safe";

  await destroy("Quizzes", quiz.getId());

  return [
    {
      text: `Considering the given answers, looks like to ${quiz.get(
        "Activity"
      )} is ${safetySummary}.`,
    },
    {
      text:
        "Read more about understanding potential risks of going out: https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/deciding-to-go-out.html",
    },
  ];
}

module.exports = {
  getRunningQuiz,
  startQuiz,
  handleQuizAnswer,
};

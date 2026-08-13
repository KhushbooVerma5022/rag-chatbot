import { generateAnswer } from "./rag/generateAnswer.js";

const question = "How many casual leaves do employees get?";

const context = `
Employees get 12 casual leaves per year.
Employees can work from home twice a week.
`;

const answer = await generateAnswer(question, context);

console.log("Answer:", answer);
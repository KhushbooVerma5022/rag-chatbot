import { createEmbeddings } from "./rag/embeddings.js";

import {
    addDocument,
    searchSimilar
} from "./rag/vectorStore.js";

const documents = [
    "Employees get 12 casual leaves per year.",
    "Employees can work from home twice a week.",
    "Salary is credited on the last working day of every month.",
    "Office working hours are 9 AM to 6 PM."
];

for (const text of documents) {
    const embedding = await createEmbeddings(text);

    addDocument(text, embedding, {
        source: "test.pdf"
    });
}

const question = "How many leaves do employees get?";

const queryEmbedding = await createEmbeddings(question);

const results = searchSimilar(queryEmbedding);

console.log("Question:", question);

console.log("\nTop results:");

results.forEach((result, index) => {
    console.log(`\n${index + 1}. Score: ${result.score}`);
    console.log(`Text: ${result.text}`);
});
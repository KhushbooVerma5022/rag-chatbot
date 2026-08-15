import { createEmbeddings } from "./rag/embeddings.js";
import { addDocument } from "./rag/vectorStore.js";
import { askRAG } from "./rag/ragPipeline.js";

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

const question = "How many casual leaves do employees get?";

const answer = await askRAG(question);

console.log("\nQuestion:", question);
console.log("\nRAG Answer:", answer);
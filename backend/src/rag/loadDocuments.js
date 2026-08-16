import { createEmbeddings } from "./embeddings.js";
import { addDocument } from "./vectorStore.js";

export const loadDocuments = async () => {
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

    console.log("Documents loaded into vector store");
};
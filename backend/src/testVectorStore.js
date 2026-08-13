import { createEmbeddings } from './rag/embeddings.js';
import { addDocument, getDocuments } from './rag/vectorStore.js';

const text = "Employees get 12 casual leaves per year.";

const embedding = await createEmbeddings(text);

addDocument(text, embedding, {
    source: 'test.pdf',
})

const documents = getDocuments();

console.log("Total documents:", documents.length);

console.log("Stored text:", documents[0].text);

console.log("Vector length:", documents[0].embedding.length);

console.log("Metadata:", documents[0].metadata);
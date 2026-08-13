import {cosineSimilarity} from './rag/vectorStore.js';

const vectorA = [1, 2, 3];
const vectorB = [4, 5, 6];

const score = cosineSimilarity(vectorA, vectorB);

console.log(`Cosine similarity score: ${score}`);
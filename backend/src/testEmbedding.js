import {createEmbeddings} from './rag/embeddings.js';

const text =  "Employees get 12 casual leaves per year.";

const vector = await createEmbeddings(text);

console.log('Vector length:', vector.length);
console.log('First 10 values:', vector.slice(0, 10));
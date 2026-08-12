import { loadPDF } from "./rag/loader.js";
import { splitText } from "./rag/splitter.js";

const text = await loadPDF('./uploads/test.pdf');
const chunks = splitText(text, 200, 30);

console.log('Total chunks:', chunks.length);

chunks.forEach((chunk, index) => {
    console.log(`\n--- Chunk ${index + 1} ---`);
    console.log(chunk);
})
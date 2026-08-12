import { loadPDF } from "./rag/loader.js";

const text = await loadPDF("./uploads/test.pdf");

console.log(text);
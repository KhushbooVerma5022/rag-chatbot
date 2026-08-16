import { loadPDF } from "./loader.js";
import { splitText } from "./splitter.js";
import { createEmbeddings } from "./embeddings.js";
import { addDocument } from "./vectorStore.js";

export const loadPDFData = async () => {
    const text = await loadPDF("uploads/test.pdf");

    const chunks = splitText(text, 500, 50);

    for (const chunk of chunks) {
        const embedding = await createEmbeddings(chunk);

        addDocument(chunk, embedding, {
            source: "test.pdf"
        });
    }

    console.log("PDF loaded into vector store");
};
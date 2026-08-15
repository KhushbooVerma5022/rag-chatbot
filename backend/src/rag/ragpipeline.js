import { createEmbeddings} from "./embeddings.js";
import { searchSimilar } from "./vectorStore.js";
import { generateAnswer } from "./generateAnswer.js"

export const askRAG = async (question) => {
    const queryEmbedding = await createEmbeddings(question); 

    const results = await searchSimilar(queryEmbedding);

    const context = results
    .map((result) => result.text)
    .join("\n");

    const answer = await generateAnswer(question, context);
    return answer;
}  
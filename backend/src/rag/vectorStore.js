
const vectorStore = [];
export const addDocument = (text, embedding, metadata = {}) => {
    vectorStore.push({
        text,
        embedding,
        metadata
    });
}

export const getDocuments = () => {
    return vectorStore;
}

export const cosineSimilarity = (vectorA, vectorB) => {
    let dotProduct = 0;
    let magnitudeA = 0;
    let magnitudeB = 0;

    for(let i = 0; i < vectorA.length; i++){
        dotProduct += vectorA[i] * vectorB[i];
        magnitudeA += vectorA[i] * vectorA[i];
        magnitudeB += vectorB[i] * vectorB[i];
    } 
    magnitudeA = Math.sqrt(magnitudeA);
    magnitudeB = Math.sqrt(magnitudeB);
 
    return dotProduct / (magnitudeA * magnitudeB);
}

export const searchSimilar = (queryEmbedding) => {
    const documents = getDocuments(); 

    const results = documents.map((document) => {
        const score = cosineSimilarity(
            queryEmbedding,
            document.embedding
        );

        return {
            ...document,
            score
        }
    })
    results.sort((a, b) => b.score - a.score);

    return results.slice(0, 2);
}
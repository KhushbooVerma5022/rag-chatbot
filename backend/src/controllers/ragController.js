import { askRAG } from '../rag/ragpipeline.js';

export const askQuestion = async (req, res) => {
    const { question } = req.body;

    const answer = await askRAG(question);

    res.json({
        answer
    })
}
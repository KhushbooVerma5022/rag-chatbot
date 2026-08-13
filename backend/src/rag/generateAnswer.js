import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
dotenv.config();

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY,
})

export const generateAnswer = async (question, context) => {
    const prompt = `
Answer the question using only the provided context.

Context:
${context}

Question:
${question}
`;

    const response = await ai.interactions.create({
        model: "gemini-3.6-flash",
        input: prompt
    });

    return response.output_text;
};
import {GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY
})

export const createEmbeddings = async (text) => {
    const result = await ai.models.embedContent({
        model: "gemini-embedding-001", 
        contents: text
    });

    return result.embeddings[0].values;
}
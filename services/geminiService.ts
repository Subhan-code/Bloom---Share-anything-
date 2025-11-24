import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedTextResponse } from "../types";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const enhanceTextContent = async (text: string, mode: 'grammar' | 'summarize' | 'optimize'): Promise<GeneratedTextResponse> => {
  try {
    const modelId = "gemini-2.5-flash";
    
    let prompt = "";
    if (mode === 'grammar') {
      prompt = `Fix grammar, spelling, and improve the flow of the following text. Return the corrected text. Text: "${text}"`;
    } else if (mode === 'summarize') {
      prompt = `Summarize the following text into a concise paragraph. Text: "${text}"`;
    } else if (mode === 'optimize') {
      prompt = `Optimize this text for social media sharing. Make it engaging, add emojis where appropriate, and generate 3 relevant hashtags. Text: "${text}"`;
    }

    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            content: { type: Type.STRING, description: "The processed text result" },
            summary: { type: Type.STRING, description: "A very brief one-sentence meta description of what this text is about" },
            tags: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            }
          },
          required: ["content"]
        }
      }
    });

    const responseText = response.text;
    if (!responseText) {
      throw new Error("No content generated");
    }

    return JSON.parse(responseText) as GeneratedTextResponse;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
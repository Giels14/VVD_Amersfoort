import { GoogleGenAI, Type } from "@google/genai";
import { ImageSize } from "../types";
import { ELECTION_PROGRAM_TEXT } from "../constants";

export interface GeneratedQuote {
  quote: string;
  sourceText: string;
}

export const generateCampaignQuotes = async (topic: string): Promise<GeneratedQuote[]> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const prompt = `Je bent een campagneleider en copywriter voor de VVD Amersfoort. 
  Genereer 3 pakkende, korte oneliners (max 15 woorden) gebaseerd op het onderstaande verkiezingsprogramma.
  
  Onderwerp focus: ${topic === 'Algemeen' ? 'De belangrijkste speerpunten' : topic}

  Richtlijnen:
  1. De toon moet direct, energiek en aansprekend zijn voor de burger van Amersfoort.
  2. Wijk NIET af van de inhoud. Verzin geen beleid.
  3. Baseer je strikt op de tekst.
  4. Geef bij elke quote aan wat de oorspronkelijke tekst is waar dit op gebaseerd is.

  VERKIEZINGSPROGRAMMA TEKST:
  ${ELECTION_PROGRAM_TEXT}
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              quote: { type: Type.STRING, description: "De pakkende oneliner" },
              sourceText: { type: Type.STRING, description: "De oorspronkelijke tekst uit het programma waarop dit gebaseerd is" }
            },
            required: ["quote", "sourceText"]
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as GeneratedQuote[];
    }
    return [];
  } catch (error) {
    console.error("Gemini Quote Generation Error:", error);
    throw new Error("Kon geen quotes genereren. Probeer het later opnieuw.");
  }
};

export const generateCandidateImage = async (
  prompt: string,
  size: ImageSize
): Promise<string> => {
  // Ensure we have a fresh instance with the current key
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  // Fallback prompt enhancement for better results if user is brief
  const enhancedPrompt = `A high quality professional studio portrait of a Dutch politician named ${prompt}. The person is looking friendly and confident, wearing smart business casual attire suitable for a VVD election campaign poster. Neutral, soft lighting.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: {
        parts: [
          {
            text: enhancedPrompt,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "3:4", // Portrait aspect ratio for posters
          imageSize: size,
        },
      },
    });

    // Iterate parts to find the image
    if (response.candidates && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.data) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }

    throw new Error("No image data found in response");
  } catch (error: any) {
    console.error("Gemini Image Generation Error:", error);
    if (error.message?.includes("Requested entity was not found")) {
        // Trigger re-auth flow if possible or inform user
        if ((window as any).aistudio) {
             (window as any).aistudio.openSelectKey();
        }
        throw new Error("API Key invalid or expired. Please re-select key.");
    }
    throw error;
  }
};
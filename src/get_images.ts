import { GoogleGenAI } from "@google/genai";

async function getImages() {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("GEMINI_API_KEY is not set");
      return;
    }
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Find 6-8 direct image URLs (lh3.googleusercontent.com) for 'Adhya Grand Sirsi' from Google Maps. Return them as a JSON array of strings. Only return the JSON.",
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json"
      }
    });
    console.log(response.text);
  } catch (error) {
    console.error("Error fetching images:", error);
  }
}

getImages();

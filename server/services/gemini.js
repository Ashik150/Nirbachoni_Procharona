import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export const analyzeFeedback = async (message) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `
      Analyze the following feedback comment and categorize it into a single, short Bangla tag (maximum 2-3 words).
      Examples: "Roads are bad" -> "রাস্তাঘাট সংস্কার", "Need more schools" -> "শিক্ষা উন্নয়ন", "Water issue" -> "পানি সমস্যা".
      
      Feedback: "${message}"
      
      Output only the tag.
    `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        return text.trim();
    } catch (error) {
        console.error("Error analyzing feedback with Gemini:", error);
        return "সাধারণ"; // Default tag if analysis fails
    }
};

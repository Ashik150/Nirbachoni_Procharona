import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY || "";

// Keyword-based fallback tagging system
const keywordTags = {
    'রাস্তা': 'রাস্তাঘাট সংস্কার',
    'road': 'রাস্তাঘাট সংস্কার',
    'পথ': 'রাস্তাঘাট সংস্কার',
    'স্কুল': 'শিক্ষা উন্নয়ন',
    'school': 'শিক্ষা উন্নয়ন',
    'শিক্ষা': 'শিক্ষা উন্নয়ন',
    'education': 'শিক্ষা উন্নয়ন',
    'পানি': 'পানি সমস্যা',
    'water': 'পানি সমস্যা',
    'বিদ্যুৎ': 'বিদ্যুৎ সমস্যা',
    'electricity': 'বিদ্যুৎ সমস্যা',
    'স্বাস্থ্য': 'স্বাস্থ্যসেবা',
    'health': 'স্বাস্থ্যসেবা',
    'হাসপাতাল': 'স্বাস্থ্যসেবা',
    'hospital': 'স্বাস্থ্যসেবা',
    'চাকরি': 'কর্মসংস্থান',
    'job': 'কর্মসংস্থান',
    'employment': 'কর্মসংস্থান',
    'নিরাপত্তা': 'নিরাপত্তা',
    'security': 'নিরাপত্তা',
    'safety': 'নিরাপত্তা',
};

const analyzeWithKeywords = (message) => {
    const lowerMessage = message.toLowerCase();
    for (const [keyword, tag] of Object.entries(keywordTags)) {
        if (lowerMessage.includes(keyword.toLowerCase())) {
            return tag;
        }
    }
    return 'সাধারণ';
};

export const analyzeFeedback = async (message) => {
    if (!apiKey) {
        console.log("⚠️ No API key, using keyword-based tagging");
        return analyzeWithKeywords(message);
    }

    // Try Gemini with versioned model names
    const modelsToTry = [
        "gemini-1.5-flash-002",
        "gemini-1.5-flash-001",
        "gemini-1.5-pro-002",
        "gemini-1.5-pro-001",
    ];

    for (const modelName of modelsToTry) {
        try {
            console.log(`🔍 Trying Gemini model: ${modelName}...`);
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: modelName });

            const prompt = `Analyze this feedback and provide ONLY a short Bangla category tag (2-3 words maximum).

Examples:
- "Roads are bad" → রাস্তাঘাট সংস্কার
- "Need schools" → শিক্ষা উন্নয়ন  
- "Water problem" → পানি সমস্যা

Feedback: "${message}"

Tag:`;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text().trim();
            const tag = text.replace(/["""]/g, '').split('\n')[0].trim();

            console.log(`✅ Gemini SUCCESS with ${modelName}! Tag: "${tag}"`);
            return tag;

        } catch (error) {
            console.log(`❌ ${modelName} failed: ${error.status || error.message}`);
            continue; // Try next model
        }
    }

    // All Gemini models failed, use keywords
    console.log(`⚠️ All Gemini models failed, using keyword-based tagging`);
    return analyzeWithKeywords(message);
};

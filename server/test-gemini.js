import { analyzeFeedback } from './services/gemini.js';

console.log('\n🧪 Testing Gemini API with fresh key...\n');

const testMessages = [
    "আমাদের এলাকায় রাস্তা খুব খারাপ",
    "স্কুলে শিক্ষক নেই",
    "পানির সমস্যা",
];

(async () => {
    for (const msg of testMessages) {
        console.log(`\n📝 Input: "${msg}"`);
        const tag = await analyzeFeedback(msg);
        console.log(`✅ Tag: "${tag}"`);
    }
    console.log('\n✅ Test complete!\n');
})();

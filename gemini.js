import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function generateBlog(topic) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash-lite"
  });

  const prompt = `
Write a complete SEO-friendly HTML blog post about: ${topic}

Requirements:
- HTML only
- H1 title
- At least 1000 words
- Several H2 headings
- Two image placeholders:
<img src="IMAGE1">
<img src="IMAGE2">
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
}

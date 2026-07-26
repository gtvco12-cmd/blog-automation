
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function generateBlog(topic) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash"
  });

  const prompt = `
Write a high-quality SEO blog post about: "${topic}"

Requirements:
- Use a catchy title.
- Write at least 1500 words.
- Use headings (H2 and H3).
- Write in clear English.
- Include an introduction.
- Include a conclusion.
- Do NOT use Markdown.
- Return only the article text.
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
}

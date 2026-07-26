import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function generateBlog(topic) {
  // Use the latest stable model
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash-lite"
  });

  const prompt = `
Write a complete SEO-friendly blog post in HTML about "${topic}".

Requirements:
- Return ONLY HTML.
- At least 1000 words.
- Include:
  - One <h1>
  - Several <h2> headings
  - Paragraphs
  - Bullet lists
- Include these placeholders exactly:
<img src="IMAGE1" alt="Image 1">
<img src="IMAGE2" alt="Image 2">
`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}

import fs from "fs";
import { generateBlog } from "./gemini.js";
import { sendMessage } from "./telegram.js";

async function main() {
  const topics = fs.readFileSync("topics.txt", "utf8")
    .split("\n")
    .map(t => t.trim())
    .filter(Boolean);

  if (topics.length === 0) {
    await sendMessage("❌ No topics found in topics.txt");
    return;
  }

  const topic = topics[0];

  await sendMessage(`📝 Writing blog about:\n\n${topic}`);

  const article = await generateBlog(topic);

  await sendMessage(article.substring(0, 3500));

  await sendMessage("✅ Blog generated successfully!");
}

main().catch(async (err) => {
  console.error(err);
  try {
    await sendMessage("❌ Error:\n" + err.message);
  } catch {}
});

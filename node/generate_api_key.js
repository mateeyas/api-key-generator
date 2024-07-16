const crypto = require("crypto");

// Load the encryption key from environment variables
const ENCRYPTION_KEY = Buffer.from(process.env.ENCRYPTION_KEY, "base64");

if (!ENCRYPTION_KEY) {
  throw new Error("No ENCRYPTION_KEY set for environment");
}

function encrypt(text) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-256-cbc", ENCRYPTION_KEY, iv);
  let encrypted = cipher.update(text, "utf8", "base64");
  encrypted += cipher.final("base64");

  return {
    iv: iv.toString("base64"),
    content: encrypted,
  };
}

function generateApiKey() {
  // Generate a random API key
  return crypto.randomBytes(32).toString("base64"); // Correct encoding method
}

function main() {
  const apiKey = generateApiKey();
  const encryptedApiKey = encrypt(apiKey);

  console.log("Generated API Key:", apiKey);
  console.log("Encrypted API Key:", JSON.stringify(encryptedApiKey));
}

main();

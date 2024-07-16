const crypto = require("crypto");
const fernet = require("fernet");
require("dotenv").config();

// Load the encryption key from environment variables
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;

if (!ENCRYPTION_KEY) {
  throw new Error("No ENCRYPTION_KEY set for environment");
}

// Ensure the key is URL-safe base64 encoded and 32 bytes long
const secret = new fernet.Secret(ENCRYPTION_KEY);

function encrypt(text) {
  const token = new fernet.Token({
    secret: secret,
    time: Math.floor(Date.now() / 1000),
  });

  return token.encode(text);
}

function generateApiKey() {
  // Generate a random API key and encode it in base64 with padding
  return crypto.randomBytes(32).toString("base64");
}

function main() {
  const apiKey = generateApiKey();
  const encryptedApiKey = encrypt(apiKey);

  console.log("Generated API Key:", apiKey);
  console.log("Encrypted API Key:", encryptedApiKey);
}

main();

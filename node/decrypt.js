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

function decrypt(tokenString) {
  const token = new fernet.Token({
    secret: secret,
    token: tokenString,
    ttl: 0,
  });

  return token.decode();
}

function main() {
  const encryptedApiKey = process.argv[2];
  if (!encryptedApiKey) {
    throw new Error("No encrypted API key provided");
  }

  const decryptedApiKey = decrypt(encryptedApiKey);
  console.log("Decrypted API Key:", decryptedApiKey);
}

main();

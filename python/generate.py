import os
import base64
from cryptography.fernet import Fernet
import secrets
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Load the encryption key from environment variables
ENCRYPTION_KEY = os.getenv('ENCRYPTION_KEY')

if not ENCRYPTION_KEY:
    raise ValueError("No ENCRYPTION_KEY set for environment")

fernet = Fernet(ENCRYPTION_KEY.encode())

def encrypt(data: str) -> str:
    return fernet.encrypt(data.encode()).decode()

def decrypt(data: str) -> str:
    return fernet.decrypt(data.encode()).decode()

def generate_api_key() -> str:
    # Generate a random API key and ensure it is base64 encoded with padding
    api_key = secrets.token_bytes(32)
    return base64.b64encode(api_key).decode('utf-8')

def main():
    api_key = generate_api_key()
    encrypted_api_key = encrypt(api_key)
    decrypted_api_key = decrypt(encrypted_api_key)
    
    print(f"Generated API Key: {api_key}")
    print(f"Encrypted API Key: {encrypted_api_key}")
    print(f"Decrypted API Key: {decrypted_api_key}")

if __name__ == "__main__":
    main()

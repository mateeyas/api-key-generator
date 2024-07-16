import os
from cryptography.fernet import Fernet
import sys
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Load the encryption key from environment variables
ENCRYPTION_KEY = os.getenv('ENCRYPTION_KEY')

if not ENCRYPTION_KEY:
    raise ValueError("No ENCRYPTION_KEY set for environment")

# Create the Fernet instance
fernet = Fernet(ENCRYPTION_KEY)

def decrypt(token: str) -> str:
    return fernet.decrypt(token.encode()).decode()

def main():
    if len(sys.argv) < 2:
        raise ValueError("No encrypted API key provided")
    
    encrypted_api_key = sys.argv[1]
    decrypted_api_key = decrypt(encrypted_api_key)
    print("Decrypted API Key:", decrypted_api_key)

if __name__ == "__main__":
    main()

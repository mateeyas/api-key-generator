# API Key Generator

This repository contains scripts to generate and encrypt API keys using a given encryption key. Follow the instructions below to set up and use the scripts.

## Setup

To set up the project, follow these steps:

1. Clone the repository:

    ```sh
    git clone https://github.com/mateeyas/api-key-generator.git
    cd api-key-generator
    ```

2. Create a `.env` file in the root directory and add your encryption key:

    ```plaintext
    ENCRYPTION_KEY=your_base64_encoded_key
    ```

## Generating an encryption key

To generate a suitable encryption key, you can use the following terminal commands. This key will be used for encrypting the API keys.

### Unix-based systems (Linux, macOS)

Open your terminal and run:

```sh
openssl rand -base64 32
```

### Windows

Open PowerShell and run:

```powershell
[convert]::ToBase64String((New-Object Security.Cryptography.RNGCryptoServiceProvider).GetBytes(32))
```

This will generate a base64-encoded encryption key. Add this key to your `.env` file.

## Python script

The Python script is used to generate and encrypt API keys using the provided encryption key.

### Requirements

- Python 3.6+
- `cryptography` library

### Usage

To use the Python script, follow the steps outlined below.

#### Generate and encrypt an API key

The `generate.py` script generates a new API key and returns it both in plain text and encrypted. You can find the complete Python scripts [here](python/generate.py).

1. Navigate to the `python` directory:

    ```sh
    cd python
    ```

2. Install the required dependencies:

    ```sh
    pip install cryptography python-dotenv
    ```

3. Run the script to generate and encrypt an API key:

    ```sh
    python generate.py
    ```

#### Decrypt an API key

Run the `decrypt.py` script to decrypt an API key. You can find the source code [here](python/decrypt.py).

```sh
python decrypt.py <encrypted_api_key>
```

## Node.js script

The Node.js script is also used to generate and encrypt API keys, leveraging the built-in `crypto` module.

### Requirements

- Node.js 12+
- `dotenv` library
- `fernet` library

### Usage

To use the Node.js script, follow the steps outlined below.

#### Generate and encrypt an API key

The `generate.js` script generates a new API key and returns it both in plain text and encrypted. You can find the complete script [here](node/generate.js).

1. Navigate to the `node` directory:

    ```sh
    cd node
    ```

2. Install the required dependencies:

    ```sh
    npm install dotenv fernet
    ```

3. Run the script to generate and encrypt an API key:

    ```sh
    node generate.js
    ```

#### Decrypt an API key

Run the `decrypt.js` script to decrypt an API key. You can find the source code [here](node/decrypt.js).

```sh
node decrypt.js <encrypted_api_key>
```

## License

This project is licensed under the MIT License.

## Contact

This project is maintained by Matthias Ragus. If you have any questions or suggestions, feel free to reach out.

✉️ [matt@tala.dev](mailto:matt@tala.dev)  
🐦 [@mateeyas](https://x.com/mateeyas) on X  
💼 [@mragus](https://www.linkedin.com/in/mragus) on LinkedIn

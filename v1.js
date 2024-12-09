const crypto = require('crypto');

class CryptoWallet {
  constructor() {
    this.keyPair = null;
    this.address = null;
  }

  generateWallet() {
    // Generate a new key pair
    this.keyPair = crypto.generateKeyPairSync('ec', {
      namedCurve: 'secp256k1',
      publicKeyEncoding: { type: 'spki', format: 'pem' },
      privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
    });

    // Generate a simple address (hash of public key)
    const publicKeyBuffer = Buffer.from(this.keyPair.publicKey, 'utf-8');
    this.address = crypto.createHash('sha256').update(publicKeyBuffer).digest('hex');

    console.log('Wallet generated successfully');
    console.log('Address:', this.address);
  }

  getBalance() {
    // In a real implementation, this would query a blockchain or API
    console.log('Balance: 0 (Not implemented)');
  }

  sendTransaction(recipient, amount) {
    // In a real implementation, this would create and broadcast a transaction
    console.log(`Sending ${amount} to ${recipient} (Not implemented)`);
  }
}

// Usage example
const wallet = new CryptoWallet();
wallet.generateWallet();
wallet.getBalance();
wallet.sendTransaction('recipient_address', 1.5);

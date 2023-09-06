const crypto = require('crypto');

// Generar una clave secreta de 32 bytes (256 bits) para MONGO_SESSION_SECRET
const mongoSessionSecret = crypto.randomBytes(32).toString('hex');

console.log('MONGO_SESSION_SECRET:', mongoSessionSecret);

// Generar una clave secreta de 32 bytes (256 bits) para COOKIE_SECRET
const cookieSecret = crypto.randomBytes(32).toString('hex');

console.log('COOKIE_SECRET:', cookieSecret);

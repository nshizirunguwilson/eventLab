import express from 'express';
import { nanoid } from 'nanoid';
import qrcode from 'qrcode-terminal';

const app = express();
const PORT = 3000;

// Generate a 10-character NanoID
const eventId = nanoid(10);

// Create the QR data
const qrData = `https://wilson.dev/events/${eventId}`;

// Display QR code in terminal
console.log(`Generated Event ID: ${eventId}`);
console.log(`QR Data: ${qrData}`);
qrcode.generate(qrData, { small: true });

// Optional: serve the QR data via Express
app.get('/', (req, res) => {
  res.send(`<h1>Your Event QR</h1><p>ID: ${eventId}</p><p>URL: <a href="${qrData}">${qrData}</a></p>`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

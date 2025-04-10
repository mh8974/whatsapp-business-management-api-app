const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/send-message', (req, res) => {
  const { message } = req.body;
  // Implement logic to send message via WhatsApp Business API
  res.json({ message: 'Message sent successfully', receivedMessage: message });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
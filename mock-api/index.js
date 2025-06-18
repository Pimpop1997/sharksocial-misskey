
const express = require('express');
const app = express();
const port = 4000;
app.use(express.json());

app.get('/api/wallet', (req, res) => {
  res.json({ balance: 999, currency: 'SHARK' });
});

app.get('/api/loan', (req, res) => {
  res.json({ loans: [{ id: 1, amount: 100, rate: 5 }] });
});

app.listen(port, () => {
  console.log(`Mock API listening at http://localhost:${port}`);
});

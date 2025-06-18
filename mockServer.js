const express = require('express');
const cors = require('cors');
const mock = require('./mockData');
const app = express();
const path = require('path');

// Serve static files for mock UI
app.use('/public', express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.use(cors());
app.use(express.json());

// Root endpoint for health check and documentation
app.get('/', (req, res) => {
  res.send(`
    <h1>SHARKSO🦈IAL Mock API Server</h1>
    <p>Mock server is running.<br>Available endpoints:</p>
    <ul>
      <li><a href="/api/users">/api/users</a></li>
      <li><a href="/api/wallet">/api/wallet</a></li>
      <li><a href="/api/feed">/api/feed</a></li>
      <li><a href="/api/comments">/api/comments</a></li>
      <li><a href="/api/transactions">/api/transactions</a></li>
      <li><a href="/api/loans">/api/loans</a></li>
      <li><a href="/api/shop">/api/shop</a></li>
      <li><a href="/api/themes">/api/themes</a></li>
      <li><a href="/api/frames">/api/frames</a></li>
      <li><a href="/api/fonts">/api/fonts</a></li>
      <li><a href="/api/chat">/api/chat</a></li>
      <li><a href="/api/messages">/api/messages</a></li>
    </ul>
  `);
});

app.get('/api/users', (req, res) => res.json(mock.users));
app.get('/api/wallet', (req, res) => res.json(mock.wallet));
app.get('/api/feed', (req, res) => res.json(mock.feed));
app.get('/api/comments', (req, res) => res.json(mock.comments));
app.get('/api/transactions', (req, res) => res.json(mock.transactions));
app.get('/api/loans', (req, res) => res.json(mock.loans));
app.get('/api/shop', (req, res) => res.json(mock.shop));
app.get('/api/themes', (req, res) => res.json(mock.themes));
app.get('/api/frames', (req, res) => res.json(mock.frames));
app.get('/api/fonts', (req, res) => res.json(mock.fonts));
app.get('/api/chat', (req, res) => res.json(mock.chat));
app.get('/api/messages', (req, res) => res.json(mock.messages));

// เพิ่ม endpoint อื่น ๆ ตาม Global Schema ได้เลย

app.listen(3001, () => console.log('Mock API running on http://localhost:3001'));

module.exports = {
  users: [
    { id: 1, username: "sharkadmin", displayName: "Shark Admin", credit: 9999, status: "active" },
    { id: 2, username: "neonfish", displayName: "Neon Fish", credit: 500, status: "active" }
  ],
  wallet: [
    { userId: 1, balance: 9999, transactions: [1,2] },
    { userId: 2, balance: 500, transactions: [3] }
  ],
  feed: [
    { id: 1, userId: 1, content: "Welcome to SHARKSO🦈IAL!", likes: 10, comments: [1,2] },
    { id: 2, userId: 2, content: "Hello world!", likes: 2, comments: [3] }
  ],
  comments: [
    { id: 1, feedId: 1, userId: 2, content: "สุดยอด!", replies: [] },
    { id: 2, feedId: 1, userId: 1, content: "ขอบคุณครับ!", replies: [3] },
    { id: 3, feedId: 2, userId: 1, content: "ยินดีต้อนรับ!", replies: [] }
  ],
  transactions: [
    { id: 1, userId: 1, type: "credit", amount: 1000, status: "success" },
    { id: 2, userId: 1, type: "debit", amount: 1, status: "success" },
    { id: 3, userId: 2, type: "credit", amount: 500, status: "pending" }
  ],
  loans: [
    { id: 1, userId: 2, amount: 200, interest: 5, due: "2025-07-01", status: "active" }
  ],
  shop: [
    { id: 1, name: "Neon Green Theme", type: "theme", price: 50 },
    { id: 2, name: "Matrix Rain Effect", type: "effect", price: 100 }
  ],
  themes: [
    { id: 1, name: "Dark Neon", style: "dark-green-neon" },
    { id: 2, name: "Hacker Terminal", style: "terminal" }
  ],
  frames: [
    { id: 1, name: "Cyber Frame", style: "cyber" }
  ],
  fonts: [
    { id: 1, name: "Monospace", style: "monospace" }
  ],
  chat: [
    { id: 1, userId: 2, message: "สวัสดีชาวชาร์ค!", timestamp: Date.now() }
  ],
  messages: [
    { id: 1, chatId: 1, userId: 2, content: "สวัสดีชาวชาร์ค!", timestamp: Date.now() }
  ]
};

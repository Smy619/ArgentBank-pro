const express = require("express");
const router = express.Router();

const accounts = [
  {
    accountId: 3448,
    title: "Argent Bank Checking (x3448)",
    amount: "$48,098.43",
    description: "Available Balance",
  },
   {
    accountId: 6712,
    title: "Argent Bank Checking (x6712)",
    amount: "$10,928.42",
    description: "Available Balance",
  },
   {
    accountId: 8343,
    title: "Argent Bank Checking (x8343)",
    amount: "$183.30",
    description: "Available Balance",
  },
];

const transactions = [
  {
    id: "t1",
    accountId: 3448,
    date: "27/02/20",
    description: "Golden Sun Bakery",
    amount: 8.00,
    balance: 298.00,
    transactionType: "Electronic",
    category: "Food",
    note: "lorem ipsum"
  },
  {
    id: "t2",
    accountId: 3448,
    date: "27/02/20",
    description: "Golden Sun Bakery",
    amount: 8.00,
    balance: 298.00,
    transactionType: "Electronic",
    category: "Food",
    note: "lorem ipsum"
  },
  {
    id: "t3",
    accountId: 3448,
    date: "27/02/20",
    description: "Golden Sun Bakery",
    amount: 8.00,
    balance: 298.00,
    transactionType: "Electronic",
    category: "Food",
    note: "lorem ipsum"
  },
  {
    id: "t4",
    accountId: 3448,
    date: "27/02/20",
    description: "Golden Sun Bakery",
    amount: 8.00,
    balance: 298.00,
    transactionType: "Electronic",
    category: "Food",
    note: "lorem ipsum"
  },
  {
    id: "t5",
    accountId: 3448,
    date: "27/02/20",
    description: "Golden Sun Bakery",
    amount: 8.00,
    balance: 298.00,
    transactionType: "Electronic",
    category: "Food",
    note: "lorem ipsum"
  },
   // ==== Account 6712 ====
  {
    id: "t6",
    accountId: 6712,
    date: "27/02/20",
    description: "Golden Sun Bakery",
    amount: 8.0,
    balance: 298.0,
    transactionType: "Electronic",
    category: "Food",
    note: "lorem ipsum",
  },
  {
    id: "t7",
    accountId: 6712,
    date: "27/02/20",
    description: "Golden Sun Bakery",
    amount: 8.0,
    balance: 298.0,
    transactionType: "Electronic",
    category: "Food",
    note: "lorem ipsum",
  },
  {
    id: "t8",
    accountId: 6712,
    date: "27/02/20",
    description: "Golden Sun Bakery",
    amount: 8.0,
    balance: 298.0,
    transactionType: "Electronic",
    category: "Food",
    note: "lorem ipsum",
  },
  {
    id: "t9",
    accountId: 6712,
    date: "27/02/20",
    description: "Golden Sun Bakery",
    amount: 8.0,
    balance: 298.0,
    transactionType: "Electronic",
    category: "Food",
    note: "lorem ipsum",
  },
  {
    id: "t10",
    accountId: 6712,
    date: "27/02/20",
    description: "Golden Sun Bakery",
    amount: 8.0,
    balance: 298.0,
    transactionType: "Electronic",
    category: "Food",
    note: "lorem ipsum",
  },

  // ==== Account 8343 ====
  {
    id: "t11",
    accountId: 8343,
    date: "27/02/20",
    description: "Golden Sun Bakery",
    amount: 8.0,
    balance: 298.0,
    transactionType: "Electronic",
    category: "Food",
    note: "lorem ipsum",
  },
  {
    id: "t12",
    accountId: 8343,
    date: "27/02/20",
    description: "Golden Sun Bakery",
    amount: 8.0,
    balance: 298.0,
    transactionType: "Electronic",
    category: "Food",
    note: "lorem ipsum",
  },
  {
    id: "t13",
    accountId: 8343,
    date: "27/02/20",
    description: "Golden Sun Bakery",
    amount: 8.0,
    balance: 298.0,
    transactionType: "Electronic",
    category: "Food",
    note: "lorem ipsum",
  },
  {
    id: "t14",
    accountId: 8343,
    date: "27/02/20",
    description: "Golden Sun Bakery",
    amount: 8.0,
    balance: 298.0,
    transactionType: "Electronic",
    category: "Food",
    note: "lorem ipsum",
  },
  {
    id: "t15",
    accountId: 8343,
    date: "27/02/20",
    description: "Golden Sun Bakery",
    amount: 8.0,
    balance: 298.0,
    transactionType: "Electronic",
    category: "Food",
    note: "lorem ipsum",
  },
];

// GET all accounts
router.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Accounts retrieved successfully",
    body: accounts,
  });
});

// GET one account
router.get("/:accountId", (req, res) => {
  const account = accounts.find(
    (a) => a.accountId === parseInt(req.params.accountId)
  );
  if (!account) {
    return res.status(404).json({ status: 404, message: "Account not found" });
  }
  res.json({
    status: 200,
    message: "Account retrieved successfully",
    body: account,
  });
});

// GET transaction details
router.get("/:accountId/transactions", (req, res) => {
  const { accountId } = req.params;
  const { month } = req.query;

  let accountTransactions = transactions.filter(
    (t) => t.accountId === parseInt(accountId)
  );

  if (month) {
    accountTransactions = accountTransactions.filter(
      (t) => t.date.slice(0, 7) === month
    );
  }
  if (accountTransactions.length === 0) {
    return res.status(404).json({
      status: 404,
      message: "No transactions found for this account",
    });
  }

  res.json({
    status: 200,
    message: "Transactions retrieved successfully",
    body: accountTransactions,
  });
});

module.exports = router;

const express = require('express')
const router = express.Router()

const transactions =[
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
]

router.get('/:transactionId', (req, res) => {
  const transaction = transactions.find(t => t.id === req.params.transactionId)

  if (!transaction) {
    return res.status(404).json({
      status: 404,
      message: "Transaction not found",
    })
  }
  res.json({
    status: 200,
    message: "Transaction fetched successfully",
    body: transaction,
  })
})

// PUT update transaction (category, note)
router.put('/:transactionId', (req, res) => {
  const transaction = transactions.find(t => t.id === req.params.transactionId)

  if (!transaction) {
    return res.status(404).json({
      status: 404,
      message: "Transaction not found",
    })
  }

  const { category, note } = req.body
  if (category) transaction.category = category
  if (note) transaction.note = note

  res.json({
    status: 200,
    message: "Transaction updated successfully",
    body: transaction,
  })
})

module.exports = router
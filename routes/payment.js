const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const Razorpay = require('razorpay');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

router.get('/routes', (req, res) => {
  const query = 'SELECT * FROM routes';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

router.post('/create-order', async (req, res) => {
  const { routeId } = req.body;

  db.query('SELECT price FROM routes WHERE id = ?', [routeId], async (err, results) => {
    if (err) return res.status(500).send(err);

    const price = results[0].price * 100; // Convert to paisa

    const options = {
      amount: price,
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
    };

    try {
      const order = await razorpay.orders.create(options);
      res.json(order);
    } catch (error) {
      res.status(500).send(error);
    }
  });
});

module.exports = router;

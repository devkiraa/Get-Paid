const express = require('express');
const router = express.Router();
const db = require('../db'); // Make sure to set up your database connection

router.get('/ticketing', (req, res) => {
    // Fetch routes from the database
    db.query('SELECT * FROM routes', (err, results) => {
        if (err) throw err;
        res.render('ticketing', { routes: results });
    });
});

router.post('/ticketing', (req, res) => {
    const { from, to, passengers, payment } = req.body;
    // Calculate price logic here based on the from-to route
    // Add ticketing logic
    res.send('Ticket booked successfully!');
});

module.exports = router;

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../db'); // Ensure this points to your database setup

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) {
      console.error(err);
      return res.send('Error occurred');
    }
    if (results.length > 0) {
      const user = results[0];
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          console.error(err);
          return res.send('Error occurred');
        }
        if (isMatch) {
          req.session.user = user;
          return res.redirect('/');
        } else {
          return res.send('Incorrect password!');
        }
      });
    } else {
      return res.send('User not found!');
    }
  });
});

module.exports = router;

const express = require("express");
const router = express.Router();
router.get('/', (req, res) => {
  res.render('index', { error: [] });
});

// Aur agar POST wale validation route pe:
router.post('/submit', (req, res) => {
  const errors = [];
  if (!req.body.name) errors.push('Name missing!');

  // Bas yahin name typo nahi hai:
  res.render('index', { error: errors });
});
module.exports = router;
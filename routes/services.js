const express = require('express');
const { pool } = require('../lib/db');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM services WHERE is_active = true');
    res.json(result.rows);
  } catch (error) {
    console.error('DB Error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
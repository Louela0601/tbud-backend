const express = require('express');
const { pool } = require('../lib/db');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { full_name, email, phone, service_category, message } = req.body;
    const result = await pool.query(
      'INSERT INTO inquiries (full_name, email, phone, service_category, message) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [full_name, email, phone, service_category, message]
    );
    res.json({ success: true, inquiry: result.rows[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
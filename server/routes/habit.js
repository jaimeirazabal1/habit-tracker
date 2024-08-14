const express = require('express');
const auth = require('../middleware/authMiddleware');
const { createHabit, getHabits, updateHabit, deleteHabit } = require('../controllers/habitController');
const router = express.Router();

// Rutas protegidas para los hábitos
router.post('/', auth, createHabit);
router.get('/', auth, getHabits);
router.put('/:id', auth, updateHabit);
router.delete('/:id', auth, deleteHabit);

module.exports = router;

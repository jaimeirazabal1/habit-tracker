const Habit = require('../models/Habit');

// Crear un hábito
const createHabit = async (req, res) => {
    const { title, frequency } = req.body;

    try {
        const habit = await Habit.create({
            title,
            frequency,
            userId: req.user.userId
        });

        res.status(201).json(habit);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

// Obtener los hábitos del usuario
const getHabits = async (req, res) => {
    try {
        const habits = await Habit.findAll({ where: { userId: req.user.userId } });
        res.json(habits);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

// Actualizar un hábito
const updateHabit = async (req, res) => {
    const { id } = req.params;
    const { title, frequency, completed } = req.body;

    try {
        const habit = await Habit.findOne({ where: { id, userId: req.user.userId } });
        if (!habit) {
            return res.status(404).json({ message: 'Hábito no encontrado' });
        }

        habit.title = title || habit.title;
        habit.frequency = frequency || habit.frequency;
        habit.completed = completed !== undefined ? completed : habit.completed;

        await habit.save();
        res.json(habit);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

// Eliminar un hábito
const deleteHabit = async (req, res) => {
    const { id } = req.params;

    try {
        const habit = await Habit.findOne({ where: { id, userId: req.user.userId } });
        if (!habit) {
            return res.status(404).json({ message: 'Hábito no encontrado' });
        }

        await habit.destroy();
        res.json({ message: 'Hábito eliminado' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

module.exports = {
    createHabit,
    getHabits,
    updateHabit,
    deleteHabit
};

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Verifica si el usuario ya existe
        let user = await User.findOne({ where: { username } });
        if (user) {
            return res.status(400).json({ message: 'Usuario ya existe' });
        }

        // Crea un nuevo usuario
        const hashedPassword = await bcrypt.hash(password, 10);
        user = await User.create({ username, password: hashedPassword });

        // Genera un token JWT
        const token = jwt.sign({ userId: user.id }, 'secret_key', { expiresIn: '1h' });

        res.status(201).json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};
const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Verifica si el usuario existe
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }

        // Verifica la contraseña
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        // Genera un token JWT
        const token = jwt.sign({ userId: user.id }, 'secret_key', { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

module.exports = {
    register,
    login
};


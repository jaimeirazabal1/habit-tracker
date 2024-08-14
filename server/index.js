const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const sequelize = require('./database');

const User = require('./models/User');
const Habit = require('./models/Habit');

const authRoutes = require('./routes/auth');
const auth = require('./middleware/authMiddleware');

const habitRoutes = require('./routes/habit');


sequelize.sync()
    .then(() => {
        console.log('Database & tables created!');
    });

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/habits', habitRoutes);

// Prueba simple de servidor
app.get('/', (req, res) => {
    res.send('Habit Tracker API');
});
app.get('/api/protected', auth, (req, res) => {
    res.json({ message: `Bienvenido, usuario ${req.user.userId}` });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

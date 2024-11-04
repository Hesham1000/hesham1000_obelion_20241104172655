const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const blogPostRoutes = require('./routes/blogPostRoutes');
const searchRoutes = require('./routes/searchRoutes');

const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', userRoutes);
app.use('/api', blogPostRoutes);
app.use('/api', searchRoutes);

// Database Connection
const db = mysql.createConnection({
    host: 'db',
    user: 'agent',
    password: 'agentpass',
    database: 'Obelien AI'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

// Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

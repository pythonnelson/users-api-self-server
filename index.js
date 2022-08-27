import express from 'express';
import bodyPaser from 'body-parser';


import usersRoutes from './routes/users.js';

const app = express();
const PORT = 7000;

app.use(bodyPaser.json());

// ALL ROUTES
app.use('/users', usersRoutes);

// Home page
app.get('/', (req, res) => res.send('Home Page'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
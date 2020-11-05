import express from "express";
import morgan from 'morgan';
import dotenv from 'dotenv-flow';
dotenv.config();
import './config/mongoose.js';
import cors from "./middleware/cors.js";
import usersRouter from './routes/users.js'
import moviesRouter from './routes/movies.js'
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors);
app.use(morgan('dev'));
app.use(express.json()); //para que req.body no sea undefined
app.options('/*', (req, res) => res.send());
app.use('/users', usersRouter);
app.use('/movies', moviesRouter);

app.listen(PORT, () => console.log('server running on PORT ' + PORT));

export default app;
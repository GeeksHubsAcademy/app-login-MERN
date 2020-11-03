import express from 'express';
import MovieController from '../controllers/MovieController.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/', MovieController.getAll);
router.post('/', auth, MovieController.create);

export default router;
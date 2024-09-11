import express from 'express';
import recipesRoutes from './recipe.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.use(recipesRoutes);

export default router;
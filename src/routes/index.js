import express from 'express';
import recipesRoutes from './recipe.js';
import usersRoutes from './user.js'

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.use(recipesRoutes);
router.use(usersRoutes);

export default router;
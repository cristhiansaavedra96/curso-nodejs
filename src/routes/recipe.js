import express from 'express';
import recipesController from '../controllers/recipe.js';

const router = express.Router();

router.get('/recipes', recipesController.getAllRecipes);
router.get('/recipes/:id', recipesController.getRecipeById);
router.post('/recipes', recipesController.createRecipe);

export default router;
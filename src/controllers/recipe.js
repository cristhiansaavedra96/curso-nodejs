import recipesService from "../services/recipes.js";

const getAllRecipes = async (req, res) => {
    try {
        let recipes = await recipesService.getRecipes();
        res.send(recipes);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getRecipeById = async (req, res) => {
    try {
        const recipeId = req.params.id;
        let recipe = await recipesService.getRecipeById(recipeId);
        if (recipe.length === 0) {
            res.status(404).send({ message: 'No se encontró la receta' });
            return;
        }
        res.send(recipe[0]);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const createRecipe = async (req, res) => {
    try {
        let recipe = {
            name: req.body.name,
            description: req.body.description,
            category: req.body.category
        }
        res.send({
            message: 'Recipe created',
            recipe: recipe
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const recipesController = {
    getAllRecipes,
    getRecipeById,
    createRecipe
}

export default recipesController;
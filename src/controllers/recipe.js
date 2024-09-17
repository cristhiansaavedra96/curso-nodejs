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
            titulo: req.body.titulo,
            preparacion: req.body.preparacion,
            categoria: req.body.categoria,
            ingredientes: req.body.ingredientes
        }
        let result = await recipesService.createRecipe(recipe);
        if (result.affectedRows === 0) {
            res.status(400).send({ message: 'No se pudo crear la receta' });
            return;
        }
        res.send({
            message: 'Recipe created',
            recipeId: result.insertId
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const updateRecipe = async (req, res) => {
    try {
        let recipe = {
            id: req.body.id,
            titulo: req.body.titulo,
            preparacion: req.body.preparacion,
            categoria: req.body.categoria,
            ingredientes: req.body.ingredientes
        }
        let result = await recipesService.updateRecipe(recipe);
        if (result.affectedRows === 0) {
            res.status(400).send({ message: 'No se pudo actualizar la receta' });
            return;
        }
        res.send({ message: 'Recipe updated' });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const deleteRecipe = async (req, res) => {
    try {
        let recipeId = req.body.id;
        let result = await recipesService.deleteRecipe(recipeId);
        if (result.affectedRows === 0) {
            res.status(400).send({ message: 'No se pudo eliminar la receta' });
            return;
        }
        res.send({ message: 'Recipe deleted' });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const recipesController = {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe
}

export default recipesController;
import db from '../config/db.js';

const getRecipes = async () => {
    const [rows, fields] = await db.query('SELECT * FROM recipes');
    return rows;
}

const getRecipeById = async (id) => {
    const [rows, fields] = await db.query(`SELECT * FROM recipes WHERE id = ${id}`)
    return rows;
}

const createRecipe = async (recipe) => {
    //categoria, preparacion, ingredientes, titulo
    const [rows, fields] = await db.query(`INSERT INTO recipes (categoria, preparacion, ingredientes, titulo) VALUES ('${recipe.categoria}', '${recipe.preparacion}', '${recipe.ingredientes}', '${recipe.titulo}')`);
    return rows;
}

const updateRecipe = async (recipe) => {
    //categoria, preparacion, ingredientes, titulo
    const [rows, fields] = await db.query(`UPDATE recipes SET categoria = '${recipe.categoria}', preparacion = '${recipe.preparacion}', ingredientes = '${recipe.ingredientes}', titulo = '${recipe.titulo}' WHERE id = ${recipe.id}`);
    return rows;
}

const deleteRecipe = async (recipeId) => {
    const [rows, fields] = await db.query(`DELETE FROM recipes WHERE id = ${recipeId}`);
    return rows;
}

const recipesService = {
    getRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe
}

export default recipesService;
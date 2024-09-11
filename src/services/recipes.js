import db from '../config/db.js';

const getRecipes = async () => {
    const [rows, fields] = await db.query('SELECT * FROM recipes');
    return rows;
}

const getRecipeById = async (id) => {
    const [rows, fields] = await db.query(`SELECT * FROM recipes WHERE id = ${id}`)
    return rows;
}

const recipesService = {
    getRecipes,
    getRecipeById
}

export default recipesService;
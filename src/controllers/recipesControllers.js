const Recetas = require('../models/Recetas')
const {Op} = require('sequelize')

const getAllRecipes = async(req, res) => {
    try {
        const recetas = await Recetas.findAll()
        res.json(recetas)
    } catch (error) {
       res.status(500).json({error: 'Error al obtener todas las recetas de la db'})
    }
}

const getRecipesByTag = async (req, res) => {
    try {
        const { tags } = req.query;
        if (!tags) return res.status(400).json({ error: 'Error, no hay tags' });

        const recetas = await Recetas.findAll({
            where: {
                tags: {
                    [Op.contains]: tags
                }
            }
        });
        return res.json(recetas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las recetas' });
    }
};

const getRecipesByName = async (req, res) => {
    try {
        const {name} = req.query
        if (!name) return res.status(400).json({ error: 'Error, no hay nombre proporcionado' });
        
        const recipes = await Recetas.findAll({
            where: {
                nombre: {
                    [Op.iLike]: `%${name}%`
                }
            }
        })
        return res.json(recipes)
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las recetas por nombre' });
    }
}

const getRecipeById = async (req, res) => {
    try {
        const {id} = req.params
        if (!id || isNaN(id)) return res.status(400).json({ error: 'Error, el ID proporcionado no es válido' });
        
        const recipe = await Recetas.findByPk(id);

        if (!recipe) return res.status(404).json({ error: 'Receta no encontrada' });
        
        return res.json(recipe)
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las recetas por id' });
    }
}

module.exports = {
    getAllRecipes,
    getRecipesByTag,
    getRecipesByName,
    getRecipeById
}
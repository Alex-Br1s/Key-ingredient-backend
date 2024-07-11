const express = require('express')
const router = express.Router()
const recetasControllers = require('../controllers/recipesControllers')

router.get('/recipes', recetasControllers.getAllRecipes)
router.get('/recipesTags', recetasControllers.getRecipesByTag)
router.get('/recipesName', recetasControllers.getRecipesByName)
router.get('/recipes/:id', recetasControllers.getRecipeById)

module.exports = router
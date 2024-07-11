require('dotenv').config()
const express = require('express')
const sequelizeInstance = require('./db/sequelize.js')
const recetasRoutes = require('./routes/recipesRouter.js')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/', recetasRoutes)

sequelizeInstance.sync()
.then(() => {
    app.listen(port, () => {
        console.log('server listening on port: ' + port)
    })
})
.catch((error) => console.log('Error al levantar el servidor ', error))
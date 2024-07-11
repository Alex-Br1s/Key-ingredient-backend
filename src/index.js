const sequelizeInstance = require('./db/sequelize')

sequelizeInstance.sync()
.then(() => {
    console.log('Base de datos y tablas creadas')
})
.catch((err) => console.log('Error al generar la base de datos y tablas ', err))
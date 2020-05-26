
const Sequelize = require('sequelize')


const sequelize = new Sequelize("node","welliton", "root",{
    host:"localhost",
    dialect:"mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
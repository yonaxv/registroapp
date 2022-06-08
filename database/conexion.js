const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:/usuariosdb`)

const objetodb = mongoose.connection

objetodb.on('connected',()=>{console.log('connected!')})
objetodb.on('error',()=>{console.log('Error!')})

module.exports = mongoose
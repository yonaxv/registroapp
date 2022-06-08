const mongoose = require('mongoose')
const schema = mongoose.Schema

const schemaUser = new schema({
    ci:{
        type:Number,
        required:true,
        trim:true
    },
    name:{
        type:String,
        required:true,
        trim: true
    },
    lastname:{
        type:String,
        required:true,
        trim: true
    },
    number:{
        type:Number,
        trim:true
    },
    gender:{
        type:String,
        default:"NO ESPECIFICADO"
    },
    Fnc:{
        type: Date,
        required:true
    },
    city:{
        type:String,
        required:true,
        trim:true
    }
},{
    timestamps:true
})

const ModelUser = mongoose.model('Users',schemaUser)
module.exports = ModelUser;
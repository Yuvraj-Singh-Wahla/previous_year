const mongoose = require('mongoose');

const paperSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    prof: {
        type:String,
        required:true,
    },
    branch: {
        type:String,
        required:true,
    },
    year:{
        type:String,
        required:true,
    },
    sem:{
        type:String,
        required:true,
    },
    code:{
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true,
    }
});

const Paper = new mongoose.model('Paper', paperSchema);

module.exports = Paper;
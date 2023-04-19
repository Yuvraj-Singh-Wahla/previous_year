const Paper = require('./models/paper');
const mongoose = require('mongoose');
const User = require('./models/User');

async function addPaper(name, prof, branch, year, sem, code, url) {
    const paper = new Paper({ name, prof, branch, year,sem, code, url });
    try {
        const newPaper = await paper.save();
        console.log(`Saved paper: ${newPaper.name}`);
    }catch(err){
        console.error(err);
    }
}

async function getPapers(query,projection) {
    try{
        const result = await Paper.find(query, projection);
        console.log(result);
        return result;
    }catch(err){
        console.error(err);
    }
}

async function authenticate(email,password) {
    try{
        const result = await User.find({email: email, password: password});
        if(result.length > 0){
            return true;
        }
        else{
            return false;
        }
    }catch(err){
        console.error(err);
    }
}

module.exports = {addPaper,getPapers,authenticate};
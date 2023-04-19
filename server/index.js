const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
app.use(cors());

const { addPaper,getPapers,authenticate } = require('./functions.js');

main().catch(err => console.error(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/papers');
}

app.post('/api/addPaper', async (req, res) => {
    const { name, prof, branch, year, sem, code, url } = req.body;
    try {
        await addPaper(name, prof, branch, year, sem, code, url);
        res.status(200).json({message:'Paper added successfully'});

    }catch(err) {
        console.error(err);
        res.status(500).json({message:'Internal Server Error'});
    }
});

app.get('/api/:sem', async (req, res) => {
    const sem = req.params.sem;
    const papers = await getPapers({sem},{});
    res.json(papers);
});

app.post('/authenticate', async (req, res) => {
    const {email,password} = req.body;
    const response = await authenticate(email, password);
    res.json({
        user:response
    });
});


app.listen(3001, () => {
    console.log('listening on http://localhost:3001');
});
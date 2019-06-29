const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {getForeCastFromArea} = require('./controllers/getForeCastFromArea');

const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(bodyParser.json());



app.get('/:areacode',(req,res)=>{

    const areaCode = req.params.areacode;
    getForeCastFromArea(areaCode).then((data)=>{
        console.log(data);
    });

});

app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
})

module.exports = {app};
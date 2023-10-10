const express = require("express")
const hbs = require("hbs");
const path = require("path")
const bodyparser = require('body-parser')
const port = process.env.PORT || 2020;

const app = express();


app.use('/static', express.static('public'))
app.use(bodyparser.urlencoded({extended:true}))
app.set('view engine','hbs');


app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/form',(req,res)=>{
    const {Name,subject,email} = req.body;
    console.log(`${Name} is learning ${subject} with email: ${email}`);
})
app.listen(port,()=>{
    console.log(`Server Started At Port No.${port}`);
})
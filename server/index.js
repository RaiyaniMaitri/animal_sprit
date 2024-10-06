const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const employeeModel = require('./models/employee')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee")

const port = process.env.connect || 3001;

app.post('/register', (req,res) => {
    employeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.post('/login',(req,res) =>{
    const {email,password} = req.body;
    employeeModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record exist.")
        }
    })
})

app.listen(port,() => {
    console.log(`Server is running on ${port}`);
})


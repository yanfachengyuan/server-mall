const express=require('express')
const cors=require('cors')
const app=express()
const port =3001
app.use(cors())
require('./db/contect')
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(port, () => console.log(`Example app listening on port port!`))
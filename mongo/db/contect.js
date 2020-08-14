const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1/mall',{useNewUrlParser:true,useUnifiedTopology:true})

const db=mongoose.connection

db.on('error',console.error.bind(console,'error'))

db.once('open',()=>{
    console.log('success')
})
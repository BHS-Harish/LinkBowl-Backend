const mongoose=require('mongoose');
const deleteUnVerfiedRecord = require('../utils/deleteUnverifiedRecord');

const databaseConnection=()=>{
    mongoose.set('strictQuery',false);
    mongoose.connect(process.env.DB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(con=>{
        console.log(`Mongo DB is connected to the host ${con.connection.host}`);
        deleteUnVerfiedRecord();
    })
}

module.exports=databaseConnection;
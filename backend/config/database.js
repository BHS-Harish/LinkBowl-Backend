const mongoose=require('mongoose');
const deleteUnVerfiedRecord = require('../utils/deleteUnverifiedRecord');
const updateClickandViews=require('../utils/insightUtils');
const databaseConnection=()=>{
    mongoose.set('strictQuery',false);
    mongoose.connect(process.env.DB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(con=>{
        console.log(`Mongo DB is connected to the host ${con.connection.host}`);
        setInterval(()=>{
            deleteUnVerfiedRecord();
            updateClickandViews();
        },1000);
    })
}

module.exports=databaseConnection;
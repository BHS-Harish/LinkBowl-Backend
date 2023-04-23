const app=require('./app');
const dotenv=require('dotenv');
const path=require('path');
const databaseConnection=require('./config/database');
const cron=require('node-cron');
const deleteUnVerfiedRecord = require('./utils/deleteUnverifiedRecord');
const updateClickandViews=require('./utils/insightUtils');
cron.schedule('0 0 * * *',()=>{
    deleteUnVerfiedRecord();
    updateClickandViews();
},{
    scheduled:true,
    timezone:'Asia/Kolkata'
});
dotenv.config({path:path.join(__dirname,"config/config.env")});
databaseConnection();
const server=app.listen(process.env.PORT,()=>{
    console.log(`Server listening to the port ${process.env.PORT} in ${process.env.NODE_ENV}`);
})
const express = require('express');
const app = express();
const errorMiddleWare = require('./middleware/error');
const cors = require('cors');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');

app.use(cors({credentials:true,origin:'https://linkbowl.netlify.app'||'http://localhost:3000'}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.json());

const auth = require('./routers/auth');
const user=require('./routers/user');
const client=require('./routers/client');

app.use('/api/v1/', auth);
app.use('/api/v1',user);
app.use('/api/v1',client);

app.use(errorMiddleWare);

module.exports = app;
const express = require('express')
const songRoutes = require('./routes/song.routes')
const app = express();
const cors = require('cors');
app.use(express.json());//middleware
app.use(cors());//middleware 
app.use('/',songRoutes);



module.exports = app
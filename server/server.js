const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 6001;

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('server/public'));

app.listen(PORT, (req, res)=>{
    console.log('Server is running on port', PORT);
});
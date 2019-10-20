const express   = require('express');
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');

// Connect Database
mongoose.connect('mongodb://localhost:27017/todo', 
                    { useNewUrlParser: true , useUnifiedTopology: true }, 
                    err => { if(err) console.log(err) }
                );

// Create server
const app = express();

// Config Middleware
app.use(bodyParser.json());
app.use(cors());
// Router
app.use('/api/todos', routes);

// Run server
app.listen(5000, () => console.log('Server running port 5000'));
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));


// Conexión base de datos
const mongoose = require('mongoose');


//const uri = 'mongodb://localhost:27017/udemy';
const uri = 'mongodb+srv://nacho:IYzJvXD2WuZvpWCE@cluster0.tpwn2.mongodb.net/udemy?retryWrites=true&w=majority';
const options = {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true,
};

//promesa que recibe moongoose
mongoose.connect(uri, options).then(
  /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
  () => { console.log('Conectado a DB') },
  /** handle initial connection error */
  err => { console.log(err) }
);


//llamamos a las rutas
app.use('/api', require('./routes/nota'));



// Rutas
//app.get('/', (req, res) => {
    //  res.send('Hello World!');
    //});
    
// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
  console.log('Example app listening on port'+ app.get('puerto'));
});
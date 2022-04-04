import express  from 'express';
import conexaoBD from './database/index.js';
import routes from './routes/index.js'
import cors from 'cors'


const app = express();

app.use((req,res,next)=>{
    console.log('Controle de acesso realizado!')
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next()
})

//conexão com o banco de dados
conexaoBD()



routes(app)

export default app;

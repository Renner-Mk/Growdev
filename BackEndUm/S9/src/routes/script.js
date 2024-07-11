import express from 'express';
const app = express();

// app.use(express.json());
// import cors from 'cors';
// app.use(cors());

// rm -rf node_modules && npm install

const myLogger = (request, response, next) => {
    console.log("Está logado!")
    next();
};


// app.use(myLogger) usa em todas as rotas

app.get('/', myLogger, (request, response) => {
    response.send('Hellou')
})

app.listen(3000);


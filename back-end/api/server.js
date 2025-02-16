// API significa Application Programming Interface
// Sistema de comunicação de duas entidades(computadores)

//GET, POST, PUT, DELETE
//Endpoint -> Roda que pode ser acessada dentro de uma API

//Middleware -> Atuam entre a escuta da api e efetivamente a requisição
//npm i cors

import express from "express"; // Adicionar em package.json p "type":"modules";
import cors from "cors";
import { db } from "./connect.js";
import path from 'path';

const __dirname = path.resolve(); //Sempre retorna a pasta onde está sendo executado


const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/', (request, response) => { //Quando essa api receber uma requisição no endpoint '/api/' será executada essa arrow function
    response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'")
})
//request -> Qunado acessa a API você realiza o "request" 
//response -> O que a API retorna é o "response"

//Sempre que fazer uma alteração na resposta da API rodar o servidor novamente "node ./api/server.js"
//Ou
//Utilizar o "node --watch ./api/server.js" para que sempre que houver uma atualização nesse arquivo reiniciar o servidor

app.get('/api/artists', async (request, response) => { //Quando essa api receber uma requisição no endpoint '/' será executada essa arrow function
    response.send(await db.collection('artists').find({}).toArray()) //Entregar o json de artistas
});

app.get('/api/songs', async (request, response) => { //Quando essa api receber uma requisição no endpoint '/' será executada essa arrow function
    response.send(await db.collection('songs').find({}).toArray()) //Entregar o json de songs
});
//--//--

app.use(express.static(path.join(__dirname,'../front-end/dist')));

app.get("*", async (request,response) => {
    response.sendFile(path.join(__dirname,'../front-end/dist/index.html'));
});

app.listen(PORT, () => { //Escuta por novos pedidos
    console.log(`Servidor está escutando na porta ${PORT}`)
});

//Node permite executar JS fora do navegador -> node ./api/server.js

//Sempre que você executa uma API (ex: localhost:3000 (Acessa esse server.js pelo navegador)) é realizada uma requisição GET
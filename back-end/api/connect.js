//Na pagina de conexão será apenas criado a conexão com a base de dados

//JavaScript Assincrono
//await -> Espera isso acontecer para prosseguir
//async -> Quando estiver utilizando o await, precisa do async para mostrar que você está em uma instrução assíncrona

import { MongoClient } from "mongodb"
//MongoClient é uma classe
const URI = "mongodb+srv://heitor11232012:6SLYIdrQCe71pP0G@cluster0.cz8lz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");

// const songCollection = await db.collection('songs').find({}).toArray(); //Retorna as informações pertinentes (.find) presentes em songs
//Pega da base de dados spotfyAula a collection songs (pega todas as informações {.find({})}) e transforma o resultado em um array (toArray)

console.log(db);

//node ./api/connect.js -> Testar se funciona
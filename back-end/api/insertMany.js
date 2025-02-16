import {artistArray} from "../../front-end/src/assets/database/artists.js";
import {songsArray} from "../../front-end/src/assets/database/songs.js";
import { db } from "./connect.js";

const newArtistArray = artistArray.map((currentArtistObj) =>{
    const newArtistObj = {...currentArtistObj};
    delete newArtistObj.id

    return newArtistObj
});
//Mapeia todo o array de artista e retira o id

const newSongArray = songsArray.map((currentSongObj) => {
    const newSongObj = {...currentSongObj};
    delete newSongObj.id
    return newSongObj
});

const responseSongs = await db.collection('songs').insertMany(newSongArray)
const responseArtists = await db.collection('artists').insertMany(newArtistArray)

//console.log(newArtistArray);
//console.log(newSongArray);

console.log(responseSongs);
console.log(responseArtists);
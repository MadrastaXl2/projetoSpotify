//Script para consumir a api criada no back-end

//Fetch ou Axios (Usar o Axios)
//npm i axios
import axios from "axios";

const URL = "http://localhost:3000";

const responseArtists = await axios.get(`${URL}/artists`)
const responseSongs = await axios.get(`${URL}/songs`)

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data

//console.log(responseArtists.data);
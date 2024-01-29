require('dotenv').config();

const { getLyrics, getSong } = require("genius-lyrics-api")
const options={
    apiKey: process.env.apiKey,
    title: 'coast',
    artist: 'hailee',
    optimizeQuery: true
}
getLyrics(options).then((lyrics)=>console.log(lyrics));
getSong(options).then((song)=>
    console.log(`
    ${song.lyrics}`))

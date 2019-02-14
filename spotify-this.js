console.log(`contacting spotify api...`);


const Spotify = require('node-spotify-api');

const spotify = new Spotify({
    id: "e9d6ba02621b42dfb1757c10a1b2a551",
    secret: "c9758dedd3fd462c99750e9229035685"
});

const spotifyThis = (song) => {
    spotify.search({
        type: 'track',
        query: song
    },
    (error, data) => {
        if (error) console.log(`Error occurred: ${error}`);
        // try {
        //     console.log(data.tracks.items.album.preview_url);
        // } catch (error) {
        //     console.log(`encountered an error: ${error}`);
        // }
    
        data.tracks.items.forEach((song, idx) => {
            // console.log(song.name);
            console.log(`-----------------------------------`);
            console.log(idx);
            console.log(`artist(s): ${song.artists[0].name}`);
            console.log(`song name: ${song.name}`);
            console.log(`preview song: ${song.preview_url}`);
            console.log(`album: ${song.album.name}`);
        })
    });
};


module.exports = spotifyThis;


console.log('start app.js');

const yargs = require("yargs");
const argv = yargs.argv;
const fs = require("fs");

const spotifyThis = require('./spotify-this');
const concertThis = require("./concert-this");
const movieThis = require("./movie-this");
const doWhatItSays = require("./do-what-it-says");

const option = argv._[0];

const search = argv._.splice(1,).join(' ');


const readFile = () => {
    
        const reader = fs.readFileSync("random.txt", "utf-8").split(",");
        const option = reader[0];
        const search = reader[1];
    
        switch (option) {
            case 'spotify-this-song':
                spotifyThis(search);
                break;
            case 'movie-this':
                movieThis(search);
                break;
            case 'concert-this':
                concertThis(search);
                break;
            default:
                break;
        };
};

 

switch (option) {
    case 'spotify-this-song':
        spotifyThis(search);
        break;
    case 'movie-this':
        movieThis(search);
        break;
    case 'concert-this':
        concertThis(search);
        break;
    case 'do-what-it-says':
        doWhatItSays();
        readFile()
        break;
    default:
        console.log('hey');
        break;
}


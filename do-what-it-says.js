const fs = require("fs");


const doWhatItSays = () => {
    const choices = ['concert-this', 'movie-this', 'spotify-this-song'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    const selection = choices[randomNumber];
    let item = '';
    
    switch (selection) {
        case 'concert-this':
            item = 'katie perry';
            break;
        case 'movie-this':
            item = 'knocked up'
            break;
        case 'spotify-this-song':
            item = "round here"
            break;
        default:
            break;
    
    }
    
    fs.writeFileSync("random.txt", `${selection}, ${item}`);
};

module.exports = doWhatItSays;



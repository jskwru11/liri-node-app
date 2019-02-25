const axios = require('axios');
const moment = require('moment');



const concertThis = (artist) => {
    console.log(`contacting bandsintown api...`);
    const queryURL = "https://rest.bandsintown.com/artists/" + artist.trim() + "/events?app_id=codingbootcamp";

    axios.get(queryURL)
        .then(response => {
            console.log(`Key loaded...`);
            console.log(`Upcoming concerts for ${artist}:`)
            const concertData = response.data;
            concertData.forEach(concert => {
                const date = moment(concert.datetime).format('MM/DD/YYYY');
                const region = concert.venue.region ? concert.venue.region : concert.venue.country
               
                console.log(`${concert.venue.city},${region} at ${concert.venue.name} ${date}`);
            })
    
    
        })
        .catch(error => {
            console.log(error)
        });
};

module.exports = concertThis;


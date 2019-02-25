const axios = require('axios');


const movieThis = (movie) => {
    console.log(`contacting omdb api...`)
    const queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    axios.get(queryURL)
        .then(response => {
            console.log(`Keys Loaded...`);
            const movie= response.data;
            let rt = "N/A";
            console.log(`Title: ${movie.Title}`);
            console.log(`Year: ${movie.Year}`);
            console.log(`Rated: ${movie.Rated}`);
            console.log(`IMDB Rating: ${movie.imdbRating}`);
            console.log(`Country: ${movie.Country}`);
            console.log(`Language: ${movie.Language}`);
            console.log(`Plot: ${movie.Plot}`);
            console.log(`Actors: ${movie.Actors}`);
                try {
                    movie.Ratings.forEach(src => {
                        if (src.Source === "Rotten Tomatoes") {
                            rt = src.Value;
                            
                        } 
                    })
                } catch {
    
                }
                
            console.log(`Totten Tomatoes Rating: ${rt}`);
    
                
            
            
            
        })
        .catch(error => {
            console.log(`Encountered an error: ${error}`);
        });
};


module.exports = movieThis;


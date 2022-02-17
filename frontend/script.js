function loadEvent() {

    let rootElement = document.getElementById("root");
    
    let cardElement2 = function (title, year, rate) {
        return `
        <div class="card">
            <h2>${title}</h2>
            <time>${year}</time>
            <span>${rate}</span>
        </div>
        `;
    }

    let renderAllCardElements = function (incomingMoviesArray) {
        let renderedCardList = ``;
        
        for (const incomingMovie of incomingMoviesArray) {
            renderedCardList += cardElement2(incomingMovie.title, incomingMovie.year, incomingMovie.rate);
        }
        
        return renderedCardList;
    }

    let newGoodMovies = [];

    for (const movieSend of movies) {

        if (movieSend.year > 2000 && movieSend.rate >= 8) {
            newGoodMovies.push(movieSend);
        }
    }
    newGoodMovies.sort(function(a, b){return a.year - b.year});
    
    rootElement.insertAdjacentHTML("beforeend", renderAllCardElements(newGoodMovies));
}

window.addEventListener("load", loadEvent);






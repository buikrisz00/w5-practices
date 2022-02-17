/* 
    // Strings
console.log("Hello world!");
console.log(`Hello 
world!`);
console.log('Hello world!');

    // Numbers
console.log(typeof 2);
console.log(typeof NaN);
console.log(typeof 2.14);

    // Booleans
console.log(true);
console.log(false);

    // Others
console.log(undefined);
console.log(null);
console.log(typeof undefined);
console.log(typeof null);

    //Arrays and Objects
console.log({
    "title": "Start Coding",
    "type": "Solo",
    "difficulty": 4.1,
    "usefulness": 4.2,
    "enjoyability": 3.7,
    "materials": 3.1,
    "tasks": [
        {
            "title": "Bank accounts",
            "description": ""
        },
        {
            "title": "100 words",
            "description": ""
        },
        {
            "title": "Word filter",
            "description": ""
        }
    ]
}) 

*/

/*
    // Variables
console.log(a);
console.log(b);
console.log(c);

var a = "Hello1";
let b = "Hello2";
const c = "Hello3";

console.log(a);
console.log(b);
console.log(c); 

*/


/* function d() {

    if (1 + 1 === 2) {
    
    }
    
    var a = "Hello1";
    let b = "Hello2";
    const c = "Hello3";
    
    console.log(a);
    console.log(b);
    console.log(c); 
}

d(); */

/* let e = 1;
console.log(e);
e = 2;
console.log(e);
e = e * 2; 
console.log(e); */

/* function multiplyByTwo(num) {
    console.log(num);
    return num * 2;
}

let f = multiplyByTwo(23134);
console.log(f); */


/* let g = {
    "myMethod": function () {
        console.log("Hello");
    }
} 

g.myMethod(); */ 

/* let window = {
    "addEventListener": function (eventName, eventFunction) {
        if (eventName === "load") {
            eventFunction();
        }
    }
} */
/* 

let h = {
    "anotherMethod": function (text) {
        return `You sent the following argument to this method: ${text}`;
    }
}

let i = h.anotherMethod("Yolo");
console.log(i);
console.log(h.anotherMethod("Yooolooo")); */

/* let myString = "mikkamakka";
let mySecondString = myString;
let myThirdString = "mikkamakka";

console.log(myString);
console.log(mySecondString);
console.log(mySecondString === myString);
console.log(myThirdString === myString); */

/* let myObject = {
    "myString": "mikkamakka"
}

let mySecondObject = myObject;

mySecondObject.myString = "sdadsad";

let myThirdObject = {
    "myString": "mikkamakka"
}

let myFourthObject = {...myObject};
myFourthObject.myString = "Vacskamati";


console.log(mySecondObject === myObject);
console.log(myFourthObject === myObject); */

/* console.log("" === "");
console.log({} === {}); */


/* window.addEventListener("load", function () {

    console.log("ez betöltődött");
}) */

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

    let renderAllCardElements = function (cardsArray) {
        let renderedCardList = "";
        
        for (const card of cardsArray) {
            renderedCardList += `
            <div class="card">
                <h2>${card.title}</h2>
                <time>${card.year}</time>
                <span>${card.rate}</span>
            </div>
            `;
        }
        return renderedCardList;
    }

    /* movies.sort(function(a, b){return a.year - b.year}); */
    let newGoodMovies = [];

    for (const movieSend of movies) {
        /* let newerThan2000 = false;

        if (movieSend.year > 2000) {
            newerThan2000 = true;
        }

        if (newerThan2000) {
            rootElement.insertAdjacentHTML("beforeend", cardElement2(movieSend.title, movieSend.year, movieSend.rate));
        } */
        //let floorRate = Math.floor(movieSend.rate);
        

        if (movieSend.year > 2000 && movieSend.rate >= 8) {
            newGoodMovies.push(movieSend);
            //rootElement.insertAdjacentHTML("beforeend", cardElement2(movieSend.title, movieSend.year, floorRate));
        }
    }
    newGoodMovies.sort(function(a, b){return a.year - b.year});
    
    rootElement.insertAdjacentHTML("beforeend", renderAllCardElements(newGoodMovies));


}

window.addEventListener("load", loadEvent);






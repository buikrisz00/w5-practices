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


let h = {
    "anotherMethod": function (text) {
        return `You sent the following argument to this method: ${text}`;
    }
}

let i = h.anotherMethod("Yolo");
console.log(i);
console.log(h.anotherMethod("Yooolooo"));



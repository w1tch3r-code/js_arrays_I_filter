"use strict";

// ===================================================
//       JS-Vertiefung – Array-Filter-Level_1_8 - 1
// ===================================================

console.log("%c JS-Vertiefung – Array-Filter-Level_1_8 - 1", "color: tomato");

const zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const geradeZahlen = zahlen.filter((elem) => {
    if (elem % 2 === 0) {
        return elem;
    } else {
        console.log("ungerade Zahl");
    }
});

console.log(geradeZahlen);

const ungeradeZahlen = zahlen.filter((elem) => {
    if (elem % 2 === 1) {
        return elem;;
    } else {
        console.log("gerade Zahl");
    }
});

console.log(ungeradeZahlen);

const geradeZahlenES6 = zahlen.filter((elem) => elem % 2 === 0 ? elem : console.log("ungerade Zahlen"));
console.log(geradeZahlenES6);

const ungeradeZahlenES6 = zahlen.filter((elem) => elem % 2 === 1 ? elem : console.log("gerade Zahlen"));
console.log(ungeradeZahlenES6);


// ===================================================
//     JS-Vertiefung – Array-Filter-Level_1_8 - 2
// ===================================================

console.log("%c JS-Vertiefung – Array-Filter-Level_1_8 - 2", "color: tomato");

const woerter = ["Banane", "Kaktus", "Flausch", "Ente", "Apfel", "Auto", "Giraffe", "Schmetterling", "Krokodil", "Lampe"];

const woerterUnter = woerter.filter((elem) => {
    if (elem.length <= 6) {
        return elem;
    } else {
        return false;
    }
})

console.log(woerterUnter);

const woerterUnter6ES6 = woerter.filter((elem) => elem.length <= 6 ? elem : false);
console.log(woerterUnter6ES6);

// ===================================================
//     JS-Vertiefung – Array-Filter-Level_1_8 - 3
// ===================================================

console.log("%c JS-Vertiefung – Array-Filter-Level_1_8 - 3", "color: tomato");

const heroArr = ["Superman", "Batman", undefined, , "Wonder Woman", "Spider-Man", "Black Widow", "Iron Man", "Thor", "Catwoman", , null];

console.log(heroArr);

// const myHeros = heroArr.filter((elem) => {
//     if (!(elem === undefined || elem === null || elem === '')) {
        
//     } else {
//         return false;
//     }
// })

// filter sortiert automatisch alle undefined, null und leeren Werte heraus

const myHeros = heroArr.filter((elem) => {
    return elem;
});

console.log(myHeros);

// ===================================================
//     JS-Vertiefung – Array-Filter-Level_1_8 - 4
// ===================================================

console.log("%c JS-Vertiefung – Array-Filter-Level_1_8 - 4", "color: tomato");

const zahlen2 = [12, 25, 7, 18, 30, 5];

const zalenKleiner20 = zahlen2.filter((elem) => elem < 20 ? elem : false);
console.log(zalenKleiner20);

const zalenKleiner20Mult2 = (zalenKleiner20) => {
    return zalenKleiner20 * 2
};

console.log(zalenKleiner20.map(zalenKleiner20Mult2));
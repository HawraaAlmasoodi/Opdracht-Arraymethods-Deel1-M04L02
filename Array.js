// Deel A:
let array = ["pretty", "amazing", "lovely"];

let addWordCool = function (arr) {
    arr.push("cool");
    return arr;
};

console.log(addWordCool(array));

// Deel B

let lovelyCities = ["Madrid", "Antwerpen", "Vinicia"];

let numberOfItems = function (arr) {
    return arr.length;
};

console.log(numberOfItems(lovelyCities));

// Deel C

let myColors = ["red", "green", "blue", "yellow"];

let firstItemOfmyColors = function (arr) {
    return arr.slice(0, 1);
};

console.log(firstItemOfmyColors(myColors));

// Deel D:

let fruits = ["Orange", "Lemon", "Mango", "Banana"];

let lastItemOfFruits = function (arr) {
    return arr[arr.length - 1];
};
console.log(lastItemOfFruits(fruits));

// Deel E

let animals = ["Bee", "butterfly", "duck", "bird"];

let arraySlice = function (arr) {
    return arr.slice(1);

};

console.log(arraySlice(animals));
// The original array is NOT affected resulting in array being ["Bee", "butterfly", "duck", "bird"]

let arraySplice = function (arr) {
    return arr.splice(1);

};

console.log(arraySplice(animals));
// The original array is affected resulting in array being ["Bee"] 

// Deel F 

let favFlowers = ["Rose", "Orchid", "Lily", "Tulip"];

let stringArray = function (arr) {
    return arr.join('-');

};

console.log(stringArray(favFlowers));

// Deel G 

let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];

let combineArrays = function (array1, array2) {
    return array1.concat(array2);
};

console.log(combineArrays(array1, array2));
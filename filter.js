// Creates a new Array
// iterates through an Array
// runs a callback function on each  value in the Array
// if the callback function returns true, that value will be added to the new Array
// if the caollback function returns false, that value will be ignored from the new Array
// THE RESULT OF THE CALLBACK WILL ALWAYS BE A BOOLEAN
// try not to use if statements in filter

const a1 = [1,2,3,4,5,6,9];

function valGreaterThanTwo(arr){
    return arr.filter(function(value){
        return value > 2;
    });
}

valGreaterThanTwo(a1);

const instructors = [
    {name: 'Delta'},
    {name: 'Alpha'},
    {name: 'Gamma'},
    {name: 'Lambda'}
];

instructors.filter(function(value, index, array){
    return value.name.length > 3;
});

function filter(array, callback){
    var newArr = [];
    for(var i=0; i < array.length; i++){
        if(callback(array[i],i,array)){
            newArr.push(array[i]);
        }
    }
    return newArr;
}

function onlyFourLetterNames(arr){
    return arr.filter(function(value){
        return value.length === 4;
    });
}

onlyFourLetterNames(['Meow','dog','cat','Excelsior']);

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key){
    return arr.filter(function(value){
        return value[key] !== undefined;
    });
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue){
    return arr.filter(function(value){
        return value === searchValue;
    })[0];//first in array
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the arrayt.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue){
    return arr.filter(function(value){
        return value[key] === searchValue; 
    })[0]; // first in array
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str){
    var vowels = "aeiou"
    return str.toLowerCase().split("").filter(function(val){
        return vowels.indexOf(val) === -1;
    }).join('');
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr){
    return arr.filter(function(value){
        return value % 2 !== 0;
    }).map(function(value){
        return value * 2;
    });
    
}
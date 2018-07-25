// forEach
// it is invoked on an Array so it iterates through an array
// it runs a callback function on each value in the array
// returns undefined so you cannot store its result in a variable or return its result in a function
// start with array then apply the method

// callback function can take THREE parameters max
// EACH value within the array, its index and third ENTIRE ARRAY
[1,2,3].forEach(function(value, index, array)   
    {
        // this will run 3 times
        console.log(`value ${value}`);
        console.log(`index: ${index}`);
        console.log(`array: [1,2,3]`);
        console.log('----');
    }
);

// const arr = [1,3,4,5];
// arr.forEach(function(value, index, array)   
//     {
        
//         // this will run 3 times
//         console.log(`value ${value}`);
//         console.log(`index: ${index}`);
//         console.log(`array: ${arr}`);
//         console.log('----');
//         arr.push('blah');
//     }
// );

function halfValues(arr)
{
    const newArr = []; // initialize an empty array to store new values
    arr.forEach(function(value)
    {
        newArr.push(value / 2);
        console.log(newArr);
    });
    return newArr;
}

halfValues([4,5,9]);

/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){
    const newArr = [];
    arr.forEach(function(value){
        newArr.push(value * 2);
    });
    console.log(newArr);
    return newArr;
}

doubleValues([1,2,3]); // [2,4,6]
/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    const newArr = [];
    arr.forEach(function(value){
        if(value % 2 === 0)
        {
            newArr.push(value);
        }
    });
    console.log(newArr);
    return newArr;
}

onlyEvenValues([5,1,2,3,10]); // [2,10]
/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    const newArr = [];
    let firstChar = '';
    let lastChar = '';
    arr.forEach(function(value)
    {
       firstChar = value.charAt(0);
       lastChar = value.charAt(value.length - 1);
       newArr.push(firstChar + lastChar);
       // or value[0] + value[value.length - 1] in shorthand
    });      
    console.log(newArr);
    return newArr;
}

showFirstAndLast(['colt','matt', 'tim', 'udemy']); // ["ct", "mt", "tm", "uy"]
/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    arr.forEach(function(v){
        v[key] = value;
    });
    console.log(arr)
    return arr;
}

addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor');
/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){

    const obj = {};
    let vowels = "aeiou";
    let newStr = str.toLowerCase().split("");

    newStr.forEach(function(letter){
        if(vowels.indexOf(letter) !== -1){
            if(obj[letter]){
                obj[letter]++;
            }
            else{
                obj[letter] = 1;
            }
        }
    });
    console.log(obj);
    return obj;
}

vowelCount('I Am awesome and so are you'); // {i: 1, a: 4, e: 3, o: 3, u: 1};
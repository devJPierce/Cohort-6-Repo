// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

// #1 AGE TO ABILITIES

/* age      │ message                            │
├──────────┼────────────────────────────────────┤
│ under 16 │ 'You can't drive.'                 │
│ 16 to 17 │ 'You can drive but not vote.'      │
│ 18 to 24 │ 'You can vote but not rent a car.' │
│ 25 plus  │ 'You can do pretty much anything.' │
└──────────┴────────────────────────────────────┘
```

**Examples**
```
ageToAbilities(10) => 'You can't drive.'
ageToAbilities(25) => 'You can do pretty much anything.'*/



function ageToAbilities(age) {
if (age < 16) {
    return "You can't drive.";
} else if (16 < age < 17) {
    return "You can drive but not vote."
} else if (18 < age < 24) {
    return "You can vote but not rent a car."
} else if (age >= 25) {
    return "You can do pretty much anything."
}
}

// #2 ODD INDICES

/*Examples
```
oddIndices([0, 2, 4, 6, 8, 10]) => [2, 6, 10]
oddIndices([1]) => []
oddIndices([100, 101, 102]) => [101] */

function oddIndices(array) {
    let result = [];
    for (let i = 1; i < array.length; i += 2) {
        result.push(array[index]);
    }
    return result;
}



// #3 ODD VALUES

/*Examples
```
numOddValues([0, 1, 2, 3]) => 2
numOddValues([5, 5, 5, 5]) => 4
numOddValues([]) => 0 */

numOddValues = [0, 1, 2, 3]

function numOddValues(arr) {

let odds = []

for(let i = 0; i < arr.length; i++)
    if (arr[i] % 2 !==0) {
        odds.push(arr[i]) {
            odds++;
        }
    } 
    return odds;
}


// #4 AVG STRING LENGTH

/*Examples
```
averageStringLength(['oh', 'hello']) => 3.5
averageStringLength([]) => 0
averageStringLength(['a', 'pleasant', 'string']) => 5 */

const strings = ["tea", "laptop", "cereal"]

function averageStringLength(strings){
let totalLength = 0

for (let i = 0; i < strings.length; i ++) {
    totalLength / strings[i].length;
}
  return 
}

// (1+2+3)/3       (tea+laptop+cereal)/3     (3+6+6)/3



// #5 FIRST PUNCTUATION INDEX

/*Examples
```
firstPunctuationIndex('wow! goodness me.') => 3
firstPunctuationIndex('I love taking tests?') => 19
firstPunctuationIndex('...hello?') => 0
firstPunctuationIndex('alright alright alright') => -1*/

/*function firstPunctuationIndex(string) {{
        for (let i = 0; i < string.length; i ++) {
            if (string[i] === '.' || string[i] === '?' || string[i] === '!') {
                return i;
            }
        }
        else return -1;
    }
}*/

//MICHAEL'S SUGGESTION

function firstPunctuationIndex(input_string) {
    const regex = /[.!?]/;
    const matchIndex = input_string.search(regex);
    return matchIndex !== -1 ? matchIndex : -1;
}

// #6 GET PLACE

/*Examples
```
getPlace([60, 30, 10], 90)     => '1st place'
getPlace([60, 30, 10], 50)     => '2nd place'
getPlace([60, 30, 10], 15)     => '3rd place'
getPlace([500, 300, 200], 100) => '4th place' */

/*function getPlace([60, 30, 10], 90) {
       if (90 > arr[i]) {
       return "1st place"
       }
       else if () {
       return "2nd place"
       }
       else if () {
       return "3rd place"
       }
       else if () {
       return "4th place"}
}*/

/*Edge Cases:

If newScore is higher than all scores in sortedHighScores, it would be 1st place.
If newScore is lower than all scores in sortedHighScores, it would be n+1th place, where n is the length of sortedHighScores.


    1. Initialize a variable `place` to 1.
    2. Loop through each score `s` in sortedHighScores:
        - If `newScore` is greater than `s`, increment `place` by 1.
        - If `newScore` is less than or equal to `s`, break out of the loop.
    3. Return a string that represents the place of `newScore`:
        - If `place` is 1, return "1st place".
        - If `place` is 2, return "2nd place".
        - If `place` is 3, return "3rd place".
        - Otherwise, return `place` followed by "th place".
*/

function getPlace(highScores, score) {
    let place = 1;
    for (let i = 0; i < highScores.length; i++) {
        if (score > highScores[i]) {
            break;
        }
        place++;
    }
    
    if (place === 1) {
        return '1st place';
    } else if (place === 2) {
        return '2nd place';
    } else if (place === 3) {
        return '3rd place';
    } else if (place === 4) {
        return '4th place';
    }
}

// #7 ADD TO OBJECT



/*let obj = {
    user: 'teacher',
    birthday: 'January 1st',
    favoriteColor: 'yellow'
}*/

/*function addToObj() {
    let obj = {
        user: 'teacher',
        birthday: 'January 1st',
        favoriteColor: 'yellow'

        obj.user = "teacher"
}
}*/

// STRETCH PROBLEM: DUPLICATE ELEMENTS

/*const inputArray = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];

function duplicateElements(inputArray) {
    let newArr = []   
    for (let i = 0; i < arr.length; i++){
    
        if(arr[i] % 2 !== 0){
            
            newArr.push(arr[i])
        }
    }
    
    return newArr
    
    }
    
    const duplicates = arr.filter((value, index) => array.indexOf(value) !== index)
    console.log(filterOdds(1, 2, 3, 4, 5, 6, 7, 8, 9))
    
    
    console.log(arr.filter((item) => item % 2 !== 0))*/

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === 'undefined') {
    ageToAbilities = undefined;
}
if (typeof oddIndices === 'undefined') {
    oddIndices = undefined;
}
if (typeof numOddValues === 'undefined') {
    numOddValues = undefined;
}
if (typeof averageStringLength === 'undefined') {
    averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === 'undefined') {
    firstPunctuationIndex = undefined;
}
if (typeof getPlace === 'undefined') {
    getPlace = undefined;
}

if (typeof addToObj === 'undefined') {
    addToObj = undefined;
}

if (typeof duplicateElements === 'undefined') {
    duplicateElements = undefined
}

module.exports = {
    ageToAbilities,
    oddIndices,
    numOddValues,
    averageStringLength,
    firstPunctuationIndex,
    getPlace,
    addToObj,
    duplicateElements
};

//JavaScript Week 3 Assignment John


//Step 1- Creating an array
var intArray=[3, 9, 23, 64, 2, 8, 28, 93]


//Step 1a- Subtracts the first element from the last element and returns the res
function subtractFirstFromLast(anArray) {
   return (anArray.slice(-1)[0]-anArray[0])    
}

console.log("Solution 1a");
console.log(subtractFirstFromLast(intArray));

//Step 1b
//push a number on the end, run the 1a function again.
intArray.push(44);

console.log("Solution 2a");
console.log(intArray); //just prints the array
console.log(subtractFirstFromLast(intArray));


//Step 1c
//make an average value function for an array, run it on my array

function arrayAverage(anArray) { 
    var sum=0;
    var n=0;
    for (let i=0; i<anArray.length; i++) {      //JSTTR,
        if (typeof anArray[i]==='number'){ //Maybe not required, but trying to average things that are not numbers seems like a bad idea
            sum+=anArray[i];
            n++;
        }
        else { //if your array contains non numbers break the loop
            n=-1;
            break
        } 
    }

    if (n==-1){return NaN;}  //Non number?  No average 
    else {
        return sum/n;
    }
}

console.log("Solution 1c"); 
console.log(intArray); //just prints the array
console.log(arrayAverage(intArray)); //displays the array's average


//Step 2
var namesArray2=['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//Step 2a- Creating a function to find average Array Argument length

function arrayArgumentLengthAverage(anArray) {  //Silly self question can you duplicate variables in different JavaScript Functions?
    var sum=0;
    var n=0;  //n is the regular variable used for the amount of items in an array, so this is a meaningful named variable
    
    for (let i=0; i<anArray.length; i++){ //Outside of scope of class so far, but, I think better would be a for...in loop
        sum+= anArray[i].length; 
        n+=1;
    }

    return sum/n;
}

console.log("Solution 2a- Average Array Argument Length");
console.log(arrayArgumentLengthAverage(namesArray2));


//Step 2b-Make a long string from an Array, maybe it is useful for something

function arrayStringCat(anArray){
    arrayString =""
    for (let i=0; i < anArray.length; i++){
        arrayString = arrayString + anArray[i] + ' ';
    }
    return arrayString;
}

console.log("Solution 2b- Array turned into a string")
console.log (arrayStringCat(namesArray2));

//Step 3 -This is a question so I will give a couple examples 
///Start with a sample Array to play with just to have it.

function randomString() {  //create a random string of 1-6 characters (6 is very unlikely) 
    letters ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    stringLength=1+Math.floor(Math.random()*5);
    rndString=''
    for(let i=0; i<stringLength; i++){
        rndString+= letters[Math.floor(Math.random() * letters.length)];
    }
    return rndString
}


function createSampleArray(sampleLength, sampleType){ //Now with 2 types, can add more later
    sampleType=sampleType.toLowerCase();
    var sampleArray=[];
    switch (sampleType) {
        case 'number':
            for (let i=0; i<sampleLength; i++){
                sampleArray.push(Math.floor(Math.random()*50));
            }
            break;
        case 'string':
            for (let i=0; i<sampleLength; i++){
                sampleArray.push(randomString());
            }
            break;
        default: //if you don't give a type you can have an array of undefinded
            var undVariable
            for (let i=0; i<sampleLength; i++){
                sampleArray.push(undVariable)
            } 
    }
    return sampleArray;

}

var questionThreeArray=createSampleArray(5, 'string');
//Now the actual Step 3 answers, I am using the second one, which is my preferred method.
//var lastArrayElement1 = questionThreeArray[questionThreeArray.length-1]; //an ugly way
var lastArrayElement2 = questionThreeArray.slice(-1)[0]; // more elegant method
//var lastArrayElement3 = questionThreeArray.pop(); //I have it now, but the array has lost it seems like a bad plan for the way the question is written


console.log("Solution 3- Accessing the last element of an array");
console.log(questionThreeArray);
console.log(lastArrayElement2);



//Question 4
//Create a new sample array first, because the functions exist
var questionFourArray=createSampleArray(9, 'number');
//Question 4 answers, there are many ways, but the easy way is probably all that is ever needed.
var firstArrayElement= questionFourArray[0];

console.log("Solution 4- Accesing the first element of an array");
console.log(questionFourArray);
console.log(firstArrayElement);

//Question 5
// I am going to write a function to do this

function createArrayArgumentLengths(anArray){
    var lengthArray=[];
    for (let i=0; i<anArray.length; i++){
        lengthArray.push(anArray[i].length);
    }
    return lengthArray;
}

var namesArray = ["Kelly", "Sam", "Kate"];  //the Array from the question
var namesLengths = createArrayArgumentLengths(namesArray);

console.log('Solution 5- creating an array nameLengths');
console.log(namesArray);
console.log(namesLengths);

//Question 6
// Return the total of the integers in an array- I wrote a function for reuse reasons

function arraySum(anArray){  //I am going to check the inputs, because it feels right
    var sum=0;
    var n=0
    for (let i=0; i<anArray.length; i++) {      //JSTTR,
        if (typeof anArray[i] === "number"){ //Maybe not required, but trying to average things that are not numbers seems like a bad idea
            sum+=anArray[i];
            n++;
        }
        else { //if your array contains non numbers break the loop
            n=-1;
            break
        }
    }
    if (n==-1){return NaN;}
    else {return sum;}
}

console.log("Solution 6- Total of Array nameLengths, show above")
console.log(arraySum(namesLengths));


//Question 7
// returns a string multiplied many times 
function dupedStringOfString (aString, times){
    var dupedString=''
    for (let i=0; i<times; i++){
        dupedString += aString;
    }
    return dupedString;
} 


console.log("Solution 7- Duplicating a string multiple times")
console.log(dupedStringOfString("Hello", 3));
console.log("Running Function second time with random sting and random times")
var myString=randomString();
var myTimes=1 + Math.floor(Math.random()*10);
console.log(myString);
console.log(myTimes);
console.log(dupedStringOfString(myString, myTimes));

//Question 8
// A function to create full names from a first and last name
function fullName(first, last){
    return (first + ' ' + last);
}

var firstName="John";
var lastName="LeTard";
console.log("Solution 8- Prints First and Last name separate first, then the function result");
console.log(firstName);
console.log(lastName);
console.log(fullName(firstName, lastName));

//Question 9
//A function that sees if a number array totals greater than 100, I am going to use a previously written function in this function
function arrayGreaterThan100(anArray){
    if (arraySum(anArray) > 100) {return true;}
    else {return false;}    
}

console.log('Solution 9- Function Array Greater than 100');
var myLargeArray=createSampleArray(5, "number");
console.log("The Array");
console.log(myLargeArray);
console.log("The Sum");
console.log(arraySum(myLargeArray));
console.log("Function Result");
console.log(arrayGreaterThan100(myLargeArray));

//Question 10
//I already wrote this function earlier, arrayAverage() 
console.log('Solution 10- Function Average value of an Array');

var myLargeArray2=createSampleArray(8, "number");
console.log("The Array");
console.log(myLargeArray2);
console.log("The Mean, with my random array creator, the expected value should be 25");
console.log(arrayAverage(myLargeArray2));

//Question 11
//Function that compares the average of two arrays, return true if the first is larger
function arrayAverageGreaterThan(firstArray, secondArray){
    if (arrayAverage(firstArray)>arrayAverage(secondArray)) {return true;}
    else {return false;}
}

var anIntArray1 =createSampleArray(4, "number");
var anIntArray2 =createSampleArray(4, "number");
console.log('Solution 11- Compares the average of 2 arrays');
console.log('First array');
console.log(anIntArray1);
console.log("First array average")
console.log(arrayAverage(anIntArray1));
console.log('Second array');
console.log(anIntArray2);
console.log("Second array average")
console.log(arrayAverage(anIntArray2));
console.log("Is the Average of the first array greater?");
console.log(arrayAverageGreaterThan(anIntArray1, anIntArray2));


//Question 12
//Function that checks if it is hot, and you can afford a drink
function willBuyDrink(hotOrNot, money){  //for the question writer: I think the question has me passing two variables, and I do not like to use the variable I am passing as the arguuments names in a function
    if (hotOrNot && money>10.50) {return true;}
    else {return false;}
}

var isHotOutside;
if ( (Math.floor(Math.random()*100))%2 == 0){
    isHotOutside = true;
}
else {
    isHotOutside = false;
}

var moneyInPocket = (Math.random()*20).toFixed(2);

console.log("Solution 12- To buy a drink or not");
console.log("Is it hot? " + isHotOutside);
console.log("How much money do I have? $" + moneyInPocket);
console.log("Buying a Drink? " + willBuyDrink(isHotOutside, moneyInPocket));

//Question 13
/* I had a problem, possibly imagined,  that I would need an array fill with random arguments, 
so I wrote a function that did that, see function createSampleArray, when I wrote that, I found 
a new problem to go with that, which was what if I wanted to add strings, so I wrote a second 
function to create a random string, see function randomString
*/
console.log("Solution 13- I wrote a function that creates random arrays and a second function that creates random strings.  Both were used in previous examples.")




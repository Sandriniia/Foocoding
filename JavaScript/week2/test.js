//1
console.log("Hello World");
console.log("Привет, земляне");
console.log("Bonjour le monde");
//2
console.log('I\'m awesome');
//3
let x;
console.log("the value of my variable x will be: undefined");
console.log(x);
x = 10;
console.log("the value of my variable x will be equal 10");
console.log(x);

//4 strings
let y = "Java Script is awesome";
console.log("the value of my variable y will be equal string 'Java Script is awesome'");
console.log(y);
y = "There will be a new string here";
console.log("the value of my variable y will be equal string 'There will be a new string here'");
console.log(y);

//5 numbers
let z = 7.25;
console.log(z);
let a = Math.round(z);
console.log(a);

const e = Math.max(z,a);
console.log(e);
//or
if(a > z) {
    console.log(a);
} else{
    console.log(z);
}

//6 arrays
let arr = [];
console.log("empty array");
console.log(arr);

let myFavoriteAnimals = ['dolphin','camel','blue whale','lama','fox'];
console.log(myFavoriteAnimals);
myFavoriteAnimals.push('baby pig');
console.log(myFavoriteAnimals);

//7 more strings
let myString = "this is a test";
console.log(myString);
console.log(myString.length);

//8 program that checks the types of two variables

const trueBool = true;
console.log("The value of my variable trueBool is: " + trueBool);
console.log("type is Boolean");
console.log(typeof trueBool);

const falsebool = false;
console.log("The value of my variable falsebool is: " + falsebool);
console.log("type is Boolean");
console.log(typeof falsebool);

const num_1 = 678;
console.log("The value of my variable num_1 is: " + num_1);
console.log("type is number");
console.log(typeof num_1);

const num_2 = -178;
console.log("The value of my variable num_2 is: " + num_2);
console.log("type is number");
console.log(typeof num_2);

const firstString = 'Java Script';
console.log("The value of my variable firstString is: " + firstString);
console.log("type is String");
console.log(typeof firstString);

const secondString = 'PHP, C#, Python, Ruby';
console.log("The value of my variable secondString is: " + secondString);
console.log("type is String");
console.log(typeof secondString);

const zero = null;
console.log("The value of my variable zero is: " + zero);
console.log("type is null");
console.log(typeof zero);

const obj_1 = {
    name: 'Sandra',
    favoriteColors: 'grey, green, black' 
};
console.log("The value of my variable obj_1 is: " + obj_1);
console.log("type is object");
console.log(typeof obj_1);

const obj_2 = {
    name: 'Sam',
    favoriteColors: 'orange, pink' 
};
console.log("The value of my variable obj_2 is: " + obj_2);
console.log("type is object");
console.log(typeof obj_2);

const nothingInside = undefined;
console.log("The value of my variable nothingInside is: " + nothingInside);
console.log("type is undefined");
console.log(typeof nothingInside);


//function that checks the types of two variables
function checkTypeEquality(firstType, secondType) {
    if(typeof firstType === typeof secondType) {
        console.log('same type');
    } else{
        console.log('different types');
    }
}


checkTypeEquality(num_1, num_2);
checkTypeEquality(num_1, obj_2);
checkTypeEquality(zero, obj_2);
checkTypeEquality(firstString, secondString);
checkTypeEquality(secondString, obj_1);
checkTypeEquality(nothingInside, zero);

//9
console.log('x will be equals 1');

console.log('let x= 8 % 3; x will be equals 2, because if we divide 8 by 2 the remainder of the division will be 2');
console.log('let x= 10 % 4; x will be equals 2, because if we divide 10 by 4 the remainder of the division will be 2.5, but the value is rounded');
console.log('let x= 7 % 6; x will be equals 1');

//10

const types = ['string', true, 348, null, undefined,'secondString', -36.6];
console.log(types);

const math = (6 / 0) === (10 / 0);
console.log(math);

const inifinityFalse = Infinity === -Infinity;
console.log(inifinityFalse);

const inifinityTrue = Infinity === Infinity;
console.log(inifinityTrue);









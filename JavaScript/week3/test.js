//Strings

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
myString = myString.replace(/,/g,' ');
console.log(myString);

//Arrays

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);

favoriteAnimals.splice(1,0,'meerkat');
console.log(favoriteAnimals);
console.log(`The array has a length of ${favoriteAnimals.length}`);

favoriteAnimals.splice(3,1);
console.log(favoriteAnimals);

//one way to find index of 'meerkat'
favoriteAnimals.forEach((item, i) => {
    if(item === 'meerkat'){
        console.log(i);
    }
})

//another way to find index of 'meerkat'
console.log(`The item you are looking for is at index ${favoriteAnimals.indexOf('meerkat')}`);

//Java Script
//1 returns the sum of 3 arguments.
function sum(num1, num2, num3){
    const sum = num1 + num2 + num3;
    return sum;
}

console.log(sum(3,67,589));

//2 
function colorCar(color){
    return `a ${color} car`;
}

console.log(colorCar('orange'));

//3 Function that return all properties from object

const personInfo = {
    name: 'Jenya',
    age: 27,
    job: 'developer',
    hobby: 'painting',
    married: true,
    cat: 2
}

function getPersonInfo(obj){
    let info = '';
    let keys = Object.keys(obj);
    keys.forEach(key => {
       info += `${key}: ${obj[key]}\n`;
    });
    return info;
 }

console.log(getPersonInfo(personInfo));


//4 
function vehicleType(color, code){
    if(code === 1){
        return `a ${color} car`;
    }else if(code === 2){
        return `a ${color} motorbike`;
    }
}

console.log(vehicleType('red',2));
console.log(vehicleType('green',1));

//5
console.log((3 === 3) ? 'yes' : 'no');

//6

function vehicle(color, code, age){
    if(code === 1){
        if(age > 0){
            return `a ${color} used car`;
        }
        return `a ${color} car`;
    }
    if(code === 2){
        if(age > 0){
            return `a ${color} used motorbike`;
        }
        return `a ${color} motorbike`;
    }
}

console.log(vehicle('orange',2,3));
console.log(vehicle('black',1,0));
console.log(vehicle('gold',1,1));

//9

function vehicle(color, code, age){
    const listOfVehicle = ['motorbike','bicycle','scooter','airplane','helicopter'];
    if(age > 1){
        return `a ${color} used ${listOfVehicle[code-1]}`;
        }
        return `a ${color} new ${listOfVehicle[code-1]}`;
    }

console.log(vehicle('grey',5,1));
console.log(vehicle('blue',3,2));
console.log(vehicle('pink',1,0));

//10 Function to write an advertisement from list of vehicles

const listOfVehicle = ['motorbike','bicycle','scooter','airplane','helicopter'];
function addNewVehicleToAdvertisement(){
    let advertisement = "Amazing Joe's Garage, we service ";
    for(i=0; i<listOfVehicle.length -2; i++){
            advertisement += `${listOfVehicle[i]}s, `;
    }
    return `${advertisement}${listOfVehicle[listOfVehicle.length - 2]}s and ${listOfVehicle[listOfVehicle.length - 1]}s.`;
}
 
console.log(addNewVehicleToAdvertisement());

//11

listOfVehicle.push('rocket');
console.log(addNewVehicleToAdvertisement());

//12-14

const someObj={};

const fooCoding = {
    teachers: 'Seif,Baraa, Joseph',
}

fooCoding.languages='HTML, CSS, JavaScript';

console.log(fooCoding);

//15

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

//When we declare a variable, it stores a reference to the assigned value. When we declare a new variable, even if it stores a value identical to the value of another variable, it is not the same value, this variable will store a new independent value. So, in this example, x not equals y. These are two different boxes, each of which contains [1, 2, 3]
// But when we write let z = y, we bind the variable z to the box of variable y. z and y now store a reference to the same value. So z equals y

console.log(x == y); // false, variables with different references to their values
console.log(x === y); // false
console.log(z == y); // true variables have one reference to the same value
console.log(z == x); // false

//16

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

o2 = {change_o3: 'no'};
console.log(o3);

o1 = {change_o3: 'no'};
console.log(o3);

//Does the order that you assign (o3 = o2 or o2 = o3) matter?
//It matters because the variable o3 did not exist and we could not assign a nonexistent value to the variable o2.
//when we declare: let o3 = o2, we assign a value of o2 to a variable o3. And vice versa

//17

let bar = 42;

console.log(typeof typeof bar); //String

//typeof bar = 'number'(output of the value as a string), so 'typeof typeof bar' it is the same as "typeof 'number'", this is return String, because 'number' in this case is a string





var birthYear = 1995
var futureYear = 2090
var age = futureYear-birthYear
var age1 = age-1

//console.log('I will be either ' + age1 + ' or ' + age + ' in ' + futureYear + '.')

//estabishing control flow, which gives our program logic

//comparison
//true or false: boolean

//greater than >
//less than <
//equal to == or strictly equal ===
//greater than or equal to >=
//less than or equal to <=
//not equal !=

//building a conditional
//if, else, and else if

//var num = 4

//if (num < 10){
//    alert('the number is less than 10.')
//}else if (num === 10){
//    alert('your number is 10!')
//}else{
//    alert('the number must be greater than 10')
//}

//functions
//functions perform operations that can have any data passed through them

//keyword function
//parenthesis that will hold arguments passed through

function alertName(name1){
    return alert(name1) //return exits the function
}

//call the function
//alertName('Sarah');

function divideNumber(numberTwo, numberOne){
    return numberOne/numberTwo
}

//call the function
//console.log(addNumber(45, 56));

//create a function that has 3 virtual doors

//choose alert or console.log to tell what is behind the door
function foodDoor(num){
    if (num === 1){
        return ('You get tacos!!!!')
    }else if (num === 2){
        return ('You get pizza!!!!')
    }else if (num === 3){
        return ('You get ramen!!!!')
    }else{
        return ('Please choose a door number between 1 and 3')
    }  
}

//call the function with different options to make sure it works
console.log(foodDoor(10))




















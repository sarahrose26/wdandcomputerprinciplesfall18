//World Translator
//The World Translator
//	•	Write a function named helloWorld that:
//	◦	takes 1 argument, a language code (e.g. "es", "de", "en")
//	◦	returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
//	•	Call that function for each of the supported languages and log the result to make sure it works.

//function helloWorld(lang){
//    if (lang === 'de'){
//        return 'hello world in German' //actually be in German
//    } else if (lang === 'it'){
//        return 'hello world in Italian' //actually in Italian
//    }else{
//        return 'hello world'
//    } 
//}
//
////testing with german
//console.log(helloWorld('de'));
//
////testing with italian
//console.log(helloWorld('it'));
//
////test with one more language
//console.log(helloWorld('en'));

//changing the inner text of the first h1
var name = 'Sarah';

var heading = document.getElementById('title')

heading.innerText = "Enter " + name + "'s Information"

//changing the html tag inside of our main-section ID
document.getElementById('main-section').innerHTML = '<h3>Hello world even smaller</h3>'

var paragraphs = document.getElementsByTagName('p')

//console.log(paragraphs[0].innerText);

//this function runs when the user clicks the button that refers to it
//needs to create a conditional that tells if the user got the right answer
//compare user input with the correct answer
function myFunction(){
    var letter = document.getElementById('myInput').value
    if (letter === 'b'){
         alert('You got it right!')
    }else{
        alert('WRONG LETTER! GUESS AGAIN!')
    }
   console.log(letter)    
}





























    
    
    
    
    
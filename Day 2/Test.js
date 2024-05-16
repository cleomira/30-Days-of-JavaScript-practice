let challenge = "30 Days Of JavaScript" //declearing a variable
console.log(challenge) //printing the string on the browser
console.log(challenge.length); // printing nthe length of the string.
console.log(challenge.toUpperCase()); // changing the characters to uppercase
console.log(challenge.toLowerCase()); // changing the characters to lowercase
console.log(challenge.substring(0,2))// cutting out the the first word of the string
console.log(challenge.substring(2,21))// cutting out the phrase "Days Of JavaScript"from "30 Days Of JavaScript" 
console.log(challenge.includes('Script'))// checking for the word 'Script' using include() method
console.log(challenge.split())// changing string into an array using split method
console.log(challenge.split(' '))// split to an array at space
let socialMediaPlatforms = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(socialMediaPlatforms.split(','))  // split to any array at comma 
console.log(socialMediaPlatforms.split(', '))// changes to an array
console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15)) 
console.log(challenge.charCodeAt(11))  
console.log(challenge.indexOf('a')) 
console.log(challenge.lastIndexOf('a'))

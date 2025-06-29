/**
 * exercise -1 
 * ------------------
 * write a javaScript program to chect two 
 * number and return true if one of the number is 
 * 100 or if the sum of the two numbers is 100 
 */


const isEqualTo100 = (a, b) => a === 100 || b === 100 || a + b === 100;

// console.log(isEqualTo100(10,90));


/**
 * write a javaScript program to get the extension of a filename
 */



const getFileNameExtension = (filename) => {
  if (typeof filename !== 'string') return null;

  const lastDotIndex = filename.lastIndexOf('.');

  if (lastDotIndex <= 0 || lastDotIndex === filename.length - 1) {
    return null;
  }

  return filename.slice(lastDotIndex + 1).toLocaleLowerCase();
}

// console.log(getFileNameExtension("gitIgnore"));



const getFileNameExtension2 = (str) => {
  return str.slice(str.lastIndexOf('.'));
}

console.log(getFileNameExtension2("indexedDB.html"));
console.log(getFileNameExtension2("script.js"));
console.log(getFileNameExtension2("style.css"));


/**
 * exercise - 3 
 * -----------------------
 * write a javascript program to replace every character in a given string with the character following it in the alphabet
 */

const moveCharsForward = (str) =>
  str.split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
    .join('');


console.log(moveCharsForward("Shohan"));

//     🧠 Step-by-Step Breakdown:
// Let's say the input is "Shohan":

// str.split('')
// Converts the string into an array of characters:
// "Shohan" → ['S', 'h', 'o', 'h', 'a', 'n']

// .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
// For each character:

// char.charCodeAt(0) gets the Unicode (ASCII) value.

// +1 shifts it to the next character.

// String.fromCharCode(...) converts it back to a character.

// Examples:

// 'S' → 83 → 84 → 'T'

// 'h' → 104 → 105 → 'i'

// 'o' → 'p'

// 'a' → 'b'

// 'n' → 'o'

// .join('')
// Combines the transformed characters back into a string:
// ['T', 'i', 'p', 'i', 'b', 'o'] → "Tipibo"



/**
 * exercise - 4 
 * -----------------------------------
 * write a javaScript program to get the current date  ........
 */

const currentDate = new Date();

const formattedDate = currentDate.getFullYear() + '-' +
  String(currentDate.getMonth() + 1).padStart(2, '0') + '-' +
  String(currentDate.getDate()).padStart(2, '0');

console.log("Today's date:", formattedDate);



/*

write a javaScript program to create a new string adding "New!" in front of given string . If the given stirng begins with "New!" already then return the original stirng .

 */


const addNew = (str) =>  
   str.indexOf("New!") === 0 ? str : `New! ${str}`; 


console.log(addNew("shohan"));
console.log(addNew("New! shohan"));


/**
 * exercise -1 
 * ------------------
 * write a javaScript program to chect two 
 * number and return true if one of the number is 
 * 100 or if the sum of the two numbers is 100 
 */


const isEqualTo100 = (a,b) => a === 100 || b === 100 || a+b === 100 ;

// console.log(isEqualTo100(10,90));


/**
 * write a javaScript program to get the extension of a filename
 */



const getFileNameExtension = (filename) => {
    if (typeof filename !== 'string' )  return null ;

    const lastDotIndex = filename.lastIndexOf('.');

    if (lastDotIndex <=0 || lastDotIndex === filename.length - 1) {
      return null ;
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




const { expect } = require("chai");

// Write algorithm here
function isPalindrome(word) {
  const arrValues = word.split(''); 
  // split('') divides string into ordered list, 
  // puts substrings into an array, and returns it
  const reverseArrValues = arrValues.reverse(); 
  const reverseWord = reverseArrValues.join(''); 
  //  join('') method creates + returns new string by 
  //  concatenating all array elements
  if(word === reverseWord) {
    return true;
  } else {
    return false;
  }
}

/* 
Make a function that returns true if string is palindrome
and false if not a palindrome.  

convert string to an array
convert array to a string
convert array BACK to string

if original string === new string, return true
  else return false

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

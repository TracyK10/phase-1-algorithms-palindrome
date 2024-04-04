function isPalindrome(word) {
  // Write your algorithm here
  word.toLowerCase()
  let initialWord = word.split('').join('')
  let newWord = word.split('').reverse().join('')
  return newWord === initialWord
}

/* 
  Add your pseudocode here
  take the word and split it
  reverse the letters and join them
  if the initial word and the reversed word are equal:
    the word is a palindrome
*/

/*
  Add written explanation of your solution 
  The program will first split the inputted word into an array of characters using the .split method in JavaScript. 
  This allows us to manipulate each character and reverse the characters using the .reverse method. We then join the characters using the .join method.
  If the new word and the initial word are the same, then the word is a palindrome. Otherwise, it's not.
 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  // I expect racecar will return true
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  // I expect robot will return false
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

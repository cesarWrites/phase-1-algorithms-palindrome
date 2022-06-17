function isPalindrome(word) {
  // Write your algorithm here
  const len = word.length;


  for (let i = 0; i < len / 2; i++) {

      if (word[i] === word[len - 1 - i]) {
          return true;
      }else{
          return false;
      }
  }
  
}
console.log(isPalindrome('abba'))

/* 
  Add your pseudocode here
  input the string to test
  get length of teh string
  if the new string is read similar to the original
  then plindrome is true
  else
  the word is not a palindrome

*/

/*
  Add written explanation of your solution here
  The code checks the length of the
   string and compared it to the new string
   if the last and first characters are teh same returns a plaindrome 
   else returns not palindrome
  I
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

}

module.exports = isPalindrome;

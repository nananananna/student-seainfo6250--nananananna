"use strict";
/* DO NOT MODIFY EXCEPT WHERE ALLOWED */
module.exports = compare; // DO NOT MODIFY - USED FOR TESTING

function compare( word, guess ) {  // DO NOT MODIFY

/* YOU MAY MODIFY THE LINES BELOW */
  
  const lowerWord1 = word.toLowerCase();
  const lowerWord2 = guess.toLowerCase();

  const letterCount = {};

  for (const letter of lowerWord1) {
      letterCount[letter] = (letterCount[letter] || 0) + 1;
  }

  let commonCount = 0;

  for (const letter of lowerWord2) {
      if (letterCount[letter] > 0) {
          commonCount++;
          letterCount[letter]--;
      }
  }

  return commonCount;
}

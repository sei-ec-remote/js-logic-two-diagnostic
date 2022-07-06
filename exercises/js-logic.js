/*
=============== JavaScript Logic Challenge II ==================
GOAL: Read each question and write code to complete each task
      given. Do not change starter code or function names.

TEST: To test run the commands `npm run test` in your terminal
      at the root of this directory.(js-logic-two-diagnostic)
*/

/*
Question 1

Write a function that takes in an array of 10 numbers and returns those numbers in the form of a phone number. The return value should be a string.

Ex: If the array that was passed in was [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ] the return value should be '(012) 456-7890'. There should be a space between the area code and the start of the phone number.
*/
const createPhoneNumber = () => {
      const areaCode = numbers.slice(0, 3).join('')
      const secondThree = numbers.slice(3, 6).join('')
      const lastThree = numbers.slice(6, 10).join('')
      return `(${areaCode}) ${secondThree}-${lastThree}`

}

/*
Question 2

Write a function that takes in a string and return the number of dupclicate values in that string.

Ex: If the string that was passed in was 'abc' the return value should be 0, also if 'aabbcc' is passed in 3 is returned. Also be aware that 'B' and 'b' are not equvalent. This is true for all capitalized values and there lower case counter part. 
*/
const countTheDups = () => {

}

/*
Question 3

Write a function that takes in a string and return true or false if the string contains the same amount of 'x's and 'o's. You can assume all strings are passed in are lower case. 

Ex: If the string that was passed in was 'abc' the return value should be false, also if 'xoxo' is passed in true is returned. 
*/
const boolsXOs = () => {

}

/* !!! DO NOT MODIFY ANYTHING BELOW HERE !!! */
module.exports = {
    createPhoneNumber,
    countTheDups,
    boolsXOs
}
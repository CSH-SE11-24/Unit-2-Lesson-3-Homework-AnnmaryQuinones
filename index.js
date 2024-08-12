// In this homework, you will be building a "hangman" game. 
// Create a new variable and put a random word in
let hangman = "money"

// Create a new variable called attempts and set it to 0
let attempts = 0

// Prompt the user to guess a letter
 let letter = prompt("Guess a Letter:")

// Write an if statement that uses the includes() method to check if the letter is in the word -- Google the syntax!
// Tell the user if their letter is in the word
if (hangman.includes(letter)){
  console.log("That letter is in the word!!")
}else{
  console.log("Nope your wrong!")
}

// Prompt the user to guess the word 
let guessWord = prompt("Guess the Word:")

// Increase attempts by 1
attempts++
  
// Write an if/else statement that checks if the user guess is equal to your word and tells the user
if (guessWord == hangman){
  console.log("YES, the word is money!!")
}


// Now we will combine this input a while loop!
// Create a while loop that runs while the user guess is not equal to the word
// In the while loop, copy the prompt and if/else check for a letter
while (attempts <= 10){
  console.log(attempts)
attempts++
  if (hangman.includes(letter)) {
  console.log("Good Job, That is correct!")
}
else{
  console.log("Incorrect, That isn't a correct letter!")
}
  if (hangman === guessWord){
  console.log("Congratulations, That is the word! It took you " + attempts + "attempts. ")
}

}


// In the while loop, copy the prompt and if/else check for the word


// In the while loop, copy the attempts increment



// After the while loop, print "It took (attempts) attempts" 


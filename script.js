var userChoice = prompt("heads or tails?")

var randomNumber = Math.round(Math.random())
console.log(randomNumber)

var computerChoice;

if(randomNumber == 0){
    computerChoice = "heads";
} else{
    computerChoice = "tails";
}

if(userChoice == computerChoice){
    alert("You guessed right! The coin landed on" + userChoice )
} else{
    alert("sorry, the coin flip landed on" + computerChoice)
}

var birthYear = prompt("What year were you born?")
var currentYear = new Date().getFullYear()
var age = currentYear-birthYear

if (age > 21){
    alert("you are old enough to drink in the US")
} else if(age == 21){
    alert("You are old enough to drink in the US...barely")
} else if (age < 21){
    alert("Sorry, you are not old enough to drink in the US")
}

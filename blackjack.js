let player = {
    name : "Mervin",
    credits : 145,
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = " "
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.credits

function getRandomcard(){
    let randomNumber =  Math.floor(Math.random()*13) + 1
    if ( randomNumber > 10){
        return 10
    }
    else if ( randomNumber === 1){
        return 11
    }
    else{ 
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomcard()
    let secondCard = getRandomcard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame(){

    sumEl.textContent = "Sum:" + sum
    cardEl.textContent = "Cards:" 

    for(i = 0 ;i < cards.length; i++ ){
        cardEl.textContent += cards[i] + " "
    }

    if (sum < 20){
    message="do you wanna draw another card"
    }

    else if (sum === 21){
    message="you got black jack"
    hasBlackJack = true
    }

    else {
    message="your out of the game"
    isAlive = false
    }
    
    messageEl.textContent  = message
}

function newGame(){
    if( isAlive === true && hasBlackJack === false){
        let newCard = getRandomcard()
        sum += newCard
        cards.push(newCard) 
        renderGame()
    }
}
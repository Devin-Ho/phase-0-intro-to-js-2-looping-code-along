// Code your solutions in this file
const cardNames = (["Guadalupe", "Ollie", "Aki"], "surprise");

function writeCards(cardNames, event) {
    let message = []
    for (let i = 0; i < cardNames.length; i++) {
    message.push(`Thank you, ${cardNames[i]}, for the wonderful ${event} gift!`);
  }

  return message;
}

function countDown (){
    let count = 10;
    while (count >= 0) {
        console.log(count--);
    }
}
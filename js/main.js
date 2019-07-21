// Since pre work not deleting code and keeping notes
// !! or && and ! not

console.log("Up and Running!")


// var cardOne = "Queen";
// var cardTwo = "King";
// var cardThree = "Queen";
// var cardFour = "King";


//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardTwo);

var cards = [
    {
    rank: 'King',
    suit: 'Diamonds',
    cardImage: "queen-of-diamonds.png"
    },
    {
    rank: 'Queen',
    suit: 'Hearts',
    cardImage: "king-of-diamonds.png",
    },
    {
    rank: 'King',
    suit: 'Diamonds',
    cardImage: "queen-of-diamonds.png",
    },
    rank: 'King',
    suit: 'Diamonds',
    cardImage: "queen-of-diamonds.png",
    ];

var cardsInPlay = [];

function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
      } else {
        console.log("Sorry, try again.");
      }
}

flipCard(checkForMatch(1)); 
// remember to study mistakes
//var cardOne = cards[0];

 //   cardsInPlay.push('cardOne');

//var cardTwo = cards[2];
//    cardsInPlay.push('cardTwo');
    
 //   if (cardsInPlay.length) === 2; {
 //       alert("You found a Match") {
 //       }
//    if else (cardsInPlay[0] === cardsInPlay[2]); {
//        alert("Sorry Try Again!");
//    }
//if (cardsInPlay.length[] <=== 2) {
//    alert("You found a Match"); {
//    } else {
//        alert("Sorry Try Again!");
//    }
//};
//
//

var cardID = []; 

function flipCard(cardID).rank {
    console.log("User flipped" + cards[cardID]); 

    var cardsInPlay = [];

    var cardOne = cards[0];

    cardsInPlay.push('cardOne');

    var cardTwo = cards[2];
    
    if (cardsInPlay.length[] % 2) {
        alert("You found a Match")
    } else {
        alert("Sorry try Again!")
    };
    
    cardsInPlay.push(cards["Queen", "King"];

    flipCard(0);
    flipCard(2);

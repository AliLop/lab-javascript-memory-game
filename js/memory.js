class MemoryGame {
  constructor(cards){
    this.cards = cards;  // array we send as const
    // add the rest of the class properties here
    this.pickedCards = []; // array to store cards form comparing 
    this.pairsClicked = 0; // to add every time a user choose 
    this.pairsGuessed = 0; // to add every time a user guess a pair
  }
  shuffleCards(cards) {
    if (!cards) {   // if tehre is no array
      return undefined
    } else {
      // Fisher–Yates Shuffle in JS
      let mixed = [];
      let n = cards.length, i;
      
      while(n) {  // While there remain elements to shuffle…
        i = Math.floor(Math.random() * n--); // Pick a remaining element…
        mixed.push(cards[i]); // And move it to the new array.
      }

      //console.log(mixed);
      return this.cards = mixed; // should return the shuffled (mixed) array of cards
    
    }
  } 
  
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    
    if (card1.getAttribute('data-card-name') === card2.getAttribute('data-card-name')) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }
  isFinished() {
    //should return false at the beginning of the game
    // should return false if there's still some pairs to be guessed
    if (this.pairsGuessed === 0 || this.pairsGuessed < this.cards.length / 2) {
        return false; 
    } else if (this.pairsGuessed === this.cards.length / 2) {
        return true;
    //should return true if all pairs are guessed 
    // actually it should consider it depending on th length of teh array 
    //(test considers this at #8 but it should be at 12 since tehre are 24 cards in total)
    }
  }
}
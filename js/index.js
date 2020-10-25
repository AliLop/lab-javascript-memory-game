const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
    //Repeat
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];
//console.log(cards);
const memoryGame = new MemoryGame(cards);

window.addEventListener('load', event => {

  memoryGame.shuffleCards(cards);

  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });
  // (e)   function(e) {  }

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;
    
  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      // NOT ADDING THE TURNED 
      /*if (!card.classList.contains('turned')) {
        card.classList.add('turned');
      } else {
         card.classList.remove('turned');
      }  // 1st click adds turned and turns the card 2 twice
      // 2nd click does not work */
      
      card.classList.add('turned'); // turns card twice

      card.querySelectorAll('.card div').forEach(div => {
         div.classList.toggle('front');
         div.classList.toggle('back');
      });

      console.log(`Card clicked: ${card}`);
      
       // NOT LIMITTING TO A MAX OF 2 CARDS FLIPPED 
       //for (let i = 0; memoryGame.pickedCards.length < 2; i++) { NOt WORKING }
      memoryGame.pickedCards.push(card);               

      if (memoryGame.pickedCards.length === 2) {
      const card1 = memoryGame.pickedCards[0];
      const card2 = memoryGame.pickedCards[1];
      //card1.classList.add('turned');
      //card2.classList.add('turned');
      //console.log(memoryGame.pickedCards);

        if(memoryGame.checkIfPair(card1, card2)) {
         
          document.getElementById('pairs-guessed').innerHTML = memoryGame.pairsGuessed;
          console.log(memoryGame.pairsGuessed);
          
          card1.classList.add('blocked');
          card2.classList.add('blocked');

          memoryGame.pickedCards = [];

          memoryGame.isFinished();

        } else {
          //document.getElementById('pairs-clicked').innerHTML = memoryGame.pairsClicked;
          //console.log(memoryGame.pairsClicked);

          setTimeout(() => {
            memoryGame.pickedCards.forEach(card => { 
              card.querySelectorAll('.card div').forEach(div => {
                div.classList.toggle('front');
                div.classList.toggle('back');
              });
            });
            card1.classList.remove('turned');
            card2.classList.remove('turned');
            memoryGame.pickedCards = [];
          }, 1000) 
        };
        console.log(memoryGame.pickedCards); 

        
        document.getElementById('pairs-clicked').innerHTML = memoryGame.pairsClicked;
        console.log(memoryGame.pairsClicked);
      }
      
      if (memoryGame.isFinished()) {
        setTimeout(() => {
          window.alert('YOU WON!')
        }, 1000)
      }
      
    });


  });
});
//console.log(memoryGame.shuffleCards(cards));
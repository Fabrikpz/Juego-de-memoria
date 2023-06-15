let cartas = document.querySelectorAll(".elem");
let types = ['type1', 'type1', 'type2', 'type2', 'type3', 'type3', 'type4', 'type4', 'type5', 'type5', 'type6', 'type6', 'type7', 'type7', 'type8', 'type8'];
types = shuffleArray(types);

let clickedCards = [];

cartas.forEach((carta, index) => {
  carta.classList.add(types[index]);
  carta.addEventListener("click", () => {
    if (!carta.classList.contains("matched")) {
      carta.classList.add("flipped");

      clickedCards.push(carta);

      if (clickedCards.length === 2) {
        const type1 = clickedCards[0].classList[1];
        const type2 = clickedCards[1].classList[1];

        if (type1 === type2 && clickedCards[0] !== clickedCards[1]) {
          console.log("Two cards with the same type clicked!");

          // Add your logic here for when two cards with the same type are clicked

          clickedCards.forEach((clickedCard) => {
            clickedCard.classList.add("matched");
          });

        } else {
          console.log("Two different cards clicked!");

          // Add your logic here for when two different cards are clicked

          setTimeout(() => {
            clickedCards.forEach((clickedCard) => {
              clickedCard.classList.remove("flipped");
            });
          }, 1000);
        }

        clickedCards = [];
      }
    }
  });
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


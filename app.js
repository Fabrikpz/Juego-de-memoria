let cartas = document.querySelectorAll(".elem");
let types = ['type1', 'type1', 'type2', 'type2', 'type3', 'type3', 'type4', 'type4', 'type5', 'type5', 'type6', 'type6', 'type7', 'type7', 'type8', 'type8'];
let puntos1 = document.getElementById("score1");
let puntos2 = document.getElementById("score2");
let score1 = 0;
let score2 = 0;
puntos1.textContent = score1;
puntos2.textContent = score2;
let jugador1 = 0;
let jugador2 = 1;
let clickedCards = [];

shuffleArray(types);
assignTypesToCards();

cartas.forEach((carta, index) => {
  carta.addEventListener("click", () => {
    if (!carta.classList.contains("matched")) {
      carta.classList.add("flipped");
      clickedCards.push(carta);

      if (clickedCards.length === 2) {
        const type1 = clickedCards[0].classList[1];
        const type2 = clickedCards[1].classList[1];

        // Turno del jugador 1
        if (jugador1 % 2 === 0) {
          if (type1 === type2 && clickedCards[0] !== clickedCards[1]) {
            console.log("Two cards with the same type clicked! JUGADOR 1");

            score1 += 10;
            puntos1.textContent = score1; // Actualiza el puntaje del jugador 1 en el elemento HTML
            console.log(score1);
            clickedCards.forEach((clickedCard) => {
              clickedCard.classList.add("matched");
            });
          } else {
            console.log("Two different cards clicked! JUGADOR 1");

            setTimeout(() => {
              clickedCards.forEach((clickedCard) => {
                clickedCard.classList.remove("flipped");
              });
            }, 1000);
          }

          jugador1++;
          jugador2++;
        }
        // Turno del jugador 2
        else if(jugador2 % 2 === 0){
          if (type1 === type2 && clickedCards[0] !== clickedCards[1]) {
            console.log("Two cards with the same type clicked! JUGADOR 2");

            score2 += 10;
            puntos2.textContent = score2; // Actualiza el puntaje del jugador 2 en el elemento HTML
            console.log(score2);
            clickedCards.forEach((clickedCard) => {
              clickedCard.classList.add("matched");
            });
          } else {
            console.log("Two different cards clicked! JUGADOR 2");

            setTimeout(() => {
              clickedCards.forEach((clickedCard) => {
                clickedCard.classList.remove("flipped");
              });
            }, 1000);
          }

          jugador2++;
          jugador1++;
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
}

function assignTypesToCards() {
  cartas.forEach((carta, index) => {
    carta.classList.add(types[index]);
  });
}
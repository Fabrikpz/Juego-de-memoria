let cartas = document.querySelectorAll(".elem");
//let types = ['type1', 'type1', 'type2', 'type2', 'type3', 'type3', 'type4', 'type4', 'type5', 'type5', 'type6', 'type6', 'type7', 'type7', 'type8', 'type8'];
let puntos1 = document.getElementById("score1");
let puntos2 = document.getElementById("score2");
let score1 = 0;
let score2 = 0;
puntos1.textContent = score1;
puntos2.textContent = score2;
let turnoJugador1 = 0;
let turnoJugador2 = 1;
let clickedCards = [];

const Carta = import('../models/myModel.js');

//shuffleArray(types);
assignTypesToCards();


cartas.forEach((carta, index) => {
  carta.addEventListener("click", () => {
    if (!carta.classList.contains("matched")) {
      carta.classList.add("flipped");
      clickedCards.push(carta);

      if (clickedCards.length === 2) { 
        const type1 = clickedCards[0].classList[1];
        const type2 = clickedCards[1].classList[1];

        //turno del jugador 1
        if (turnoJugador1 % 2 === 0) {
          if (type1 === type2 && clickedCards[0] !== clickedCards[1]) {
            console.log("Two cards with the same type clicked! JUGADOR 1");

            score1 += 10;
            puntos1.textContent = score1;
            console.log(score1);
            clickedCards.forEach((clickedCard) => {
              clickedCard.classList.add("matched");
            });
          } else {
            console.log("Two different cards clicked! JUGADOR 1");
            //tiempo de espera antes de cambiar el estado *flipped*
            setTimeout(() => {
              clickedCards.forEach((clickedCard) => {
                clickedCard.classList.remove("flipped");
              });
            }, 1000);
          }

          turnoJugador1++;
          turnoJugador2++;
        }
        //turno del jugador 2
        else if (turnoJugador2 % 2 === 0) {
          if (type1 === type2 && clickedCards[0] !== clickedCards[1]) {
            console.log("Two cards with the same type clicked! JUGADOR 2");

            score2 += 10;
            puntos2.textContent = score2;
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

          turnoJugador2++;
          turnoJugador1++;
        }

        clickedCards = [];//vacia las cartas clickeadas
        checkWinner(); //verificar si hay un ganador después de cada turno
      }
    }
  });
});

//para que las cartas cambien de tipo
//esto no se necesitaria idealmente si funcionara el assign TypesToCards
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

//nose hermano no funbca
async function assignTypesToCards() {
  try {
    const cartasFromDatabase = await Carta.find({}, 'tipo').limit(16);

    const shuffledTypes = shuffleArray(types.slice(0, cartasFromDatabase.length));

    cartas.forEach((carta, index) => {
      const tipo = cartasFromDatabase[index].tipo;
      const classToAdd = shuffledTypes[tipo];

      carta.classList.add(classToAdd);
    });
  } catch (error) {
    console.error('Error retrieving cartas from the database:', error);
  }
}


function checkWinner() {
  const matchedCards = document.querySelectorAll(".matched");
  if (matchedCards.length === cartas.length) {
    if (score1 > score2) {
      console.log("¡Jugador 1 gana con el puntaje más alto!");
    } else if (score2 > score1) {
      console.log("¡Jugador 2 gana con el puntaje más alto!");
    } else {
      console.log("¡Es un empate!");
    }
  }
}

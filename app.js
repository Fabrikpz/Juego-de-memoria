//import 'animate.css';

let cartas = document.querySelectorAll(".elem");
let puntos1 = document.getElementById("score1");
let puntos2 = document.getElementById("score2");
let score1 = 0;
let score2 = 0;
puntos1.textContent = score1;
puntos2.textContent = score2;
let turnoJugador1 = 0;
let turnoJugador2 = 1;
let clickedCards = [];

assignTypesToCards();

cartas.forEach((carta, index) => {
  carta.addEventListener("click", () => {
    carta.classList.add('animate_animated', 'animate_flipInY');
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
            //tiempo de espera antes de cambiar el estado flipped
            setTimeout(() => {
              clickedCards.forEach((clickedCard) => {
                clickedCard.classList.remove("flipped");
              });
            }, 1000);
            setTimeout(() => {
              carta.classList.remove('animate_animated', 'animate_flipInY');
            }, 1000); // Adjust the duration to match the animation time
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
            setTimeout(() => {
              carta.classList.remove('animate_animated', 'animate_flipInY');
            }, 1000); // Adjust the duration to match the animation time
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

function assignTypesToCards() {
  const tipos = {};

  cartas.forEach((carta, index) => {
    const ruta = carta.querySelector("img").getAttribute("src");

    if (tipos[ruta] === undefined) {
      tipos[ruta] = `tipo${Object.keys(tipos).length + 1}`;
    }

    const tipo = tipos[ruta];
    const classToAdd = `tipo${tipo.slice(4)}`;

    carta.classList.add(classToAdd);
  });
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
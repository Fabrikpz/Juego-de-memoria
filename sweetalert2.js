async function mostrarAlerta() {
    Swal.fire({
        title: 'Ingresa los nombres de los jugadores',
        html:
            '<input id="player1Input" class="swal2-input" placeholder="Jugador 1">' +
            '<input id="player2Input" class="swal2-input" placeholder="Jugador 2">',
        focusConfirm: false, //el mouse no se enfoca en el boton de salida (boton "OK")
        //actualiza el valor de player1 y player2
        preConfirm: () => {
            const player1 = document.getElementById('player1Input').value;
            const player2 = document.getElementById('player2Input').value;

            document.getElementById('player1').textContent = player1;
            document.getElementById('player2').textContent = player2;
        }
    });
}
async function CambiarFoto(playerId) {
    const { value: file } = await Swal.fire({
      title: 'Seleccionar imagen',
      input: 'file',
      inputAttributes: {
        'accept': 'image/*',
        'aria-label': 'Selecciona tu imagen de perfil'
      }
    });
    
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        Swal.fire({
          title: 'Tu imagen cargada',
          imageUrl: e.target.result,
          imageAlt: 'La imagen cargada'
        });
        
        const playerElement = document.getElementById(playerId);
        playerElement.innerHTML = `<img src="${e.target.result}" alt="Perfil">`;
      };
      reader.readAsDataURL(file);
    }
  }
  
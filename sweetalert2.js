async function mostrarAlerta() {
    Swal.fire({
        title: 'Ingresa los nombres de los jugadores',
        html:
            '<input id="player1Input" class="swal2-input" placeholder="Jugador 1">' +
            '<input id="player2Input" class="swal2-input" placeholder="Jugador 2">',
        focusConfirm: false, //el mouse no se enfoca en el boton de salida (boton "OK")
        showCancelButton: true,
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

            const profilePicElements = document.getElementsByClassName(`profilePic${playerId}`);
            Array.from(profilePicElements).forEach((element) => {
                element.innerHTML = `<img src="${e.target.result}" alt="Perfil" style="width: 50px; height: 50px; border-radius: 2px;">`;
            });
        };
        reader.readAsDataURL(file);
    }
}

//let me pop up!!
const letMePopUp = async () => {
    const ipAPI = '//api.ipify.org?format=json';

    const inputValue = fetch(ipAPI)
        .then(response => response.json())
        .then(data => data.ip);

    const loadingPopup = Swal.fire({
        title: 'Just wait...',
        allowOutsideClick: false,
        showConfirmButton: false,
        onBeforeOpen: () => {
            Swal.showLoading();
        }
    });

    // Espera 2 segundos simulando una operación asincrónica
    await new Promise(resolve => setTimeout(resolve, 2000));

    loadingPopup.close();

    const { value: ipAddress } = await Swal.fire({
        title: 'CHAUUUUUU DOXEADASO',
        input: 'text',
        inputLabel: 'Your IP address is:',
        inputValue: inputValue,
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return 'You need to write something!';
            }
        }
    });

    if (ipAddress) {
        Swal.fire(`Your IP address is ${ipAddress}`);
    }
};
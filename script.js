document.querySelector('.busca').addEventListener('submit', (event) => {
    event.preventDefault();

    let input = document.querySelector('#searchInput').value

    if (input !== '') {
        showWarning('Carregando...');

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=22e8c801695845723f0140ac6eda5df8`;


    }
});

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}
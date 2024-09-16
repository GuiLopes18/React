let currentLight = 'vermelho';

function changeLight() {

    document.getElementById('vermelho').style.backgroundColor = '#444';
    document.getElementById('amarelo').style.backgroundColor = '#444';
    document.getElementById('verde').style.backgroundColor = '#444';

    if (currentLight === 'vermelho') {
        setTimeout(() => {
            document.getElementById('amarelo').style.backgroundColor = 'yellow';
            currentLight = 'amarelo';
        }, 1000); 
    } else if (currentLight === 'amarelo') {
        setTimeout(() => {
            document.getElementById('verde').style.backgroundColor = 'green';
            currentLight = 'verde';
        }, 1000); 
    } else {
        setTimeout(() => {
            document.getElementById('vermelho').style.backgroundColor = 'red';
            currentLight = 'vermelho';
        }, 1000); 
    }
}

setInterval(changeLight, 1000);

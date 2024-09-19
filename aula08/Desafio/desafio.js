function moverElevador(andar) {
    const elevador = document.getElementById('elevador');
    let posicao;

    
    if (andar === 3) {
        posicao = '66.66%'; 
    } else if (andar === 2) {
        posicao = '33.33%'; 
    } else {
        posicao = '0'; 
    }


    elevador.style.bottom = posicao;
}

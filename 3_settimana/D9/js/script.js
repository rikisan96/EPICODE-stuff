
const creaTabellone = function (){
    const tabella = document.getElementById("board")
    
    for (let i = 0; i < 90; i++) {
        numeriDiv = []
        const numeriDiv = document.createElement('div');
        //crea 90 div
        numeriDiv.classList.add("cell");
        numeriDiv[i]= Math.ceil(Math.random()*90);
        tabella.appendChild(numeriDiv);

    }

}

function estraiNumero(){
    const numeroEstratto = Math.ceil(Math.random()*90)
    cellaCorrispondente.classList.add('evidenziata')
    const cellaCorrispondente = document.querySelector(`#board .cell:nth-child($(numeroEstratto))`) 
}


creaTabellone()

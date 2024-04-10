// una funzione che genera la lista con il nuovo task
//      agganciarsi nell'html
//      utilizzare template literals per stampare direttamente anche dell'html
//      inputField.value
//      font-awesome -> <i class="far fa-trash-alt"></i>

// una funzione che cambia la classe (aggiunge sbarrato)
//      agganciarsi nell'html
//      for 
//      classList.toggle -> text-decoration:line.through (css)

// una funzione che elimina il task
//      agganciarsi nell'html
//      for
//      remove
window.onload = function(event) {

    function creaNuovoTask() {
        event.preventDefault();
        
        let valoreTxt = document.getElementById('taskInput').value;
        let newNodoLista = document.createElement("li");
        let listaTasks = document.getElementById('listTasks');
        let newNodoTesto = document.createTextNode(valoreTxt);
            
        newNodoLista.appendChild(valoreTxt); //addo il testo all'elemento li
        listaTasks.appendChild(newNodoLista);
    }

    function eliminaTask() {
        // Codice per eliminare un task
    }

    function taskBarrato() {
        // Codice per barrare un task
    }

    // Chiamata alla funzione creaNuovoTask() dopo che la pagina è stata completamente caricata
}

document.getElementById("formInput").addEventListener("submit",creaNuovoTask());

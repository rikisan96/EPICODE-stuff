// // una funzione che genera la lista con il nuovo task
// //      agganciarsi nell'html
// //      utilizzare template literals per stampare direttamente anche dell'html
// //      inputField.value
// //      font-awesome -> <i class="far fa-trash-alt"></i>

// // una funzione che cambia la classe (aggiunge sbarrato)
// //      agganciarsi nell'html
// //      for 
// //      classList.toggle -> text-decoration:line.through (css)

// // una funzione che elimina il task
// //      agganciarsi nell'html
// //      for
// //      remove
// const handleSubmit = function (e) {
//     function creaNuovoTask(e) {
//         e.preventDefault();
//         elementoSubmit = document.getElementById("formInput");
//         elementoTextbox = document.getElementById("txtInput");
//         elementoLISTA = document.getElementById("listTasks");
//         //acchiappo tutti gli elementi
//         // assegno il contenuto di testo alla variabile contenutoTextbox
//         contenutoTextbox = document.getElementById("txtInput").value;
//         //CREA ELEMENTO LI, 
//         nuovoLI = document.createElement("li").appendChild(elementoLISTA);
//         //prendi l'elemento UL, aggiungi un LI e ficca dentro il contenutoTXT
//         nuovoLI.textContent = contenutoTextbox;

//     } 
//     function taskBarrato(e) {
//         // Codice per barrare un task
//     }
//     function eliminaTask(e) {
//         // Codice per eliminare un task
//     }
// }

window.onload = function () {
    let form = document.querySelector('form')
    form.addEventListener('submit', handleSubmit)
}
    // Chiamata alla funzione creaNuovoTask() dopo che la pagina è stata completamente caricata

const handleSubmit = function (e) {
    e.preventDefault();
    
    // Ottieni il valore inserito nella casella di testo
    const taskInputValue = document.getElementById("txtInput").value;
    // Creo un nuovo elemento <li>
    const newTask = document.createElement("li");
    // Assegna il testo inserito come contenuto dell'elemento <li>
    newTask.textContent = taskInputValue;
    // Aggiungi il nuovo elemento <li> alla lista <ul>
    document.getElementById("listTasks").appendChild(newTask);

    document.getElementById("txtInput").value = '';
}

const handleTaskBarrato = function (e) {
    e.target.classList.toggle("barrato");
}
const handleEliminaTask = function (e) {
    e.target.parentNode.remove();
}

window.onload = function () {
    // Aggiungi un listener per l'evento submit al form
    const form = document.getElementById("formInput");
    form.addEventListener("submit", handleSubmit);

    // Aggiungi un listener per l'evento click per barrare un task
    const listaTasks = document.getElementById("listTasks");
    listaTasks.addEventListener("click", handleTaskBarrato);

};
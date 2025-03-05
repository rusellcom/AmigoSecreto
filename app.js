// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// se declara dos variables una de tipo array y la otra tipo let, una guarda los nombres de los amigos y la
// otra se utiliza para la comunicacion con el HTML
const amigos = [];
let elemento = "";

// Esta funcion se encargar de agregar los amigos al array.
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    // limpia el input 
    document.getElementById('amigo').value = "";
    // antes de agregar un amigo verifica que el usuario haya escrito algo o lo agrega al array y lo muestra
    amigo != "" ? amigos.push(amigo) && mostrarAmigos(amigos): alert("Por favor, inserte un nombre.");
    elemento = "";
}

// muestra en la pagina los nombres de los amigos 
function mostrarAmigos(amigos){
    
    for (let i = 0; i < amigos.length; i++) {
        elemento.innerHTML = "";
        const li = document.createElement("li");
        elemento = document.getElementById('listaAmigos').appendChild(li);
        elemento.innerHTML = amigos[i]; 
    }
    Limpiarresultado();
}

// limpia el mensaje del amigo seleccionado al comenzar otro juego 
function Limpiarresultado(params) {
    const lim = document.getElementById("resultado");
    lim.innerHTML = "";
}

// limpia los nombre de los amigos mostrados en la pagina
function limpiarnombres() {
    const lim = document.getElementById("listaAmigos");
    lim.innerHTML = "";
}

// arroja el amigo seleccionado en la panatalla 
function sortearAmigo(){
    
    if (amigos.length == 0) {
        alert("Por favor, agregar al menos 2 amigos")
        return; 
    }else{
        const amigoSeleccionado = amigos[Math.floor(Math.random()*amigos.length)];
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `${amigoSeleccionado} ¡ha sido seleccionado como el amigo secreto!`;
        limpiarnombres();
    }
    
}





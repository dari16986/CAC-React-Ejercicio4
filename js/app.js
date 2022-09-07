class Video {
    constructor(fuente, resolucion, extension) {
        this.fuente = fuente;
        this.resolucion = resolucion;
        this.extension = extension;
    }
}

class Audio {
    constructor(fuente, extension) {
        this.fuente = fuente;
        this.extension = extension;
    }
}

class Boton {
    constructor(ancho, largo, backgroundColor, textColor) {
        this.ancho = ancho;
        this.largo = largo;
        this.backgroundColor = backgroundColor;
        this.textColor = textColor;
    }
}

class ListaDeElementos {
    constructor(cantidadElementos, tipo) {
        this.cantidadElementos = cantidadElementos;
        this.tipo = tipo;
    }
}

// ******** Creacion de instancias ****************

let myVideo = new Video("c:/videos/031", "640x480", ".mp3");
let myAudio = new Audio("c:/audios/012", ".mp3");
let myBoton = new Boton(20, 10, "gris", "negro");
let myListaDeElementos = new ListaDeElementos(5, "int");


const parrafo = document.getElementById("valores");

parrafo.innerHTML = `<strong>Video:</strong>\n${mostrarPropiedades(myVideo)}
<strong>Audio:</strong>:\n${mostrarPropiedades(myAudio)}
<strong>Boton:</strong>:\n${mostrarPropiedades(myBoton)}
<strong>Lista De Elementos:</strong>:\n${mostrarPropiedades(myListaDeElementos)}`;


//*************** */ Declaracion de Funciones ******************

function mostrarPropiedades(objeto) {
    result = '';
    for (let clave in objeto) result += `${clave}: ${objeto[clave]}\n`
    return result;
}



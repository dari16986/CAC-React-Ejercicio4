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
         this.cantidadElementos  = cantidadElementos;
         this.tipo = tipo;
     } 
}


let myVideo = new Video("c:/videos/031","640x480",".mp3");
let myAudio = new Audio("c:/audios/012",".mp3");
let myBoton = new Boton(20,10,"gris", "negro");
let myListaDeElementos = new ListaDeElementos(5,"int");

console.log(myVideo);
console.log(myAudio);
console.log(myBoton);
console.log(myListaDeElementos);


const parrafo = document.getElementById("valores");

var result = ``
for (var i in myVideo) {
    if (myVideo.hasOwnProperty(i)) {
      result += `<p>myVideo.${i} = ${myVideo[i]}</p>`;
    }
  }
  parrafo.innerHTML = result;  

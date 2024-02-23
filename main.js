import { SZEMELYLISTA } from "./adat.js";
import { listaKiir, listaOsszeallit, kartyaOsszeallit } from "./fuggvenyek.js";

console.log(SZEMELYLISTA)

/* Írd ki a második ember nevét és telefonszámát */

console.log(`${SZEMELYLISTA[1.].nev} tel: ${SZEMELYLISTA[1].tel} `)

listaKiir(SZEMELYLISTA)

listaOsszeallit(SZEMELYLISTA)

kartyaOsszeallit(SZEMELYLISTA)

/* HTML elemek elérése -  DOM elérése */
/* megfogom a div#lista elemet */
/* ugyan az */    //const LISTAELEM = document.getElementById("lista")
/* ugyan az */    const LISTAELEM=document.querySelector("#lista")
console.log(LISTAELEM)
/* Módosítom a tartalmát */
LISTAELEM.innerHTML="<h3>Címlista</h3>"
LISTAELEM.innerHTML+= listaOsszeallit(SZEMELYLISTA)
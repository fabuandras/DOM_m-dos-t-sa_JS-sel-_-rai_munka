export function listaKiir(LISTA) {
    for (let index = 0; index < LISTA.length; index++) {
        console.log(`${LISTA[index].nev} tel: ${LISTA[index].tel} `)
    }
}

export function listaOsszeallit(LISTA) {
    let txt = "<ul>"
    for (let index = 0; index < LISTA.length; index++) {
        text += `<li>${LISTA[index].nev} tel: ${LISTA[index].tel}</li>`
    }
    txt = "</ul>"
    console.log(txt)
    return txt
}

export function kartyaOsszeallit(LISTA) {
    let txt = ""
    for (let index = 0; index < LISTA.length; index++) {
        txt += "<div class='szemely'>"
        txt += `<h3>${LISTA[index].nev} </h3>`
        txt += `<p>${LISTA[index].kor} </p>`
        txt += `<p>${LISTA[index].tel} </p>`
        txt += `<p>${LISTA[index].barat} </p>`
        txt += "</div>"
    }
    console.log(txt)
    return txt
}
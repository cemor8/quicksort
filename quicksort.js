"use strict";


const lista_original = [-7,4,6,9,12,56,9,3,222,-11];
function quickSort(lista) {


    let pivote_posicion=calculapivote(lista)
    let pivote = lista[pivote_posicion];
    let pivotes = lista[pivote_posicion];
    let mayores = [];
    let menores = [];

    for (let i = 0; i < lista.length; i++) {
        if (i == pivote_posicion) {
            continue
        } else if (lista[i] <= pivote) {
            menores.push(lista[i])
        } else if (lista[i] > pivote) {
            mayores.push(lista[i])
        }
    }
    menores=divideLista(menores);
    mayores=divideLista(mayores);

    console.log(pivote)
    console.log(menores," menores", mayores, " mayores")
    menores.push(pivotes)
    
    let lista_final=menores.concat(mayores);
    if(lista_final.length!=lista_original){
        return lista_final
    }

    console.log(lista_final)
    
}


function calculapivote(lista){
    let posicion1 = 0;
    let posicion2 = Math.round(lista.length / 2);
    let posicion3 = lista.length - 1;
    let pivote_posicion = undefined;

    if (lista[posicion1] >= lista[posicion2] && lista[posicion1] <= lista[posicion3] || lista[posicion1] >= lista[posicion3] && lista[posicion1] <= lista[posicion2]) {
        pivote_posicion = posicion1;

    } else {
        if (lista[posicion2] >= lista[posicion1] && lista[posicion2] <= lista[posicion3] || lista[posicion2] >= lista[posicion3] && lista[posicion2] <= lista[posicion1]) {
            pivote_posicion = posicion2;
        } else {
            pivote_posicion = posicion3
        }

    }
    return pivote_posicion;
}

function divideLista(lista){
    if(lista.length>2){
        return quickSort(lista);
        
    }else if(lista.length>1){
        if(lista[0]>lista[1]){
            let x=lista[0]
            lista[0]=lista[1];
            lista[1]=x;
            return lista
        }
    }
    return lista
}

console.log(quickSort(lista_original))


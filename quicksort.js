"use strict";
const lista_original = [-7,4,6,9,12,56,9,3,222,-11];
/**
 * Funcion que recibe una lista de numeros y la ordena siguiendo el
 * algoritmo quicksor. Primero encuentra un pivote para ordenar segun el,
 * luego añade los numeros a la lista de menores si es menor o igual que el pivote y a la de
 * mayores si es mayor que el pivote, los menores y los mayores se le envian a divideLista , luego compruebo que la lista
 * de mayores y menores tenga la misma cantidad de numeros que la original, si no devuelvo la lista
 * @param {[Number]} lista lista de numeros a ordenar
 * @returns 
 */
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
    menores.push(pivotes)
    
    let lista_final=menores.concat(mayores);
    if(lista_final.length!=lista_original){
        return lista_final
    }

    console.log(lista_final)
    
}

/**
 * Funcion que calcula el pivote de una lista
 * @param {[Number]} lista lista de numeros
 * @returns 
 */
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
/**
 * Funcion que comprueba si la lista tiene mas de 2 elementos, si los tiene llama a la funcion quicksort con la lista, si no comprueba que tenga 2 elementos,
 * si tiene dos pone el menor por delante del mayor, si no tiene dos elementos, devuelve la lista
 * @param {[Number]} lista lista de numeros
 * @returns 
 */
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


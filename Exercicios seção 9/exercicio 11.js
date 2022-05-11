/*Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:*/

function new_array(array)
{
    let new_array=[]
    const ultimo_indice = array.length - 1
    new_array.push(array[0],array[ultimo_indice])

    return new_array
}

console.log(new_array([5,6,7,8]))
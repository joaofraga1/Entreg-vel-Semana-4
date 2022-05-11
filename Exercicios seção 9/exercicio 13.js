/*Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.*/

function numeros_do_array(array)
{   let resposta=[]
    for (let i in array)
    {
        if(typeof(array[i])=="number")
            resposta.push(array[i])
    }
    return resposta
}

console.log(numeros_do_array(['oi','5']))
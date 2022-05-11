/*Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.*/

function numeros_e_indices_pares(array)
{
    let resposta = []
    for(let i in array)
    {
        if(i%2==0&&array[i]%2==0)
            resposta.push(array[i])
    }
    return resposta
}

console.log(numeros_e_indices_pares([10,70,22,100]))
/*Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
indeterminada de números e retorne a média simples desses números.*/

function media(array)
{
    let soma = 0
    for(let i in array)
    {
        soma+=array[i]
    }
    const media = soma/array.length
    return media
}

console.log(media([0,10,2]))
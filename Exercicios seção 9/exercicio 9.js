/*Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.*/

function repeat(argumento,quantidade){
    const resposta=[]
    for(let i=0;i<quantidade;i++ )
    {
      resposta.push(argumento)
    }

    return resposta
}

console.log(repeat(5,4))
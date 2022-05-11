/*Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.*/

function repeat(quantidade)
{
   let resposta = ''
   for(i=0;i<quantidade;i++)
        resposta+='+'
   return resposta
}


console.log(repeat(0))
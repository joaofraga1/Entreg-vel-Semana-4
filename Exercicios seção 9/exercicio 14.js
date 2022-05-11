/*Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento:
*/

function objeto_para_array(obj){
    let resposta = []
    for(let atributo in obj)
    {
        resposta.push([atributo,obj[atributo]])
    }
    return resposta
}

console.log(objeto_para_array({nome:'joao',sobrenome:'fraga'}))
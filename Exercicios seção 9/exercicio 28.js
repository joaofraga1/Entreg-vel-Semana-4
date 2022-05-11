/*Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro.*/

function filtro_por_quant_de_digitos(array,quantidade)
{
    const resposta = array.filter(e=>(String(e).length==quantidade))
    return resposta
}


console.log(filtro_por_quant_de_digitos([38, 2, 365, 10, 125, 11], 2))



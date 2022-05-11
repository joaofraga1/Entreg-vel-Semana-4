/*Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
exemplo a seguir:*/

function troca_par(obj){
    let resposta = {}
    Object.entries(obj).forEach(par=>{
        resposta[par[1]] = par[0]
    })
    return resposta


}

console.log(troca_par({ a: 1, b: 2, c: 3}))


function palavras_semelhantes(semelhança,palavras){
    let resposta= []
    for(let i in palavras)
    {
        if(palavras[i].includes(semelhança))
        {
            resposta.push(palavras[i])
        }
    }
    return resposta
}

console.log(palavras_semelhantes("pro", ["programação", "mobile", "profissional"]))
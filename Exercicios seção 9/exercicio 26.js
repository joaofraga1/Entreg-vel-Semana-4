/*Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais.*/


function deletar_vogais(string)
{
    const vogais = 'aAeEiIoOuU'
    for(let i in string)
    {
        for(let k in vogais)
        {
            string=string.replace(vogais[i],'')
        }
    }
    return string
}

console.log(deletar_vogais('amendobobo'))

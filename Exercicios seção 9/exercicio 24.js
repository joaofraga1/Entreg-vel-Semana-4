/*Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas.
*/


function contar_caractere(caractere,string){
    let numero_de_caracteres= 0
    for(let i in string)
    {
        if(string[i]==caractere)
            numero_de_caracteres++
    }
    return numero_de_caracteres
}

console.log(contar_caractere("r", "A sorte favorece os audazes"))
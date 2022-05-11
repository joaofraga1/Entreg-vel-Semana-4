/*Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
*/

function maior_ou_igual (a,b){
    if(typeof(a)!=typeof(b)) return false
    return a>=b


}

console.log(maior_ou_igual(4,1))
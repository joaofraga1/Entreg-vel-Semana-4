/*Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo.*/

function esta_entre(minimo,maximo,numero,inclusivo= false){

    if(inclusivo==false)
        return numero<maximo&&numero>minimo
    else
        return numero<=maximo&&numero>=minimo
    


}

console.log(esta_entre(5,10,10,true))
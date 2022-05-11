/*Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
deverá ser de duas casas decimais, arredondando se necessário.
*/

function area_do_triangulo(base,altura){
    let auxiliar
    let area_do_triangulo = (base*altura)/2
    area_do_triangulo = area_do_triangulo.toFixed(2)
    return area_do_triangulo
}

console.log(area_do_triangulo(9.25,13.1))
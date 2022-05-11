/*Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês.*/

function salario_mensal({salario_por_hora,horas_trabalhadas}){
    const salario_mensal = salario_por_hora*horas_trabalhadas
    return salario_mensal
}

console.log(salario_mensal({salario_por_hora:150,horas_trabalhadas:40.5}))
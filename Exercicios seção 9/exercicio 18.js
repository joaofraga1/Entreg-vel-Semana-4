/*Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.*/

function total_de_despesas(array){
    let total_de_despesas = 0

    for(let i in array)
    {
        total_de_despesas+= array[i].preco
    }
    return total_de_despesas
}

console.log(total_de_despesas([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}]
    ))
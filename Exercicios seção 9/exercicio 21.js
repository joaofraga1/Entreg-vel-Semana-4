/*Criar uma função que receba um array de números e retorne o menor número desse array.*/

function menor(array)
{
    
    return array.reduce((anterior,atual)=>anterior<atual?anterior:atual)
        
}


console.log(menor([2,3,-5,4,5,8,1]))

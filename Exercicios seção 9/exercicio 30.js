/*Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
*/

function melhor_aluno(obj)
{
    let resposta = []
    let maior_media=0
    let melhor_aluno=''
    let media
    Object.entries(obj).forEach(([nome,notas])=>{
        media= notas.reduce((acumulador,atual)=> acumulador+atual)/notas.length
        /*if(media>maior_media)
        {
            melhor_aluno=nome
            maior_media=media
        }*/
        melhor_aluno = (media>maior_media)?
        nome:melhor_aluno
        maior_media = (media>maior_media)?
        media:maior_media
    })
    return {nome:melhor_aluno,media:maior_media}
}

console.log(melhor_aluno({
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8], 
    Carla: [7, 7, 8, 9] 
    }))
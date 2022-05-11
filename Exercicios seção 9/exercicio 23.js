function conta_palavra(string){
    let num_espaços = 0
    for(let i in string)
    {
       if(string[i]==' ')
       {
           num_espaços++
       }
    }
    return num_espaços + 1
}

console.log(conta_palavra('oi eu te amo'))

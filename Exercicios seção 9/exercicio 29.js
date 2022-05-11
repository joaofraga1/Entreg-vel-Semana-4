




function seg_maior(array) {
    const maior = array => array.reduce((anterior,atual)=>(anterior>atual)?anterior:atual)
    const maior_1 = maior(array)
    const indice_do_maior = array.indexOf(maior_1)
    delete array[indice_do_maior]
    return maior(array)
    
} 

console.log(seg_maior([1,2,3,4]))
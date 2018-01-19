function mergeSort(array){
    if (array.length <= 1) return array
    var [firstHalf, secondHalf] = split(array);
    return merge([mergeSort(firstHalf), mergeSort(secondHalf)]);
    
}
function split(array){
    if (array.length == 1){
        return array
    }
    var n = Math.floor(array.length/2)
    var secondHalf = array.slice(n);
    var firstHalf = array.slice(0,n);
    return [firstHalf, secondHalf];
}
function merge(partes){
    var lista=[]
    firstHalf=partes[0]
    secondHalf=partes[1]
    while (firstHalf.length && secondHalf.length){
        if (firstHalf[0]<secondHalf[0]) {
            lista.push(firstHalf.shift())
        }else{
            lista.push(secondHalf.shift())
        }
    }
    return firstHalf.length ? lista.concat(firstHalf) : lista.concat(secondHalf)
}
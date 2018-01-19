function bubbleSort(array) {
    var aux
      //recorremos el array
     if (array[0]){
        //si tiene datos:
        for (var i = 0; i < array.length; i++) {
            for (var j = i+1; j < array.length; j++) {
                if (swap(array[i],array[j])){
                      aux=array[i]
                      array[i]=array[j]
                      array[j]=aux  
                }
            }
        }
    }return array
}
function swap(num1,num2){
    return num1>num2?true:false
}

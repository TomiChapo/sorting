describe('Split Array function', function() {
  it('es capar de dividir el arreglo en dos partes', function() {
    expect(split([1,2,3,4])).toEqual([[1,2],[3,4]]);
    expect(split([1,2,3])).toEqual([[1],[2,3]]);
    expect(split([0,2,3])).toEqual([[0],[2,3]]);
    expect(split([1])).toEqual([1]);
  });
});

describe('Merge', function(){ 

 it('cuando esta ordenado', function(){
       expect(merge([[1,3],[2,6]])).toEqual([1,2,3,6]);
       expect(merge([[1,2],[3,6]])).toEqual([1,2,3,6]);
   });
 it('mergeSort', function(){
        expect(mergeSort([9,3,6,1,0,2])).toEqual([0,1,2,3,6,9]);
    });
})
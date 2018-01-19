describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });
    it('el ultimo es el menor', function(){
        expect( bubbleSort([1,2,3,4,5,0]) ).toEqual( [0,1,2,3,4,5] );
    });
    it('el primero es el mayor', function(){
        expect( bubbleSort([9,1,3,6,8]) ).toEqual( [1,3,6,8,9] );
    });
    it('cuando esta ordenado', function(){
        expect( bubbleSort([1,2,3,4,5,6]) ).toEqual( [1,2,3,4,5,6] );
    });
    it("con random", function() {
        var array= new Array(6);
        for (var i=0;i<array.length;i++){
            array[i]=Math.floor(Math.random()*9+1)
        }
        var array2=array.slice(0)
        expect(bubbleSort(array)).toEqual(array2.sort());
  });
});
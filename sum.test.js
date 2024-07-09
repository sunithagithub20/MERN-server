//test cases for unit fun sum
const sum =require('./test/sum')


//jest test cases
//test fun to test
test('1+2=3',()=>{
    expect(sum(1,2)).toBe(3);
    //toBe ->exactly equal 
    //expect to execute unit fun
})
test('Object in array',()=>{
    const data={one:1}
    data['two']=2
    expect(data).toEqual({one:1,two:2});
})
//toBeNull
test('Value is Null',()=>{
    const n =null;
    expect(n).toBeNull();
})
//tobedefine
test('Value is Defined',()=>{
    const a =1;
    expect(a).toBeDefined();
})
//toBeTruthy
test('Value is truth',()=>{
    const bool=true
    expect(bool).toBeTruthy();
})
//toBeFalsy
test('Value is false',()=>{
    const bool=false
    expect(bool).toBeFalsy();
})
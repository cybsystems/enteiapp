const sum=require('./sum').sum
const mul=require('./sum').mul
const div=require('./sum').div
test('adds 1 + 2 to equal 3', () => {

    expect(sum(1, 2)).toBe(3);
  
});


test('multiplicate 2*2 to equal 4',()=>{
    expect(mul(2,2)).toBe(4)
})

test('can not be a and b zero ',()=>{
    const res=mul(0,5);
    expect(res).toBe(-1)

})

test('div should return 3 for 6 and 2',()=>{

    const res=div(6,2);
    expect(res).toBe(3)
})


test('b can not be zero',()=>{
    const res=div(6,0);
    expect(res).toBe('b cant be zero')
})
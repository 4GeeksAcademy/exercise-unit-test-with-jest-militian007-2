
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function() {
    const expected = 3.5 * 1.07; 
    expect(fromEuroToDollar(3.5)).toBe(expected); 
});


test("10 dollars should be converted to Yen correctly", function() {
    
    const expected = (10 / 1.07) * 156.5;
    expect(fromDollarToYen(10)).toBe(expected);
});


test("1000 yenes should be converted to Pounds correctly", function() {
    
    const expected = (1000 / 156.5) * 0.87;
    expect(fromYenToPound(1000)).toBe(expected);
});
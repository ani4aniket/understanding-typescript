type Combinable = number | string;

function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: 'as-number' | 'as-text'
) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number'|| resultConversion === 'as-number'){
        result = +input1 + +input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result;
}

const combinedAges = combine(20, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('20', '36', 'as-number');
console.log(combinedAges);

const combinedNames = combine('Aniket', 'Anand', 'as-text');
console.log(combinedNames);
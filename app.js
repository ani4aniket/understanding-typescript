function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result' + num);
}
printResult(add(1, 2));
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});

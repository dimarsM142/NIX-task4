function dateType(str){
    let regexp = /^([1-2][0-9]|0?[1-9]|3[01])-(1[0-2]|0?[1-9])-(\d{1,3}|[0-1]\d\d\d|20[0-1]\d|202[0-2])$/;
    return regexp.test(str);
}

console.log(dateType('2-12-1979'));
console.log(dateType('25-07-2021'));
console.log(dateType('25-7-2020'));
console.log(dateType('1-1-2021'));

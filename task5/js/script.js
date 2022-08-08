function getBeatlesName(str){
    if(!str){
        return null;
    }
    let res = str.replace(/^([-A-Za-z]+), ([-A-Za-z]+)$/gm, '$2 $1');
    if(res === str){
        return null;
    }
    let testCheck = res.match(/([-A-Za-z]+ [-A-Za-z]+)/g);
    let testLenght =  testCheck.length;
    if(str.length - res.length !== testLenght){
        return null;
    }
    testCheck = res.match(/[-A-Za-z]\n/g);
    if(testLenght - testCheck.length !== 1 ){
        return null;
    }
    return res;
}

let str = "Lennon, John-Dake\nMcCartney, Paul\nHarrison, George\nStar, Ringo";
console.log(getBeatlesName(str));
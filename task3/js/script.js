function strPad(input, fullen, fillStr, fillType = "FILL_RIGHT") {
    if(input.length >= fullen){
        return input;
    }
    let addStr ='';
    for(let i = 0; i < fullen - input.length - fillStr.length; i += fillStr.length){
        addStr += fillStr;
    }
    for(let i = 0; i < fillStr.length; i++){
        if(addStr.length + input.length === fullen){
            break;
        }
        addStr += fillStr[i];
    }
    let result = '';
    if(fillType === 'FILL_RIGHT'){
        result = input + addStr;
    }
    else if(fillType === 'FILL_LEFT'){
        result = addStr + input;
    }
    else if(fillType === 'FILL_BOTH'){
        if(addStr.length % 2 == 0){
            let leftAdd = addStr.slice(0, addStr.length / 2);
            let rightAdd = addStr.slice(addStr.length / 2, addStr.length);
            result = leftAdd + input + rightAdd;
        }
        else{
            let leftAdd = addStr.slice(0, (addStr.length / 2) + 1);
            let rightAdd = addStr.slice((addStr.length / 2) + 1, addStr.length);
            result = leftAdd + input + rightAdd;            
        }
        
    }
    else{
        return undefined;
    }
    return result;
}

console.log(strPad('star', 10, '_*_')); // star_*__*_
console.log(strPad('star', 8, '_*_', 'FILL_LEFT' )); // _*__star
console.log(strPad('star', 8, '*', 'FILL_BOTH')); // **star**

console.log(strPad('star', 8, '*', 'bad input')); // undefined
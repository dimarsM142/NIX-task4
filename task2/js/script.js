function checkWord(input, str){
    let indexOfStart = input.indexOf(str);
    if(indexOfStart === -1){
        return null;
    }
    let indexOfFinish = indexOfStart + str.length;
    while(indexOfStart >= 0){
        if(input[indexOfStart] == ' '){
            break;
        }
        indexOfStart--;
    }
    indexOfStart++;
    while(indexOfFinish <= input.length - 1){
        if(input[indexOfFinish] == ' '){
            break;
        }
        indexOfFinish++;
    }
    return input.slice(indexOfStart, indexOfFinish);
}

console.log(checkWord("Ми знаємо що монохромний колір - це градації сірого", "хром"));
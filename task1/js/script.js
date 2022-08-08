function isPowOfTwo(arg){
    if(!Number.isInteger(arg)){
        return undefined;
    }
    let powOfTwo = 2;
    let counter = 0;
    while(arg >= powOfTwo){
        if(powOfTwo === arg){
            return true;
        }
        powOfTwo = 2 << counter;
        counter++;      
    }
    return false;
}

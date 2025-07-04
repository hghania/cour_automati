function addition(a,b){

    return a+b;
}
function division(x,y){
    if(y===0){
        throw new Error("division par 0 interdit")
    }

    return x/y;

}
module.exports={addition,division}
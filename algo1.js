let arr = [2 , 5 ,6,8,10]
let arrZ = [ 1,3,58,9,11]

function findIN(x){
    let num1 = []
let num2 = []
for (i = 0; i < x.length; i++) {
    if (x[i]%2 ==0 ) {
        num1.push(x[i]);
    
    }else{
        num2.push(x[i]);

    }
    
}
if (num1.lenght ==1) {
    console.log(num1)
    
}else if(num2.lenght ==1){
    console.log(num2)

}else{
    console.log("there is no intruder")
}

}
findIN(arr)
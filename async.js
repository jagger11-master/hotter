function myDisplayer(message) {
    console.log(message);
    return message;
}




myDisplayer("A");

setTimeout(function(){
    myDisplayer("B");
},2000);

myDisplayer("C"); 

let me = myDisplayer("ashura");
console.log("me");
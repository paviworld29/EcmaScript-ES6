// arrow function is one of the features that intriduced by ES6. it short method to create a function 

// now we are creating defualt function



function add(a,b)
{
    console.log(a+b)
}

// now we are creating function with variable

let x = function (a,b){
    console.log(a-b)
    
}

// now we are creating function with arrow function 

let y = (a,b)=>{
    console.log(a*b)
}


add(10,20);
let res = x(24,20);
let res1 = y(2,2);
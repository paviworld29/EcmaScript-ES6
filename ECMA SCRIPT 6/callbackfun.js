// what is call back function?
// call back function is a function where function will passed an argument to the another function 
// it is basically used to implement the asynorous function.

function display (res){
    console.log(res)
}
    function mycalc(a,b,myfun){
        c=a+b;
        myfun(c)
    }

    mycalc(10,3,display);

    


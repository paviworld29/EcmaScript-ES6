// map is used to store the data using key value pair. it the predefine object in javascript.

const fruits = new Map([
    ["apples",500],
    ["banana",400],
    ["Mango",300],
    ["orange",500],
    ["stroberrry",500]])

    for(const obj of fruits){
        console.log(obj)
        for(const data of obj){
            console.log(data)
        }
    }
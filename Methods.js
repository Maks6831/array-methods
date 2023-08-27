const fruits = ["apple", "banana", "orange", "grape"];

const methodObject = {
    fruits : ["apple", "banana", "orange", "grape"],
    numbers : ["1","2","3","4","5","6","7"],
    letters : ["a","b","c","d","e","f","g"],
    newAt : function(index){
        return this.fruits[index]
    },
    newConcat : function(){
        const newArr = this.fruits
        //console.log(arguments)
        for (let array in arguments){
            let currentArr = arguments[array]
            for(let i=0; i < currentArr.length; i++){
                newArr.push(currentArr[i])
            }
        }
        
     return newArr;     

    }

}


// tests
console.log(methodObject.newAt(1));
console.log(methodObject.newConcat(methodObject.letters));
console.log(methodObject.newConcat(methodObject.letters, methodObject.numbers));


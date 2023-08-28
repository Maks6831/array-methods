const fruits = ["apple", "banana", "orange", "grape"];

const methodObject = {
    fruits : ["apple", "banana", "orange", "grape"],
    numbers : ["1","2","3","4","5","6","7"],
    letters : ["a","b","c","d","e","f","g"],
    realNumbers : [1,2,3,4,5,6,7,8,9,10],
    mixedArray : ["1","2","3",6,7,8,9,"banana", "orange", "grape"],
    emptyArray : [],
    newAt : function(index){
        return this.fruits[index]
    },
    newConcat : function(){
        const newArr = this.fruits
        //console.log(arguments)
        for (let array in arguments){
            let currentArr = arguments[array]
            for(let i=0; i < currentArr.length; i++){
                if (currentArr[i])
                newArr.push(currentArr[i])
            }
        }
        
     return newArr;     

    },
    newEvery : function(funct, array){
        const truthArray = [];
        for(let i = 0; i < array.length; i++){
            if(array[i]){
                truthArray.push(funct(array[i]));
            }           
        }
        if(truthArray.includes(false) || truthArray === []){
            return false;
        } else {
            return true;
        }

    },
    newFill : function(array, fill, start, end, ){
        if(start && end){
            for(let i = array[start]; i < array[end]; i++){
                array[i] = fill
            }  
        } else if(start) {
            for(let i = array[start]; i < array.length; i++){
                array[i] = fill
            }

        } else {
            for(let i = 0; i < array.length; i++){
                array[i] = fill
            }
        }
        return array;

    }
}

const testFunction = (element) => {
    if(typeof element === "string"){
        return true
    } else {
        return false
    }
}



// tests

//newAt

//console.log(methodObject.newAt(1)); // 

// newConcat

//console.log(methodObject.newConcat(methodObject.letters));
//console.log(methodObject.newConcat(methodObject.letters, methodObject.numbers));

// newEvery

//console.log(methodObject.newEvery(testFunction, methodObject.mixedArray)); //returns false
//console.log(methodObject.newEvery(testFunction, methodObject.realNumbers)); // returns false
//console.log(methodObject.newEvery(testFunction, methodObject.numbers)) // return true;
//console.log(methodObject.newEvery(testFunction, methodObject.emptyArray)); // returns true

// fill 


console.log(methodObject.newFill(methodObject.realNumbers, 3));



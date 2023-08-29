const fruits = ["apple", "banana", "orange", "grape"];
const testFunction = (element) => {
    if(typeof element === "string"){
        return true
    } else {
        return false
    }
}

const filterFunctionOne = (element) => {
    if(typeof element === "string"){
        return true
    } else {
        return false
    }

}

const filterFunctionTwo = (element) => {
    if(element < 4){
        return true
    } else {
        return false
    }
}

const findFunction = (element) => {
    return element > 20;
}

const findFunctionTwo = (element) => {
    return element > 100;
}



const methodObject = {
    fruits : ["apple", "banana", "orange", "grape"],
    numbers : ["1","2","3","4","5","6","7"],
    letters : ["a","b","c","d","e","f","g"],
    realNumbers : [1,2,3,4,5,6,7,8,9,10, 25, 30],
    mixedArray : ["1","2","3",6,7,8,9,"banana", "orange", "grape"],
    subArrayOne: [[1,2],[3,4],[5,6]],
    subArrayTwo: [1, 2, [3, [4, 5, 6], 7], 8],
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

    },
    newFilter: function(funct, array){
        let newArr = []
        for(let i = 0; i < array.length; i++){
            if (array[i] && funct(array[i]) === true){
                newArr.push(array[i])

            }
        }
        if(newArr !== []){
            return newArr
        } else {
            return null
        }
    },
    newFind: function(funct, array){
        for(let i = 0; i < array.length; i++){
            if(funct(array[i])){     
            return array[i]   
            }
        }

        return null

    },
    newFindIndex : function(funct, array){
        let counter = 0
        for(let i = 0; i < array.length; i++){
            if(funct(array[i])){   
                counter++
                return i;   
            }
            
        }
        if(!counter){
            return -1;
        }
      
    },
    newFindLast : function(funct, array){
        lastNumber = 0;
        for(let i = 0; i < array.length; i++){
            if(funct(array[i])){   
                lastNumber = array[i];  
            }
        
    }
    return lastNumber;
    },
    newFindLastIndex : function(funct, array){
        let lastIndex = 0
        for(let i = 0; i < array.length; i++){
            if(funct(array[i])){   
                lastIndex = i;  
            }     
    }
    return lastIndex
    },
    newFlat: function(array){
        newArr = [];
        for(let i = 0; i < array.length; i++){
            if(Array.isArray(array[i])){
                for(let j = 0; j < array[i].length; j++){
                    if(Array.isArray(array[i][j])){
                        for(let k = 0; k < array[i][j].length; k++){
                            newArr.push(array[i][j][k])
                        }
                        
                    } else {
                        newArr.push(array[i][j])
                    }               
                } 
            } else {
                newArr.push(array[i])
            }
        }
        return newArr;
    },
    newFlatMap: function(funct, array){
        let newArr = [];
        for(let i = 0; i < array.length; i++){
            newArr.push(funct(array[i]))
        }

        return newArr;
    },
    newForEach : function (funct, array){
        let count =0 
        while(count < array.length ){
            return funct(array[count])
            count++
        }
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

//console.log(methodObject.newFill(methodObject.realNumbers, 3));// passed

// filter

//console.log(methodObject.newFilter(filterFunctionOne, methodObject.mixedArray)); // returns [ '1', '2', '3', 'banana', 'orange', 'grape' ]
//console.log(methodObject.newFilter(filterFunctionTwo, methodObject.realNumbers));// returns [ 1, 2, 3 ]
//console.log(methodObject.newFilter(filterFunctionTwo, methodObject.emptyArray));// returns empty array which i think is fine. 

// find

//console.log(methodObject.newFind(filterFunctionTwo, methodObject.realNumbers));// returns 1
//console.log(methodObject.newFind(findFunction, methodObject.realNumbers));// returns 25


// findIndex

//console.log(methodObject.newFindIndex(findFunction, methodObject.realNumbers)) // outputs 10
//console.log(methodObject.newFindIndex(findFunctionTwo, methodObject.realNumbers)) // outputs -1


// findLast

//console.log(methodObject.newFindLast(findFunction, methodObject.realNumbers)) // outputs 30

// findLastIndex

//console.log(methodObject.newFindLastIndex(findFunction, methodObject.realNumbers)) // outputs 11


// flat

//console.log(methodObject.newFlat( methodObject.subArrayOne)) // outputs [ 1, 2, 3, 4, 5, 6 ]
//console.log(methodObject.newFlat( methodObject.subArrayTwo)) // outputs [  1, 2, 3, 4, 5, 6, 7, 8 ]


// flatMap

//console.log(methodObject.newFlatMap((x) => x * 2 , methodObject.realNumbers)) // outputs [2,  4,  6,  8, 10, 12, 14, 16, 18, 20,50, 60]


// forEach 


console.log(methodObject.newForEach((x) => x * 2 , methodObject.realNumbers))

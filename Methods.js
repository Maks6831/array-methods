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
    subArrayTwo : [
        [
          [
            [[1, 2], [3, 4], [5, 6]],
            [[7, 8], [9, 10], [11, 12]],
          ],
          [
            [[13, 14], [15, 16], [17, 18]],
            [[19, 20], [21, 22], [23, 24]],
          ],
        ],
        [
          [
            [[25, 26], [27, 28], [29, 30]],
            [[31, 32], [33, 34], [35, 36]],
          ],
          [
            [[37, 38], [39, 40], [41, 42]],
            [[43, 44], [45, 46], [47, 48]],
          ],
        ],
      ],
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
             funct(array[count])
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
//console.log(methodObject.newFlat( methodObject.subArrayThree))

// flatMap

//console.log(methodObject.newFlatMap((x) => x * 2 , methodObject.realNumbers)) // outputs [2,  4,  6,  8, 10, 12, 14, 16, 18, 20,50, 60]


// forEach 


//console.log(methodObject.newForEach((x) => x * 2 , methodObject.realNumbers))

// i am now going to do the rest of the methods using the way described in developer pro 

const fruit = ["apple", "banana", "orange", "grape", "banana", "orange"]
const numbers = ["1", "2", "3", "4", "5", "6", "7"]
const letters = ["a", "b", "c", "d", "e", "f", "g"]
const realNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 25, 3]
const mixedArray = ["1", "2", "3", 6, 7, 8, 9, "banana", "orange", "grape"]
const subArrayOne = [[1, 2], [3, 4], [5, 6]]
const subArrayTwo = [1, 2, [3, [4, 5, 6], 7], 8]
const emptyArray = []


// includes

Array.prototype.includes = undefined


Array.prototype.includes = function(element){
    let truth = false;
    for(let i = 0; i < this.length; i++){
        if(this[i] === element){
            truth = true;
        }     
    }
    return truth
}

//console.log(realNumbers.includes(350));

// indexOf
Array.prototype.indexOf = undefined;

Array.prototype.indexOf = function(element, start) {
    let index = -1;
    let beginning
    start ? beginning = start: beginning = 0
    for(let i = beginning; i < this.length; i++){
        if(this[i] === element){
            index = i
        }
    }
    return index;
}

//console.log(realNumbers.indexOf(3, 3));

// join

Array.prototype.join = undefined;

Array.prototype.join = function(seperator=','){
    let string = ''
    for(let i = 0; i < this.length; i++){
        if(i < this.length-1){
            string += `${this[i]}${seperator}`
              } else {
                string += `${this[i]}`
            }
        }
        return string
        
        
    }
    


//console.log(fruit.join('-'));

// lastIndexOf
Array.prototype.lastIndexOf = undefined;

Array.prototype.lastIndexOf = function(element){
    for(let i = this.length-1; i > -1; i--){
        if(this[i] === element){
            return i;
        }
    }


}

//console.log(fruit.lastIndexOf("apple"));

// pop

Array.prototype.pop = undefined;

Array.prototype.pop = function(){
    if(this === []){
        return undefined;
    } else { 
        const last = this[this.length-1];
        this.splice(this.length-1, 1);
        return last
    }
    
}

//console.log(fruit.pop());
//console.log(fruit);

// push


Array.prototype.push = undefined;

Array.prototype.push = function(element){
    this[this.length] = element;
}

//fruit.push('hello');

// reduce

Array.prototype.reduce = undefined;

Array.prototype.reduce = function(cb, initialvalue){
    let initial = initialvalue;
    for(let i = 0; i < this.length; i++){
        total = cb(initial, this[i]);
        console.log(total);
        initial = total
    } 
    return initial;


}


//console.log(realNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

// reverse 

Array.prototype.reverse = undefined;

Array.prototype.reverse = function(){
    let newArr = [];
    for(let i = this.length-1; i > -1; i--){
        newArr.push(this[i]);
    }
    return newArr;
}

//console.log(fruit.reverse());
//console.log(fruit)

// shift

Array.prototype.shift = undefined;


Array.prototype.shift = function(){
    let newArr = [];
    for(let i = 0; i < this.length; i++){ 
        if(this[i+1]){
            newArr.push(this[i+1])            
        }
    }
    return newArr;
}

//console.log(fruit.shift());
//console.log(fruit);

// slice

Array.prototype.slice = undefined;

Array.prototype.slice = function(start, end){
    let newArr = []
    end ? ending = end: ending = this.length;
    for(let i = start; i < ending; i++){
        newArr.push(this[i]);
    }
    return newArr;
}

//console.log(fruit.slice(2, 4));

// some 

Array.prototype.some = undefined;

Array.prototype.some = function(cb){
    let truth = false
    for(let i = 0; i < this.length; i++){
        if(cb(this[i])){
            truth = true;
        }
    }
    return truth;
}

//console.log(realNumbers.some((element)=> element % 2 === 0))

// splice 

Array.prototype.splice = undefined; 

Array.prototype.splice = function(index, howmany, ...theArgs){
    let newArr = []
    for(let i = 0; i< this.length; i++){
        if(index === i && theArgs){
            newArr.push(theArgs);
            newArr.push(this[i])   
        } else {
            newArr.push(this[i])
        }
    }
    if(howmany>0){
        newArr = newArr.slice(0, index+1).concat(newArr.slice(index+howmany+1))


    }
    return newArr.flat();

}

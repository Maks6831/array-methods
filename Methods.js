

const fruit = ["apple", "banana1", "orange1", "grape", "banana2", "orange2"]
const numbers = ["1", "2", "3", "4", "5", "6", "7"]
const letters = ["a", "b", "c", "d", "e", "f", "g"]
const realNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 25, 3]
const mixedArray = ["1", "2", "3", 6, 7, 8, 9, "banana", "orange", "grape"]
const subArrayOne = [[1, 2], [3, 4], [5, 6]]
const subArrayTwo = [1, 2, [3, [4, 5, 6], 7], 8]
const emptyArray = []


Array.prototype.at = undefined;

Array.prototype.at = function(index){
    if(index < 0){
        return this[index + this.length]
    } else if(!index){
        return this[0]
    } else return this[index];
    
}

//console.log(fruit.at(2)) // orange;
//console.log(fruit.at()) // apple;
//console.log(fruit.at(-1)) // banana?



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
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

//console.log(plants.pop());
//
////console.log(fruit.pop());
////console.log(fruit);
//console.log(plants);
//// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
//
//plants.pop();
//
//console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]


// push


 Array.prototype.push = undefined

 Array.prototype.push = function(...elements){
    for(let i = 0; i< elements.length; i++){
        this[this.length] = elements[i];
    }
    
 }

//fruit.push('hello', 'hey');
//console.log(fruit);

// reduce

Array.prototype.reduce = undefined;

Array.prototype.reduce = function(cb, initialvalue){
    let initial = initialvalue;
    for(let i = 0; i < this.length; i++){
        let total = cb(initial, this[i]);
        
        initial = total
    } 
    return initial;


}

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

//console.log(sumWithInitial);
// Expected output: 10



// reverse 

Array.prototype.reverse = undefined;

Array.prototype.reverse = function(){
    let newArr = [];
    for(let i = this.length-1; i > -1; i--){
        newArr.push(this[i]);
    }
    this.length = 0;

    this.push(...newArr)
    //return this;
    return this
}

//console.log(fruit.reverse());
//console.log(fruit)

// shift

Array.prototype.shift = undefined;


Array.prototype.shift = function(){
    let newArr = [];
    let firstElement = this[0];
    for(let i = 0; i < this.length; i++){ 
        if(this[i+1]){
            newArr.push(this[i+1])  
                      
        }
    }
    this.length = 0;
    this.push(...newArr);
    return firstElement;
}



//console.log(fruit.shift());
//console.log(fruit);

//const array11 = [1, 2, 3];
//
//const firstElement = array11.shift();
//
//console.log(array11);
//// Expected output: Array [2, 3]
//
//console.log(firstElement);
// Expected output: 1


// slice

Array.prototype.slice = undefined;

Array.prototype.slice = function(start=0,end=this.length){
    let newArr = []
    if(start < 0){
        start = start + this.length;
    } else if(start < -this.length){
        start === 0;
    }
    if(end < 0){
        end = end + this.length;
    } else if(end < -this.length || end > this.length){
        end === this.length;
    }
    for(let i = start; i < end; i++){
        newArr.push(this[i]);
    }
    return newArr;
}

//console.log(fruit.slice(2, 4));

// some 

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

//console.log(animals.slice(2));
//// Expected output: Array ["camel", "duck", "elephant"]
//
//console.log(animals.slice(2, 4));
//// Expected output: Array ["camel", "duck"]
//
//console.log(animals.slice(1, 5));
//// Expected output: Array ["bison", "camel", "duck", "elephant"]
//
//console.log(animals.slice(-2));
//// Expected output: Array ["duck", "elephant"]
//
//console.log(animals.slice(2, -1));
//// Expected output: Array ["camel", "duck"]
//
//console.log(animals.slice());
//// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]


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

//const array = [1, 2, 3, 4, 5];
//
//// Checks whether an element is even
//const even = (element) => element % 2 === 0;
//
//console.log(array.some(even));
// Expected output: true


//console.log(realNumbers.some((element)=> element % 2 === 0))

// splice 

Array.prototype.splice = undefined; 

Array.prototype.splice = function(index, howmany, ...theArgs){
    const beggining = this.slice(0, index)
    const ending = this.slice(index+howmany, this.length);
    this.length = 0;
    this.push(...beggining, ...theArgs, ...ending);
}

//const months = ['Jan', 'March', 'April', 'June'];
//months.splice(1, 0, 'Feb');
//// Inserts at index 1
//console.log(months);
//// Expected output: Array ["Jan", "Feb", "March", "April", "June"]
//
//months.splice(4, 1, 'May');
//// Replaces 1 element at index 4
//console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]


Array.prototype.toString = undefined;

Array.prototype.toString = function(){
    let string = '';
    for(let i = 0; i < this.length; i++){
        string += this[i]
    }
    return string;
}

const arrayString = [1, 2, 'a', '1a'];

console.log(arrayString.toString());
// Expected output: "1,2,a,1a"


//console.log(realNumbers.toString());

Array.prototype.unshift = undefined;

Array.prototype.unshift = function(...theArgs){
    let newArr = theArgs;
    for(let i = 0; i < this.length; i++){
        newArr.push(this[i]);
    }
    this.length = 0;
    this.push(...newArr);

    return this.length;
}

//console.log(realNumbers.unshift(4,5,6))

//const arrayUnshift = [1, 2, 3];
//
//console.log(arrayUnshift.unshift(4, 5));
//// Expected output: 5
//
//console.log(arrayUnshift);
//// Expected output: Array [4, 5, 1, 2, 3]


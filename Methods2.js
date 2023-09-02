const fruit = ["apple", "banana1", "orange1", "grape", "banana2", "orange2"]
const numbers = ["1", "2", "3", "4", "5", "6", "7"]
const letters = ["a", "b", "c", "d", "e", "f", "g"]
const realNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 25, 3]
const mixedArray = ["1", "2", "3", 6, 7, 8, 9, "banana", "orange", "grape"]
const subArrayOne = [[1, 2], [3, 4], [5, 6]]
const subArrayTwo = [1, 2, [3, [4, 5, 6], 7], 8]
const emptyArray = []
 const subArrayThree = [
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
  ]


Array.prototype.flat = undefined;

Array.prototype.flat = function(depth=1){
    let newArr = [];
    let oldArr = this;
    const actualFunction = (array, count)=>{
        for(let i = 0; i < array.length; i++){
            if(Array.isArray(array[i]) && count){
                actualFunction(array[i], count-1)
            } else {
                newArr.push(array[i]);
            }
        }
    }
actualFunction(this, depth);
return newArr;
}

//const arr1 = [0, 1, 2, [3, 4]];
//
//console.log(arr1.flat());
//// expected output: Array [0, 1, 2, 3, 4]
//
//const arr2 = [0, 1, [2, [3, [4, 5]]]];
//
//console.log(arr2.flat());
//// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]
//
//console.log(arr2.flat(2));
//// expected output: Array [0, 1, 2, 3, Array [4, 5]]
//
//console.log(arr2.flat(Infinity));
//// expected output: Array [0, 1, 2, 3, 4, 5]



Array.prototype.flatMap = undefined;

Array.prototype.flatMap = function(cb){
    let newArr = [];
    for(let i = 0; i < this.length; i++){
        newArr.push(cb(this[i]));
    }
    return newArr.flat();
}

//const arr1 = [1, 2, 1];
//
//const results = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));
//
//console.log(results);
//// Expected output: Array [1, 2, 2, 1]
//
//
//const result = realNumbers.flatMap((num) => (num === 2 ? [2, 2] : 1));
////console.log(result);

Array.prototype.map = undefined;

Array.prototype.map = function(cb){
    let newArr = [];
    for(let i = 0; i < this.length; i++){
        newArr.push(cb(this[i]))
    }

    return newArr;
}

//const array1 = [1, 4, 9, 16];
//
//// Pass a function to map
//const map1 = array1.map((x) => x * 2);
//
//console.log(map1);
//// Expected output: Array [2, 8, 18, 32]


Array.prototype.findLastIndex = undefined;

Array.prototype.findLastIndex = function(cb){
    let lastIndex = -1;
    for(let i = 0; i < this.length; i++){
        if(cb(this[i])){
            lastIndex = i;
        }
    }
    return lastIndex;
}

//const array1 = [5, 12, 50, 130, 44];
//
//const isLargeNumber = (element) => element > 45;
//
//console.log(array1.findLastIndex(isLargeNumber));
//// Expected output: 3
//// Index of element with value: 130



//console.log(realNumbers.findLastIndex((element)=> element > 20));

Array.prototype.findLast = undefined;

Array.prototype.findLast = function(cb){
    let last = undefined;
    for(let i = 0; i < this.length; i++){
        if(cb(this[i])){
            last = this[i];
        }
    }
    return last;
}

//const array1 = [5, 12, 50, 130, 44];
//
//const found = array1.findLast((element) => element > 45);
//
//console.log(found);
// Expected output: 130


Array.prototype.findIndex = undefined;

Array.prototype.findIndex = function(cb){
    let firstIndex = -1;
    for(let i = 0; i < this.length; i++){
        if(cb(this[i])){
            return i;
        }
    }
    return firstIndex;
}

//const array1 = [5, 12, 8, 130, 44];
//
//const isLargeNumber = (element) => element > 13;
//
//console.log(array1.findIndex(isLargeNumber));
// Expected output: 3


Array.prototype.find = undefined;

Array.prototype.find = function(cb){
    let firstIndex = -1;
    for(let i = 0; i < this.length; i++){
        if(cb(this[i])){
            return this[i];
        }
    }
    return firstIndex;
}
//const array1 = [5, 12, 8, 130, 44];
//
//const found = array1.find((element) => element > 10);
//
//console.log(found);
//// Expected output: 12



Array.prototype.filter = undefined;

Array.prototype.filter = function(cb){
    let newArr = [];
    for(let i = 0; i < this.length; i++){
        if(cb(this[i])){
            newArr.push(this[i]);
        }
    }
    return newArr
}

//const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
//
//const result = words.filter((word) => word.length > 6);
//
//console.log(result);
//// Expected output: Array ["exuberant", "destruction", "present"]

Array.prototype.fill = undefined;

Array.prototype.fill = function(value, start=0, end=this.length){
    let newArr = [];
    for(let i = 0; i < this.length; i++){
        if(i >= start && i < end){
            newArr.push(value);
        } else {
            newArr.push(this[i]);
        }    
    }
    this.length = 0;
    this.push(...newArr);
    return this;

}

const array1 = [1, 2, 3, 4];

//// Fill with 0 from position 2 until position 4
//console.log(array1.fill(0, 2, 4));
//// Expected output: Array [1, 2, 0, 0]
//
//// Fill with 5 from position 1
//console.log(array1.fill(5, 1));
//// Expected output: Array [1, 5, 5, 5]
//
//console.log(array1.fill(6));
//// Expected output: Array [6, 6, 6, 6]


Array.prototype.every = undefined;

Array.prototype.every = function(cb){
    let truth = true;
    for(let i = 0; i < this.length; i++){
        if(!cb(this[i])){
            truth = false;
        }
        
    }
    return truth;


}

//const isBelowThreshold = (currentValue) => currentValue < 40;
//
//const array12 = [1, 30, 39, 29, 10, 13];
//
//console.log(array12.every(isBelowThreshold));
// Expected output: true



Array.prototype.concat = undefined;

Array.prototype.concat = function(){;
    let newArr = [];
    newArr.push(...this);
    for(let i = 0; i < arguments.length; i++){
        newArr.push(arguments[i]);
    }
    return newArr.flat();
}

//const resultFour = resalNumbers.concat(fruit);

const array123 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array4 = ['Hello', 'hey', 'howdy']
const array3 = array123.concat(array2, array4);

console.log(array3);
 //Expected output: Array ["a", "b", "c", "d", "e", "f"]


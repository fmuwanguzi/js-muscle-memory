/*******************************************************************************
Write a function tripler(array) that takes in an array and returns a new array
containing 3 times every element of the original array.

Examples:

tripler([1,2,3]); // => [ 3, 6, 9 ]
tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*******************************************************************************/

function tripler(array) {
    const result = [];
    //return a new arrayy result
    //iterate through the array passed in
    console.log('inside of triper function');
    for(let i = 0; i < array.length; i++){
        let num = array[i]; //1 next is 2
        let multiple = num * 3; //3 so next multiple is 6
        result.push(multiple) //[3,6,9]
    }
    //multiply each element by 3
    //push that element into my result
    //return result

  return result; 
}

console.log(tripler([1,2,3]));
console.log(tripler([4, 1, 7]));
// => [ 12, 3, 21 ]



// understand the problem and understand what its asking you to return
//what do i need to solve this problem 

//what am I returning ? array
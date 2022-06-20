let secondArray = [1,3,2,6,9,6,1,100,122,3];

function reverse(arr){
    let ReverseArray = [];
    for(let i = arr.length - 1; i >= 0; i--){
        ReverseArray.push(arr[i]);
    }
    return ReverseArray;
}
let result = reverse(secondArray);
console.log(result);
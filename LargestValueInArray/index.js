let secondArray = [1,3,2,6,9,6,1,100,122,3];

function LargestValueInArray(arr){
    let LargestValue = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > LargestValue){
            LargestValue = arr[i];
        }
    }
    return LargestValue;
}

let x = LargestValueInArray(secondArray);
console.log("LargestValueInArray : " , x);
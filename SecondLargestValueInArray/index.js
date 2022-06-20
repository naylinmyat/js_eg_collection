let secondArray = [1,3,2,6,9,6,1,100,122,3];

function SecondLargestValueInArray(arr){
    let LargestValue = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > LargestValue){
            LargestValue = arr[i];
        }
    }
    let SecondLargestValue = -1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < LargestValue && arr[i] > SecondLargestValue){
            SecondLargestValue = arr[i];
        }
    }
    return SecondLargestValue;
}

let y = SecondLargestValueInArray(secondArray);
console.log("SecondLargestValueInArray : " , y);
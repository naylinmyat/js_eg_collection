let sampleArray = [1,3,5,7,9];

function miniMaxSum(arr){
    let maxNumber = -1;
    let miniNumber = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        if(arr[i] > maxNumber){
            maxNumber = arr[i];
        }
        if(arr[i] < miniNumber){
            miniNumber = arr[i];
        }
    }
    let miniSum = sum - maxNumber;
    let maxSum = sum - miniNumber;

    return miniSum + " " + maxSum;
}

let result = miniMaxSum(sampleArray);
console.log(result);
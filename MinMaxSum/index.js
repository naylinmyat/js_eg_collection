let sampleArray = [1,2,3,4,5];

function miniMaxSum(arr){
    let maxNumber = -1;
    let miniNumber = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    for(let value of arr){
        sum += value;
        if(value > maxNumber){
            maxNumber = value;
        }
        if(value < miniNumber){
            miniNumber = value;
        }
    }
    let miniSum = sum - maxNumber;
    let maxSum = sum - miniNumber;

    return miniSum + " " + maxSum;
}

let result = miniMaxSum(sampleArray);
console.log(result);
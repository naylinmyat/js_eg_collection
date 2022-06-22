let sampleArray = [1,3,2,4,6,8,2,2];
let pairValue = 4;
let selectSeg = 2;
function birthdayBar(arr,pairValue,selectSeg){
    let pairCount = 0;
    for(let i = 0; i < arr.length; i++){
        let toSumArray = arr.slice(i,i+selectSeg);
        let sum = 0;
        for(let i = 0; i < toSumArray.length; i++){
             sum = sum + toSumArray[i];
        }
        if(sum === pairValue){
            pairCount += 1;
        }
    }
    return pairCount;
}
let result = birthdayBar(sampleArray,pairValue,selectSeg);
console.log("pairCount : ",result);
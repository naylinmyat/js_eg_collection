let n = 9;
let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockMerchant(n, ar){
    let sortedAr = ar.sort();
    let pairs = 0;

    for(let i = 0; i < n-1; i++){
        if(sortedAr[i] === sortedAr[i + 1]){
            pairs++;
            i++;
        }
    }
    return pairs;
}

let result = sockMerchant(n, ar);
console.log(result);
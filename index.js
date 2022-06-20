function calcPercentage(price){
    return (20 / 100) * price;
}

function calcForParents(numberOfParents){
    if(numberOfParents === 0 || numberOfParents === 1 || numberOfParents === 2){
        return numberOfParents * 1000000;
    }else{
        return "Error";
    }
}

function calcForWife(isMarried){
    if(isMarried === true){
        return 1000000;
    }else if(isMarried === false){
        return 0;
    }else{
        return "Error";
    }
}

function calcForChild(noOfChild){
    return noOfChild * 500000;
}

function tax(yearlyIncome,numberOfParents,isMarried,noOfChild){
    let seltRelease = calcPercentage(yearlyIncome);
    let releaseForParents = calcForParents(numberOfParents);
    let releaseForWife = calcForWife(isMarried);
    let releaseForChild = calcForChild(noOfChild);
    let totalRelease = seltRelease + releaseForParents + releaseForWife + releaseForChild + 72000;
    let amount0fTaxPayable = yearlyIncome - totalRelease;

    if(amount0fTaxPayable > 0 && amount0fTaxPayable <= 2000000){
        return 0;

    }else if(amount0fTaxPayable > 2000000 && amount0fTaxPayable <= 5000000){
        return (5 / 100) * (amount0fTaxPayable - 2000000);

    }else if(amount0fTaxPayable > 5000000 && amount0fTaxPayable <= 10000000){
        return (10 / 100) *  (amount0fTaxPayable - 5000000) + 150000;

    }else if(amount0fTaxPayable > 10000000 && amount0fTaxPayable <= 20000000){
        return (15 / 100) *  (amount0fTaxPayable - 10000000) + 650000;

    }else if(amount0fTaxPayable > 20000000 && amount0fTaxPayable <= 30000000){
        return (20 / 100) *  (amount0fTaxPayable - 20000000) + 2150000;

    }else if(amount0fTaxPayable > 30000000){
        return (25 / 100) *  (amount0fTaxPayable - 30000000) + 4150000;

    }else{
        return "Error";
    }
}

let result = tax(19584000,2,true,2);
console.log(result);

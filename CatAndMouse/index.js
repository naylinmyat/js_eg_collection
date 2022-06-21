let catA = 3;
let catB = 6;
let mouse = 7;

function catAndMouse(catA,catB,mouse){
    let calcCatAandMouse = Math.abs(catA - mouse);
    let calcCatBandMouse = Math.abs(catB - mouse);
    if(calcCatAandMouse < calcCatBandMouse){
        return "Cat A";
    }
    else if(calcCatAandMouse > calcCatBandMouse){
        return "Cat B";
    }
    else{
        return "Mouse C"
    }
}
let result = catAndMouse(catA,catB,mouse);
console.log(result);
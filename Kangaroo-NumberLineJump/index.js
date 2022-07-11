let  x1 = 0; v1 = 3; x2 = 4; v2 = 2;

function kangaroo(x1, v1, x2, v2) {
    let firstKangaroo = x1;
    let secondKangaroo = x2;
    let count = 0;

    while(true){
        if(firstKangaroo === secondKangaroo){
            return "YES";
        }else if(count > 10000){
            return "NO";
        }
        firstKangaroo += v1;
        secondKangaroo += v2;
        count++;
    }
};

let result = kangaroo(x1, v1, x2, v2);
console.log(result);
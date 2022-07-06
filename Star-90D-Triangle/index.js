function staircase(n){
    let result = '';
    let cross = '#';
    let space = ' ';
    for(let row = 1; row <= n; row++){
        let spaceCount = n-row;
        let crossCount = row;
        result += space.repeat(spaceCount) + cross.repeat(crossCount) + '\n';
    }
    console.log(result);
} 
staircase(7);
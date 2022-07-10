let s = 7;
let t = 11;
let a = 5;
let b = 15;
let apples = [-2, 2, 1];
let oranges = [5, -6];

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesFallPoints = apples.map(x => a + x);
    let orangesFallPoints = oranges.map(x => b + x);
    let numberOfApplesOnArea = applesFallPoints.filter(n => n >= s && n <= t).length;
    let numberOfOrangesOnArea = orangesFallPoints.filter(n => n >= s && n <= t).length;
    return `${numberOfApplesOnArea}
${numberOfOrangesOnArea}`;
};
let result = countApplesAndOranges(s, t, a, b, apples, oranges);
console.log(result);
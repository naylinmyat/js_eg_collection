let personList = [
    "Adam",
    "Alex",
    "Aaron",
    "Ben",
    "Carl",
    "Dan",
    "David",
    "Edward",
    "Fred",
    "Frank",
    "George",
    "Hal",
    "Hank",
    "Ike",
    "John",
    "Jack",
    "Joe",
    "Larry",
    "Monte",
    "Matthew",
    "Mark",
    "Nathan",
    "Otto",
    "Paul",
    "Peter",
    "Roger",
    "Roger",
    "Steve",
    "Thomas",
    "Tim",
    "Ty",
    "Victor",
    "Walter",
];

let arrayTransform = (arr,name) => {
    let newObj = arr.map(objCreatFunction);

    function objCreatFunction(personName){
        let sampleObj = {name: personName,check: false};
        if(sampleObj.name === name){
            sampleObj.check = true;
        }
        return sampleObj;
    }
    return newObj;
};

let result = arrayTransform(personList,"Ben");
console.log(result);
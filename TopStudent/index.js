let students = [
    {
      name: "David Rayy",
      mark: 12,
    },
    {
      name: "NYAN Rayy",
      mark: 1,
    },
    {
      name: "KO Rayy",
      mark: 2,
    },
    {
      name: "LIN Rayy",
      mark: 40,
    },
    {
      name: "TIN Rayy",
      mark: 90,
    },
    {
      name: "DEOK Rayy",
      mark: 1,
    },
    {
      name: "KOOO Rayy",
      mark: 100,
    },
];
function findTopStudentName(arr){
    let topStudent = students[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i].mark > topStudent.mark){
            topStudent = arr[i];
        }
    }
    return topStudent.name;
}
let result = findTopStudentName(students);
console.log(result);
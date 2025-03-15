let studentList = [
    {
        id: 1,
        name: "Peter Parket",
        age: 18,
    },
    {
        id: 2,
        name: "Tony Parket",
        age: 10,
    },
    {
        id: 3,
        name: "Stevw Parket",
        age: 20,
    },
];
console.log(studentList[0].id);
console.log(studentList[0].name);
console.log(studentList[0].age);

for (let student of studentList) {
    
    console.log(student);// lấy ra toàn bộ
    console.log(student.id);// lấy ra toàn bộ id
    console.log(student.name);// lấy ra toàn bộ name
}
// const person = {
//     personName: "Nguyễn Văn A",
//     age: 25,
//     address: "Thanh Xuân, Hà nội",
// };

// // truy cập
// // console.log("Per name:",person.personName);
// // console.log("Per name:",person.age);
// // console.log("Per name:",person.address);

// // dùng ngoặc vuông
// const typeSearch = "age"

// // console.log("Per name:",person['personName']);
// // console.log("Per name:",person[typeSearch]);
// // console.log("Per name:",person['address']);

// // thêm key vào object
// // person.email = "latp1102@gmail.com";
// // console.log(person);

// // xóa key
// // delete person.personName;
// // console.log(person);

// // cách 3
// const {personName, age , address} = person;
// console.log("personName:", personName);
// console.log(age);
// console.log(address);
// //
// //  duyêt qua object
// for (let key in person){
//     console.log(person[key]);
    
// }

// // lấy ra các key có trong object
// console.log("Danh sách các key", Object.keys(person));

// const students = [
//     {
//         id: 1,
//         studentName: "Nguyễn Văn A",
//         age: 25,
//     }
// ];

// console.table(students);


let obj1 = { name: "Alice" }; let obj2 = obj1; obj2.name = "Bob"; console.log(obj1.name);
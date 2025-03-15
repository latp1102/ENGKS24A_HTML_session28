// let phoneList = [
//     {
//         id: 1,
//         name: "Peter Parket",
//         phone: "0123456789",
//     },
//     {
//         id: 2,
//         name: "Tony Parket",
//         phone: "0123456789",
//     },
//     {
//         id: 3,
//         name: "Stevw Parket",
//         phone: "0123456789",
//     },
// ];

// while(true){
//     let userInput = prompt("Nhập vào C(THÊM)/R(HIỆN THỊ)/U(SỬA)/D(XÓA)/E");

// if (userInput === "C") {
//     // thêm mới 
//     let name = prompt("Nhập vào tên mới");
//     let phone = prompt(`Nhập vào phone mới ${name}`);
//     let contact = {
//         id:Math.random(),
//         name: name,
//         phone: phone,
//     };
//     phoneList.push(contact);

//     displayContact();
// } else if (userInput === "R"){
//     // hiện thị ra toàn bộ 
//     displayContact();
// } else if (userInput === "U"){
//     // cập nhật lại số điện thoại
//     let name = prompt("Nhập vào name đã có");
//     let index = phoneList.findIndex(function(el, i){
//         return el.name === name;
//     });
//     if (index === -1){
//         console.log("Không tìm thấy");
        
//     } else {
//         let phone = prompt(`Nhập vào phone thay đổi ${name}`);
//         phoneList[index].phone = phone;
//         displayContact();
        
//     }

// } else if (userInput === "D") {
//     // xóa đi 1 contact chỉ thị bởi người dùng
//     let name = prompt("Nhập tên muốn xóa");

//     let index = phoneList.findIndex(function(el, i){
//         return el.name === name;
//     });
//     if (index === -1){
//         console.log("Không tìm thấy");
        
//     } else {
//         phoneList.splice(index, 1);
//         displayContact();
//     }

// } else if (userInput === "E") {
//     console.log("Cảm ơn bạn đã sử dụng");
    
//     break;
// } else {
//     console.log("Không hợp lệ");
// }
// }

// function displayContact(){
    
//     for (let index in phoneList){
//         console.log("Name:", phoneList[index].name);
//         console.log("Phone:", phoneList[index].phone);
//         console.log("------------------");
        
//     }
// }

const obj = {a: 1, b:2, c: 3};
for(const key in obj) {
    console.log(obj[key]);
    
}
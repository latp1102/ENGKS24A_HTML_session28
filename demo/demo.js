let person = {
    name: 'Perter',
    age: 18,
    hometown: "Hà Nội",
    job: "Lập trình viên",
    single: true,
    hobbies: ["Listening to music", "Reading books"],
    sayHi: function(){
        console.log("Hello everyone");
        
    },
};
// console.log(person);

// console.log(person.name);
// console.log(person.sayHi);


/*for (let key in person){
    console.log(person[key]);
    
}*/// lấy ra toàn bộ trong person

// thêm vào
person.weight = "70kg";
person.height = "170cm";

person.introduce = function(){
    console.log("Xin chào, tôi tên là Peter");
    
}
console.log(person);

//sửa
person.job = "Chạy Grap";
console.log(person);

// xóa
delete person.job;
console.log(person);

// Xuất thông tin từ đối tượng
// có

// console.log("Tên công ty:", company.name);
// console.log("Địa điểm:", company.location);

// // Lấy danh sách nhân viên
// console.log("Danh sách nhân viên:", company.employees);


// Thêm một nhân vật mới vào danh sách
// javaScript
// company.employees.push({ name: "Trần Văn B", position: "Designer" });
// console.log("Danh sách nhân viên sau khi thêm:", company.employees);


// Cập nhật vị trí của một nhân viên
// có

// company.employees[0].position = "Senior Developer";
// console.log("Danh sách nhân viên sau khi cập nhật:", company.employees);

// Xóa một nhân viên khỏi danh sách
// có

// company.employees = company.employees.filter(employee => employee.name !== "Nguyễn Văn Hoàng");
// console.log("Danh sách nhân viên sau khi xóa:", company.employees);

const hocSinh = [
    { name: "Trần Trí Dương", điểm: { toán: 9, "tiếng anh": 8, văn: 7 } },
    { name: "Hà Bích Ngọc", điểm: { toán: 3, "tiếng anh": 2, văn: 5 } },
    { name: "Bùi Thái Sơn", điểm: { toán: 9.5, "tiếng anh": 9, văn: 9 } }
];

const sinhVienDiemCao = hocSinh.filter(sinhVien => {
    const { toán, "tiếng anh": tiengAnh, văn } = sinhVien.điểm;
    const diemTrungBinh = (toán + tiengAnh + văn) / 3;
    return diemTrungBinh >= 8;
});

console.log("Danh sách sinh viên có điểm trung bình >= 8:", sinhVienDiemCao);
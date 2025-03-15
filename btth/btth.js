// let choice;
// const products = [];
// do {
//     choice = +prompt("Nhập lựa chọn: 1-Thêm\n2 -sửa\n3 -Xóa\n4 -in\n5 - tìm kiếm\n6 thoát");

//     switch(choice) {
//         case 1:
//             const productNameInput = +prompt("Nhập tên sản phẩm");
//             const productPriceInput = +prompt("Nhập giá sản phẩm");

//             const newProduct = {
//                 id: Math.ceil(Math.random()*10000000000),
//                 productName: productNameInput,
//                 price: productPriceInput,
//             };
//             console.log("newProduct", newProduct);
//             products.push(newProduct)
//             break;
//         case 2:
//             const idUpdate = +prompt("Nhập id của sản phẩm cần cập nhật");

//             const findIndexProductUpdateProductUpdate = products.findIndex(
//                 (product) => product.id === idUpdate);

//             // kiểm tra điều kiện
//             if (findIndexProductUpdateInput !== -1){
//                 const productNameUpdateInput = prompt("Nhập tên sản phẩm mới");
//                 const productPriceUpdateInput = prompt("Nhập giá sản phẩm mới");
//                 // cập nhật mới
//                 products[findIndexProductUpdateProductUpdate].productName = productNameUpdateInput; // cập nhật lại tên cho sản phẩm
//                 products[findIndexProductUpdateProductUpdate].price = productPriceUpdateInput;

//             } else {
//                 alert("Không tìm thấy mảng")
//             }

//             break;
//         case 3:
//             // lấy id cần xóa từ người dùng
//             const idDelete = +prompt("Nhập id cần xóa");

//             const findIndexProductDelete = products.findIndex(
//                 (product) => product.id === idDelete );
//             // Kiểm tra xem id có tồn tại trong mảng không
//             if (findIndexProductDelete !== -1) {
//                 // thông báo xác nhận xóa

//                 const productNameDelete = products[findIndexProductDelete].productName;
//                 const confirmDelete = confirm(`Bạn có chắc chắn xóa sản phẩm tên là ${productName} này không`);

//                 if (confirmDelete === true) {
//                     // tiến hành xóa
//                     products.splice(findIndexProductDelete,1){
//                         alert("Xóa sản phẩm thành công");
//                     }
//                 } 

//             } else {
//                 alert("Không tìm thấy sản phẩm")
//             }
//             break;
//         case 4:
//             console.log(products);
            
//             break;
//         case 5:
//             const productNameInputSearch = prompt("Nhập tên sản phẩm cần tìm kiếm");
//             // tìm kiếm sản phẩm trong mảng
//             const findProductByName = products.find(
//                 (product) => product.productName === productNameInputSearch);
    
//                 if (findProductByName ) {
//                     console.log("tìm thấy sản phẩm", findProductByName);
                
//                 } else {
//                     console.log('Không tìm thấy sản phẩm');
                    
//                 }
//             break;
//         case 6:
//             console.log("Thoát chương trình");
//             break;
//         default:
//             console.log('Không hợp lệ');
//             break;
//         }
// } while (choice !== 6);


// const person = {
//     personName: 'Nguyễn Văn A',
//     age: 25,

// };

// person.personName = "Nguyễn Văn B",
// person.age = 30,
// person.email = "latp1102@gmail.com",

// console.log(person);

let choice;
const products = [];
do {
    choice = +prompt("Nhập lựa chọn: 1-Thêm\n2 -Sửa\n3 -Xóa\n4 -In\n5 -Tìm kiếm\n6 - Thoát");

    switch (choice) {
        case 1:
            const productNameInput = prompt("Nhập tên sản phẩm");
            const productPriceInput = +prompt("Nhập giá sản phẩm");

            const newProduct = {
                id: Math.ceil(Math.random() * 10000000000),
                productName: productNameInput,
                price: productPriceInput,
            };
            products.push(newProduct);
            console.log("Thêm sản phẩm thành công", newProduct);
            break;

        case 2:
            const idUpdate = +prompt("Nhập ID của sản phẩm cần cập nhật");
            const findIndexProductUpdate = products.findIndex((product) => product.id === idUpdate);

            if (findIndexProductUpdate !== -1) {
                const productNameUpdateInput = prompt("Nhập tên sản phẩm mới");
                const productPriceUpdateInput = +prompt("Nhập giá sản phẩm mới");

                products[findIndexProductUpdate].productName = productNameUpdateInput;
                products[findIndexProductUpdate].price = productPriceUpdateInput;
                console.log("Cập nhật sản phẩm thành công", products[findIndexProductUpdate]);
            } else {
                alert("Không tìm thấy sản phẩm");
            }
            break;

        case 3:
            const idDelete = +prompt("Nhập ID cần xóa");
            const findIndexProductDelete = products.findIndex((product) => product.id === idDelete);

            if (findIndexProductDelete !== -1) {
                const productNameDelete = products[findIndexProductDelete].productName;
                const confirmDelete = confirm(`Bạn có chắc chắn xóa sản phẩm tên là ${productNameDelete} không?`);

                if (confirmDelete) {
                    products.splice(findIndexProductDelete, 1);
                    alert("Xóa sản phẩm thành công");
                }
            } else {
                alert("Không tìm thấy sản phẩm");
            }
            break;

        case 4:
            console.log("Danh sách sản phẩm:", products);
            break;

        case 5:
            const productNameInputSearch = prompt("Nhập tên sản phẩm cần tìm kiếm");
            const findProductByName = products.find((product) => product.productName === productNameInputSearch);

            if (findProductByName) {
                console.log("Tìm thấy sản phẩm", findProductByName);
            } else {
                console.log("Không tìm thấy sản phẩm");
            }
            break;

        case 6:
            console.log("Thoát chương trình");
            break;

        default:
            console.log("Lựa chọn không hợp lệ");
            break;
    }
} while (choice !== 6);

const person = {
    personName: "Nguyễn Văn A",
    age: 25,
};

person.personName = "Nguyễn Văn B";
person.age = 30;
person.email = "latp1102@gmail.com";

console.log(person);


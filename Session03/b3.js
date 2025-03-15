let book = {
    title: "Javascript",
    author: "John Smith",
    page: 200,
};
console.log('Ban đầu:');

for(let key in book){
    console.log(book[key]);
    
}
console.log('-----------');

console.log('Sau khi xóa:');
delete book.page;
for (let key in book){
    console.log(book[key]);
    
}



let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
};
console.log('Ban đầu:');

for (let key in car) {
    console.log(car[key]);
    
}
console.log("----------");


console.log('Sau khi cập nhật:');
for (let key in car) {
    car.color = "red";
    car.year = 2022;
    console.log(car[key]);
}



const company = {
  name: "RikkeiSoft",
  location: "Hà Nội",
  employees: [
    { name: "Nguyễn Văn Luận", position: "Deverloper" },
    { name: "Nguyễn Văn Hoàng", position: "Tester" },
    { name: "Nguyễn Nam Cao", position: "Manager" },
  ],
};

console.log(company.name);
company.employees.forEach((employee) => {
  console.log(`Tên: ${employee.name}`);
});

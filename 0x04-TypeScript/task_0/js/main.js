var student1 = {
    firstName: "R",
    lastName: "B",
    age: 31,
    location: "Misr"
};
var student2 = {
    firstName: "Y",
    lastName: "N",
    age: 33,
    location: "Misr"
};
var studentsList = [];
studentsList.push(student1);
studentsList.push(student2);
function renderTable(students) {
    var table = document.createElement('table');
    students.forEach(function (student) {
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.textContent = student.firstName;
        cell2.textContent = student.location;
    });
    document.body.appendChild(table);
}
renderTable(studentsList);

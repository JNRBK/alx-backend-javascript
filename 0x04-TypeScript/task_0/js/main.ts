interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "apple",
  lastName: "pie",
  age: 31,
  location: "Macdonalds",
};

const student2: Student = {
  firstName: "julien",
  lastName: "barbier",
  age: 33,
  location: "USA",
};

const studentsList: Student[] = [];

studentsList.push(student1);
studentsList.push(student2);

function renderTable(students: Student[]) {
  const table = document.createElement('table');

  students.forEach(student => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.textContent = student.firstName;
    cell2.textContent = student.location;

  });

  document.body.appendChild(table);
}

renderTable(studentsList);
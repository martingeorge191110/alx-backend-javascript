interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Laban',
  lastName: 'Kibet',
  age: 99,
  location: 'Madagascar'
};

const student2: Student = {
  firstName: 'Rotich',
  lastName: 'Laban',
  age: 33,
  location: 'Cairo'
};

const studentList: Student[] = [student1, student2];

const table = document.getElementById('studentTable') as HTMLTableElement;

studentList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell(0);
  const locationCell = row.insertCell(1);

  firstNameCell.innerHTML = student.firstName;
  locationCell.innerHTML = student.location;
})

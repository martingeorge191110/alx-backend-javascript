const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  const db = fs.readFileSync(path, 'utf8').split('\n').map((row) => row.split(','));
  const students = db.slice(1, -1);
  const fields = {};
  for (const student of students) {
    if (fields[student[3]]) {
      fields[student[3]].push(student[0]);
    } else {
      fields[student[3]] = [student[0]];
    }
  }

  console.log(`Number of students: ${students.length}`);
  for (const [key, value] of Object.entries(fields)) {
    console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
  }
}
module.exports = countStudents;

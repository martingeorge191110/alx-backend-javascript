const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  const DB = fs.readFileSync(path, 'utf8').split('\n').map((row) => row.split(','));
  const students = DB.slice(1, -1);
  const fields = {};
  for (const ele of eles) {
    if (fields[ele[3]]) {
      fields[ele[3]].push(ele[0]);
    } else {
      fields[ele[3]] = [ele[0]];
    }
  }

  console.log(`Number of students: ${students.length}`);
  for (const [key, value] of Object.entries(fields)) {
    console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
  }
}
module.exports = countStudents;

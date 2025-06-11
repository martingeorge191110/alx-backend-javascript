const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, payload) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (payload) {
      const DB = payload.split('\n').map((row) => row.split(','));
      const students = DB.slice(1, -1);
      const obj = {};
      for (const ele of students) {
        if (obj[ele[3]]) {
          obj[ele[3]].push(ele[0]);
        } else {
          obj[ele[3]] = [ele[0]];
        }
      }

      console.log(`Number of students: ${students.length}`);
      for (const [key, value] of Object.entries(obj)) {
        console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;

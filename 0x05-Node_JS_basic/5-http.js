const fs = require('fs');
const http = require('http');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const db = data.split('\n').map((row) => row.split(','));
      const students = db.slice(1, -1);
      const fields = {};
      const response = [];
      for (const student of students) {
        if (fields[student[3]]) {
          fields[student[3]].push(student[0]);
        } else {
          fields[student[3]] = [student[0]];
        }
      }

      response.push(`Number of students: ${students.length}`);
      for (const [key, value] of Object.entries(fields)) {
        response.push(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
      }
      resolve(response);
    }
  });
});

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    const response = ['This is the list of our students'];
    countStudents(process.argv[2])
      .then((report) => {
        response.push(...report);
        res.end(response.join('\n'));
      })
      .catch(() => {
        response.push('Cannot load the database');
        res.end(response.join('\n'));
      });
  }
});

app.listen(1245);

module.exports = app;

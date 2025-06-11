const fs = require('fs');
const http = require('http');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, payload) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (payload) {
      const DB = payload.split('\n').map((row) => row.split(','));
      const students = DB.slice(1, -1);
      const obj = {};
      const resp = [];
      for (const ele of students) {
        if (obj[ele[3]]) {
          obj[ele[3]].push(ele[0]);
        } else {
          obj[ele[3]] = [ele[0]];
        }
      }

      resp.push(`Number of students: ${students.length}`);
      for (const [key, value] of Object.entries(fields)) {
        resp.push(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
      }
      resolve(resp);
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

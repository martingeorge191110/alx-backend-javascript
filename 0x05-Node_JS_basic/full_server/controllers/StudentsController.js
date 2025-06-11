import readDatabase from '../utils';

class StudentController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((allStudents) => {
        const report = ['This is the list of our students'];
        for (const [key, value] of Object.entries(allStudents)) {
          report.push(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
        }
        response.status(200).send(report.join('\n'));
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(process.argv[2])
      .then((allStudents) => {
        response.status(200).send(`List: ${allStudents[major].join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentController;

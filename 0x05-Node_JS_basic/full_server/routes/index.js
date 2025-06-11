import AppController from '../controllers/AppController';
import StudentController from '../controllers/StudentsController';

const mountRoutes = (app) => {
  app.get('/', AppController.getHomePage);
  app.get('/students', StudentController.getAllStudents);
  app.get('/students/:major', StudentController.getAllStudentsByMajor);
};

export default mountRoutes;

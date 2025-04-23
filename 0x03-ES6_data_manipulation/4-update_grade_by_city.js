export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const students = studentsList.filter((student) => student.location === city);
  const studentsNewGrades = students.map((student) => ({
    id: student.id,
    firstName: student.firstName,
    location: student.location,
    grade: (newGrades.filter((grade) => grade.studentId === student.id).pop() || { grade: 'N/A' }).grade,
  }));
  return (studentsNewGrades);
}

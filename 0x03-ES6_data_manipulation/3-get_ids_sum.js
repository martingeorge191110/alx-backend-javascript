export default function getStudentIdsSum(studentsList) {
  return studentsList.reduce((acc, curr) => acc + curr.id, 0);
}

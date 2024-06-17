// Data Structure 👇
const studentsData = ["jordan", "erick", "john", "michel"];

// Algorithm for finding a specific user
const findStudent = (allStudents, studentName) => {
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] === studentName) {
      return 1;
    }
  }
  return -1;
};

console.log(findStudent(studentsData, "erick"));

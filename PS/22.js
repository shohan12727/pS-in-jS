const student = {
  name: "Ashraful Islam Shohan",
  age: 20,
  university: {
    name: "North South University",
    location: {
      city: "Dhaka",
      country: "Bangladesh"
    },
    departments: {
      cse: {
        head: "Dr. Rahman",
        totalStudents: 1200,
        labs: {
          aiLab: {
            computers: 30,
            supervisor: "Mr. Karim"
          },
          roboticsLab: {
            robots: 5,
            supervisor: "Ms. Jahan"
          }
        }
      }
    }
  },
  hobbies: ["coding", "robotics", "reading"]
};
console.log(student['hobbies']);
// student['hobbies'] = 'cricket' ;
// console.log(student['hobbies']);
console.log(student['hobbies'][2]);
console.log(student.hobbies[0]);
console.log(student.university.name);
console.log(student['university']['name']);






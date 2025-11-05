// Oops! This factory function exposes the students array.
// Can you make it private using closure?

const createCourse = (topic, instructor) => {
  // students array is now private to this function scope
  const students = [];

  return {
    topic,
    instructor,
    
    addStudent(name) {
      students.push(name);
    },

    removeStudent(name) {
      const index = students.indexOf(name);
      if (index !== -1) {
        students.splice(index, 1);
      }
    },

    getStudents() {
      // return a copy to prevent external mutation
      return [...students];
    }
  };
};


module.exports = {
  createCourse,
};

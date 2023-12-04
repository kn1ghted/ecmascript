// Create iterable sets
const studentList = new Set();

// Add element to list
studentList.add('Ed');

// Add multiple elements to list in single line
studentList.add('John').add('Peter');

// Add item of different type
studentList.add(5);

// Some tests
console.log('The student list is: ');
console.log(studentList);
console.log('The student list has the item Ed: ');
console.log(studentList.has('Ed'));
console.log('The student list number of elements: ');
console.log(studentList.size);
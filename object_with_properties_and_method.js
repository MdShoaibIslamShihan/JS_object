/*
creating Object with properties and methods
*/

const std = {
    name: "Lio",
    age: 21,
    subject: ['Math', 'Physics', 'Chemistry', 'ICT', 'English', 'Bangla'],
    greet: function() {
        console.log(`Hi! I am ${this.name}. Nice to meet you.`);
    },    // this. indicate this object
}

std.greet();  // output- Hi! I am Lio. Nice to meet you.
console.log(std);  
        /*
        {
  name: 'Lio',
  age: 21,
  subject: [ 'Math', 'Physics', 'Chemistry', 'ICT', 'English', 'Bangla' ],
  greet: [Function: greet]
}
        */

console.log(std.subject); //subject is a property here
// output- [ 'Math', 'Physics', 'Chemistry', 'ICT', 'English', 'Bangla' ]   ....result of the array....
console.log(std.name);  // Lio
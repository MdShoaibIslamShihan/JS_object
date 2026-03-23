/*...assessing Properties... */ 
// Properties can be assess by two way- Dot. notation and Bracket[] notation

let book = {
    author: "Shihan",
    title: "Improve yourself",
    pages: 96,
};

console.log(book.title); // Dot notation
console.log(book["author"]); // bracket notation


/*...updating/modifying properties... */

book.pages = 100;       // using Dot notation
console.log(book.pages);

book.title = "Try to be rich";      // using Bracket notation
console.log(book["title"]);

book.title = "Are you there?";
console.log(book["title"]);     // Are you there?

/*...Adding new properties into the object... */

const profile = {
    name: 'Lobster',
    age: 33,
    gender: 'Male',
    location: 'Rajshahi',
}

console.log(profile);

profile.religion = 'Islam';
console.log(profile);       //Update profile
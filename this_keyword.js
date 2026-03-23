/*..."this" keywords ... */

// "this is a special keywords which indicates current object"

const profile = {
    name: 'Roni',
    age: 15,
    introduce: function() {
        console.log(`Hi! my name is ${this.name}`);
        console.log(`and I am ${this.age} years old`);
    }
};
profile.introduce(); 

/* Hi! my name is Roni
and I am 15 years old */

// assessing multiple properties using 'this' keyword

const book = {
    title: "Javascript guide",
    author: "Jack ma",
    pages: 289,
    details: function() {
        console.log(`${this.title} by ${this.author} has ${this.pages} pages`);
    }
}
book.details();

/* Javascript guide by Jack ma has 289 pages */

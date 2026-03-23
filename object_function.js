/*
'function' can be kept inside the object.
It is called Method
*/

let car = {
    brand: "Toyota",
    model: 'Corolla',
    year: 2003,
    start: function() {
        console.log('Car started');
    },
    stop: function() {
        console.log("Car stopped");
    },
};

car.start();   // output- Car started
car.stop();    // output- Car stopped
console.log(car.brand);     // output- Toyota
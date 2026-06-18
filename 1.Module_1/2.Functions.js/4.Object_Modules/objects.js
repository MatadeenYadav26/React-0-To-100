const person = {
    age:21,
    firstName:"Aman",
    address:{
        city:"Surat",
        country:"India"
    },
    IsActive: true,
    books:['b1','b2'],
    walk: function(){
        console.log("Person is Walking",this.firstName);  // we use this keyword to access an objects element.
    }
};

console.log(person.age);
console.log(person.firstName);
person.firstName='Matadeen';
console.log(person.firstName);
person['age']=18;
console.log(person['age']);
console.log(person.IsActive);
console.log(person['address']);

person.walk(); // calling for walk from person.
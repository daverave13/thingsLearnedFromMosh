
// Run me with node


let person = {
    name: 'David',
    age: 28
};

// Dot Notation
person.name = 'John';

// Bracket Notation
person['age'] = 99;
let selection = 'name';
person[selection] = 'Mary';


console.log(person);

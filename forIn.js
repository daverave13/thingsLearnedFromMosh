let person = {
    name: "David",
    age: 28
}

for (let key in person) {
    console.log(`${key}: `, person[key]);   
}

const colors = ['red','blue','green'];

for (let index in colors) {
    console.log(`${index}: `, colors[index]); 
}




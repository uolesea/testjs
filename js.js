alert ('Warning! This page contain sensitive information! Are you sure you want to continue?');
const todos = [
    {
    id: 1,
    text: 'take out trash',
    isCompleted: true
    },
    {
    id: 2,
    text: 'meeting with boss',
    isCompleted: true
    },
    {
    id: 3,
    text: 'dentist app',
    isCompleted: false
    }
];
console.log(todos);
console.log(todos[1].text);

for(let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0;
while(i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

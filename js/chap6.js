let number1 = 10;
let value = document.querySelector('#value');
value.append('The value of a is ' + number1);
value.innerHTML += '<br>';
value.innerHTML += '<br>';
value.append('The value of ++a is ' + ++number1);
value.innerHTML += '<br>';
value.append('Now the value of a is ' + number1);
value.innerHTML += '<br>';
value.innerHTML += '<br>';
value.append('The value of a++ is ' + number1++);
value.innerHTML += '<br>';
value.append('Now the value of a is ' + number1);
value.innerHTML += '<br>';
value.innerHTML += '<br>';
value.append('The value of --a is ' + --number1);
value.innerHTML += '<br>';
value.append('Now the value of a is ' + number1);
value.innerHTML += '<br>';
value.innerHTML += '<br>';
value.append('The value of a-- is ' + number1--);
value.innerHTML += '<br>';
value.append('Now the value of a is ' + number1);
value.innerHTML += '<br>';
value.innerHTML += '<br>';
let a = 2, b = 1;
value.append('The value of --a is ' + --a);
value.innerHTML += '<br>';
value.append('The value of --a - --b is ' + (--a - --b));
value.innerHTML += '<br>';
value.append('The value of --a - --b + ++b is ' + (--a - --b + ++b));
value.innerHTML += '<br>';
let result = --a - --b + ++b + b--;
value.append('The value of --a - --b + ++b + b-- is ' + result);
value.innerHTML += '<br>';

let us = prompt('Enter Your Name');
value.append('Welcome ' + us);
value.innerHTML += '<br>';
let tableNumber2 = prompt("Enter A Number")
for (let i = 1; i <= 10; i++) {
    if (!isNaN(tableNumber2) && tableNumber2 !== null && tableNumber2 !== '') {
        let result = i * tableNumber2;
        value.append(tableNumber2 + ' X ' + i + ' = ' + result + '\n');
        value.innerHTML += '<br>';
    } else {
        let result = i * 5;
        value.append(5 + ' X ' + i + ' = ' + result + '\n');
        value.innerHTML += '<br>';
    }
}
let subCunter = 3;
let sotm = 0;
let sub1 = 'English';
let sub2 = 'Urdu';
let sub3 = 'Computer';
let stm = 100;
let sub1Marks = parseInt(prompt('Enter marks of 1st Subject'));
let sub2Marks = parseInt(prompt('Enter marks of 2nd Subject'));
let sub3Marks = parseInt(prompt('Enter marks of 3rd Subject'));
sotm = sub1Marks + sub2Marks;
let body = document.querySelector('table tbody');
body.innerHTML += '<tr><td>' + sub1 + '</td><td>' + sub1Marks + '</td><td>' + stm + '</td><td>' + (sub1Marks / stm) * stm + '%</td></tr>';
body.innerHTML += '<tr><td>' + sub2 + '</td><td>' + sub2Marks + '</td><td>' + stm + '</td><td>' + (sub2Marks / stm) * stm + '%</td></tr>';
body.innerHTML += '<tr><td>' + sub3 + '</td><td>' + sub3Marks + '</td><td>' + stm + '</td><td>' + (sub3Marks / stm) * stm + '%</td></tr>';
body.innerHTML += '<tr><td>Total Marks</td><td>' + (sub1Marks + sub2Marks + sub3Marks) + '</td><td>' + (stm * 3) + '</td><td>' + (((sub1Marks + sub2Marks) + sub3Marks) / (stm * 3)) * stm + '%</td></tr>';

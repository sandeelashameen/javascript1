let num11 = 8;
let num2 = 2;
let add1 = num11 + num2;
document.querySelector('#add').innerHTML = 'Sum of ' + num11 + ' + ' + num2 + ' is ' + add1;
let sub1 = num11 - num2;
document.querySelector('#sub').innerHTML = 'Sum of ' + num11 + ' - ' + num2 + ' is ' + sub1;
let multi1 = num11 * num2;
document.querySelector('#multi').innerHTML = 'Sum of ' + num11 + ' * ' + num2 + ' is ' + multi1;
let divide1 = num11 / num2;
document.querySelector('#divide').innerHTML = 'Sum of ' + num11 + ' / ' + num2 + ' is ' + divide1;

let num12;
document.querySelector('#chap5q3p1').innerHTML = 'Value after variable declaration is: ' + num12;
num12 = 6;
document.querySelector('#chap5q3p2').innerHTML = 'Initial value: ' + num12;
num12++;
document.querySelector('#chap5q3p3').innerHTML = 'Value after increment is: ' + num12;
num12 += 7;
document.querySelector('#chap5q3p4').innerHTML = 'Value after addition is: ' + num12;
num12--;
document.querySelector('#chap5q3p5').innerHTML = 'Value after decrement is: ' + num12;
num12 %= 3;
document.querySelector('#chap5q3p6').innerHTML = 'The remainder is: ' + num12;
let ticket1 = 600;
ticket1 *= 5;
document.querySelector('#chap5q4').innerHTML = 'The Total cost to buy 5 tickets to a movie is ' + ticket1 + 'PKR.';
let tableNumber1 = 4
for (let i = 1; i <= 10; i++) {
    let result = i * tableNumber1;
    document.querySelector('#chap5q5').append(tableNumber1 + ' X ' + i + ' = ' + result + '\n');
    document.querySelector('#chap5q5').innerHTML += '<br>';
}

let celsius = 50;
let convertF = (celsius * 9 / 5) + 32;
document.querySelector('#faren').innerHTML = celsius + 'oC ' + convertF + 'oF';
let fahrenheit = 100;
let convertC = (fahrenheit - 32) * 5 / 9;
document.querySelector('#celsius').innerHTML = fahrenheit + 'oF ' + convertC + 'oC';

let item1 = 400;
let quantity1 = 3;
let item2 = 123;
let quantity2 = 2;
let shipping = 100;
let cart = ((item1 * quantity1) + (item2 * quantity2)) + shipping;

document.querySelector('#i1').innerHTML = 'Price of Item 1 is' + item1;
document.querySelector('#q1').innerHTML = 'Quantity of item 1 is ' + quantity1;
document.querySelector('#i2').innerHTML = 'Price of Item 2 is' + item2;
document.querySelector('#q2').innerHTML = 'Quantity of item 2 is ' + quantity2;
document.querySelector('#shipping').innerHTML = 'Shipping Charges ' + shipping;
document.querySelector('#cart').innerHTML = 'Total Cost of your order is  ' + cart;

let totalMarks = 1000;
let obtainedMarks = 783;
let percnt = (obtainedMarks / totalMarks) * 100;

document.querySelector('#tm').innerHTML = 'Total Marks are: ' + totalMarks;
document.querySelector('#om').innerHTML = 'Obtained Marks are: ' + obtainedMarks;
document.querySelector('#prcnt').innerHTML = 'Percentage: ' + percnt;

let totalCurrency = (10 * 104.80) + (25 * 28)
document.querySelector('#tc').innerHTML = "Total Currency is " + totalCurrency;

let q10 = 3;
q10 = ((q10 + 5) * 10) / 2;
document.querySelector('#chap5q10').innerHTML = 'the answer of question 10 is ' + q10;

let cy = new Date().getFullYear();
let uy = prompt('Enter you birth Year')
let age = cy - uy;
document.querySelector('#cy').innerHTML = 'Current year : ' + cy;
document.querySelector('#cy').innerHTML = 'Birth year : ' + uy;
document.querySelector('#cy').innerHTML = 'Your Age is : ' + age;

let radius = 25;
let circum = (radius * 2 * Math. PI);
let area = (radius * radius * Math. PI);
document.querySelector('#radius').innerHTML= 'Radius is '+ radius;
document.querySelector('#circum').innerHTML= 'Circumference is '+ circum;
document.querySelector('#area').innerHTML= 'Area is '+ area;

let favSnack = 'Dairy Milk';
let ca = 20;
let ma = 60;
let amount = 50;
let ts = (amount * ma) - ca;

document.querySelector('#snack').innerHTML = 'Fav Snack is ' + favSnack;
document.querySelector('#ca').innerHTML = 'Current Age is ' + ca;
document.querySelector('#ma').innerHTML = 'Estimated Age is ' + ma;
document.querySelector('#amount').innerHTML = 'amount of one '+ favSnack + ' is '+ amount;
document.querySelector('#result').innerHTML = 'You will need ' + ts + ' ' + favSnack + ' to last until the ripe old age of ' + ma;

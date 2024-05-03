let name = "juju";
let age = 16;


if (name) 
{
    console.log("Hello", name);
} 
else 
{
    console.log("Name is not valid");
}

if (age >= 18)
{
    console.log(name, "has an ID");
}
else
{
    console.log(name, "doesn't have an ID");
}


let score = 78;
let grade;

if (score >= 85 && score <=100)
{
    console.log (name, "'s score is Grade A");
    grade = "A";
}
else if (score >= 75 && score <= 84)
{
    console.log (name, "'s score is Grade B");
    grade = "B";
}
else if (score >=0 && score <= 74)
{
    console.log (name, "'s score is Grade C");
    grade = "C";
}
else 
{
    console.log (name, "'s score is Invalid")
}

switch(grade)
{
    case ('A'):
        console.log("Excellent");
        break;
    case ('B'):
        console.log("Great");
        break;
    case ('C'):
        console.log("Good");
        break;
    default:
        console.log("Error");
        break;
}

let car = "bmw"

car = car.toUpperCase();

if (car === "BMW" || car === "Toyota")
{
    console.log (car, "is Awesome");
}
else
{
    console.log (car, "Is not Awesome");
}

//ternary 
let value = 1;
const result_1 = value == 1 ? true : false;
console.log(result_1);

const result_2 = score >= 74 && score <= 100 ? "Passed" : "Flunked";
console.log(result_2);

const car_result = car === "BMW" || car === "TOYOTA" ? "Car is awesome" : "Car is not awesome";
console.log(car_result);


for (let i = 0; i < 4; i++)
{
    if(car.charAt(i) !== '')
    {
        console.log(car.charAt(i));
    }
    else
    {
        console.log("null");
    }
}

let counter = 0;

do {
    if(car.charAt(counter) !== '')
    {
        console.log(car.charAt(counter));
    }
    else
    {
        console.log("null");
    }

    counter++;
} while (counter < 4)

isLooping = true;

do {
    let value_2 = Math.floor(Math.random() * 10);
    console.log(value_2);
    if (value_2 === 0)
    {
        isLooping = false;
    }

} while (isLooping)

let currentTime = new Date().getTime();

let lastDigit = currentTime % 10;

console.log("Random number:", lastDigit);


//

for (let i = 2; i <= 10; i+=2)
{
    console.log(i);
}

for (let i = 0; i<= 10; i++)
{
    if (i %2 === 0 && i != 0)
    {
        console.log(i);
    }
}

let CounterLoop = true;

let counter_1 = 0;
let counter_2 = 0;
let counter_3 = 0;
let counter_4 = 0;
let counter_5 = 0;

// 
while (CounterLoop)
{
    let currentTime = new Date().getTime();

    let lastDigit = currentTime % 10;
    
    if(lastDigit == 1)
    {
        counter_1++;
    }

    if(lastDigit == 2)
    {
        counter_2++;
    }

    if(lastDigit == 3)
    {
        counter_3++;
    }

    if(lastDigit == 4)
    {
        counter_4++;
    }

    if(lastDigit == 5)
    {
        counter_5++;
    }

    if (lastDigit == 6)
    {
        CounterLoop = false;
    }

    var FPS_Average = (counter_1+counter_2+counter_3+counter_4+counter_5)/ 5;
}
console.log("FPS_1:", counter_1, "FPS_2:", counter_2,"FPS_3:", counter_3,"FPS_4:", counter_4);
console.log("FPS Average:", FPS_Average);


// random number generator 

let random_number;

//stops at 2 and skips at 3;
for(i = 0; i<100 ; i++)
{
    random_number = Math.floor(Math.random() * 10);

    if (random_number == 2)
    {
        console.log(random_number);
        break;
    }
    if ( random_number == 3)
    {
        continue;
    }
    console.log(random_number);

}


// ======= excercis =======

// q1

var temp_c = 60
var temp_f = (temp_c * 9/5) + 32

console.log("Temp C =", temp_c, "Temp F = ", temp_f);

// q2

var number = 25;
if (number % 2 == 0)
{
    console.log(number, "is an Even Number")
}
else 
{
    console.log(number, "is an Odd Number")
}

// q3
var number = 15;
var count = 0;

for (var i = 1; i <= number; i++)
{
    if (number % i == 0)
    {
        count++;
    }
}

if (count == 2) {
    console.log(number, "is a prime number");
} else {
    console.log(number, "is not a prime number");
}

// second way
isPrime = true;

for (var i = 2; i < number; i++)
{
    if(number % i == 0)
    {
        isPrime = false;
        break;
    }
}

if(isPrime)
{
    console.log(number, "is a prime number");
}
else
{
    console.log(number, "is not a prime number");
}


//q4

var number = 5;
var result = 0;

for (var i = 1; i <= number; i++)
{
    result += i;
}

console.log("SUM is  : ", result);

// q5 

var number = 6;
var result = 1;

for (var i = 1; i <= number; i++)
{
    result *= i;
}

console.log("Factorial is  : ", result);

// q6

var number = 15;

var num1 = 0;
var num2 = 1;
var num3 = 0;

for (var i = 0; i <= number; i++)
{
    console.log("fibbonaci :", i,"is :", num1 );

    num3 = num2 + num1; 
    num1 = num2;
    num2 = num3;

}

var name_3 = "13331";
name_3 = name_3.toString();
var isPalindrome = true;

for (var i = 0; i<= name_3.length/2; i++)
{
    if (name_3.charAt(i) !== name_3.charAt(name_3.length - i - 1))
    {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome)
{
    console.log(name_3, "is a palindrome")
}
else
{
    console.log(name_3, "is not palindrome");
}

let name_4 = "aries dimas yudhistira"
let name_temp = name_4.split(' ');
var counter_new = 0;

for (let i = 0; i < name_4.length; i++)
{
    if (name_4.charAt(i) == 'a')
    {
        counter_new++;
    }
}
console.log(counter_new)

// 0 1 1 2 3 5 8
// data types : 

// 1. number 

var a= 20;
var b= 40;

console.log(a);

var a = 34.45;
console.log(a);

var a = "hello";
console.log(a);

var a = true;  // false
console.log(a);

// let and const 

let m = 20;
// let m ='hello';
m = 'hello';
console.log(m);

const n =20;
// const n= 30;
// n=30;
console.log(n);

// operators ...

// 1. aithmatic operations 

var a= 10;
var b=10;
var z= 7;
console.log(a+b);

var c= "hello";
var d = "hii";
console.log(c+d);

console.log(a+c);
console.log(c+a);
console.log(c+a+b);
console.log(a+b+c);

console.log(a-b);
console.log(c-b);

// NaN (Not a Number)

console.log(a*b);
console.log(c*b);

var y = parseInt(a/z);
console.log(y);

console.log(a**b);
a+=1;
console.log(a++);
console.log(a);
b-=1;
b--;
console.log(b)

console.log(a%b);

// Assignment operators 
// 1. = 
// 2. +=
// 3. -=
// 4. *=
// 5. /=
// 6. %=
// 7. **=

a%=b;
a= a%b;
console.log(a)


// logical operators 
// 1. and ( && )

a= false
b= false
console.log(a && b);

// 2. or operator (||)

a= false
b= true
console.log(a || b);

// 3. not (!)

console.log(!a);

// conditional operators 

// 1. check( ==)

var a=97;
var b='97';
console.log(a==b);

console.log(a===b);

// 2. !=
// 3. !==

// > greater than 
// < less than 

// >= , <=

// ?

console.log(a===b?'hello':'hii')

// object 

var  data1 = {name: "Tejender" , age: 22}
console.log(data1);

var  data2 = ['apple','bananna', 'kiwi'];
console.log(data2)

var data3 = new Date();
console.log(data3);

console.log(typeof(a));
console.log(typeof(data1));
console.log(typeof(data2));
console.log(typeof(data3));

// Strings 

var a = 'I Am A Softeware Engineer';
console.log(a.length);

console.log(a.toUpperCase());

a=a.toLowerCase()
console.log(a);

a=a.replace('engineer','doctor')
console.log(a);
a=a.replace('doctor','engineer')
console.log(a);

var b ="hello world"

var c= a.concat(" "+b);
console.log(c);

var d =     "     heloo      ";
console.log(d);

console.log(d+"hii")
console.log(d.trimEnd()+"hii")
console.log(d.trim())

var a = 'I Am A Softeware Engineer';

var d = a.length; (24)

console.log();

var e =a.slice(d-9,d-1)

console.log(a.substring(6,-5));

console.log(a.substr(0,10));

console.log(a.slice(0,0));
console.log(a.slice(-10));

// console.log(a.reverse());

var a =['a','b','c']
console.log(a.reverse());


// Arrays 

var a =['a','b','c','d','e','f']
console.log(a.length)

a.push('g')
console.log(a)

a.pop()
console.log(a)

a.shift()
console.log(a);

a.unshift('t')
console.log(a);

a[2]='m';
console.log(a);

console.log(a.slice(1,3));

console.log(a);

console.log(a.toString());









































































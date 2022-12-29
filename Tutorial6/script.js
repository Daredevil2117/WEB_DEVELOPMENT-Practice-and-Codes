

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

console.log('hello');

// Function ... 

function myFunction(a,b){
  return a*b;
}

console.log(myFunction(10,20));


var myFunction = function(a,b){
  return a+b;
}

console.log(myFunction(30,40))

// Arrow Functions 



var hello = (a,b) => { return a+b; }

console.log(hello(10,20));

// if else 

var a ="hello2";

if(a=='hello'){
  console.log('yes')
}

else if(a=='hello1'){
  console.log('yes123')

}

else{
  console.log('no')

}

// date 

var date = new Date()
console.log(date);

console.log(date.getFullYear())
console.log(date.getMonth())  
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())

console.log(date.setFullYear(2018));
console.log(date.setHours(14));
console.log(date);


var a = "+";
var a1=10;
var a2=20;
var result=0;

switch(a){
  case "+" : result =a1+a2;break;
  case "-" : result =a1-a2;break;
  case "*" : result =a1*a2;break;
  case "/" : result =a1/a2;break;
  default:result=0;
}

console.log(result);

// Loops 

arr1=['a','b','c','d'];

for(var i=0; i<arr1.length; i++){
  console.log(arr1[i]);
}


// in keyword 


for(var i in arr1){
  console.log(arr1[i]);
}


for(var i of arr1){
  console.log(i);
}

var i =0;

while(i<10){
  console.log(i);
  i++;
}

// "use strict";

// var t=['1','2','3'];
// g=5;
// console.log(g);

// ---------------------

// Hoisting 


 x="Tejender";
 var x;

//  ------------------

var arrr=['a','b','c','d'];

arrr.map(function(element,index){
  console.log(index,element);
})

arrr.map(myFunction1)
function myFunction1(item,index){
  console.log(index,item);
}

arrr.map((element,i)=>
 console.log(element,i)
)

var arr9=arrr.filter((item)=> item != 'a');
console.log(arr9);
console.log(arrr);


arr10=[1,2,3,4,5]

ar11= arr10.map((item)=> item*item)
console.log(ar11);

arr10.forEach((item)=>console.log(item*item));


class FindArea {
  constructor(l,b){
    this.l=l
    this.b=b
  }
  area(){
    return this.l*this.b
  }
}

var t = new FindArea(20,30);
console.log(t.area());









 

































































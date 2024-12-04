let num: number;
num=10;
console.log(num);

let name: string= "Bikrant";
console.log(name);

let x: number= "XYZ";
console.log(x);


//Array Type
let numOfSubjects: number[]= [30,50,20,12];
console.log(numOfSubjects);
console.log(numOfSubjects[3]);

//Object Type
let person :{
    name: string,
    age: number,
    isMale: boolean,
    address: string
}= {
    name: "Bikrant",
    age:24,
    isMale:true,
    address: "West Bengal"
}

console.log(person);
console.log(person.name);
console.log(person.test);  //Property doesn't exists


//Function Annotation
// let helloWorld= (variable:type)=> type;

let helloWorld=function(name: string){
    return `Hello ${name}!!!`;
}

console.log(helloWorld("Rahul"));

//arrow function
let arrowFunctionDemo=(name: string, age: number)=>{
    return `Hello Everyone, I am ${name}, and I am ${age} years old!!`;
}

console.log(arrowFunctionDemo("Bikrant",24));  // Hello Everyone, I am Bikrant, and I am 24 years old!!
console.log(arrowFunctionDemo("Bikrant","24"));  // Argument of type 'string' is not assignable to parameter of type 'number'.







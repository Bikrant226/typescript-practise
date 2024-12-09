let num =10; //It is same as let num: number=10, here TS infers num to be number
console.log(typeof(num));

let person="Bikrant"; //It is same as let person: string="Bikrant", here TS infers person to be string
console.log(typeof(person));

function originalFunction(count: number){
    return count +1;
}

/*is same as
function originalFunction(count: number): number{
    return count +1;
}
*/

//Best common type algorithm
let y=[1,2,4,null]; // TS will infer y to be (number | null)
let z=["apple","boy",897,"girl"]; //TS will infer z to be (string | number)
console.log(typeof(y));




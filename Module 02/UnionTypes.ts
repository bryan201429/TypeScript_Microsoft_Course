
let multipleType:number|boolean;

multipleType=5;
multipleType=true;
// multipleType="Two";    //! Invalid

function add(x:number|string , y:number|string){
    if(typeof x==='number' && typeof y==='number'){
        return x+y;
    }
    if(typeof x==='string' && typeof     y==='string'){
        return x.concat(y);
    }
    throw new Error('Both parameters must be the same type');
}

console.log(add(5,4));
console.log(add('3','a'));
console.log(add(2,'60'));
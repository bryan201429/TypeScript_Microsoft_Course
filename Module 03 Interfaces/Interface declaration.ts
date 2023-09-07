interface IceCream{
    flavor: string;
    scoops: number;
}

function tooManyScoops(desert:IceCream){
    if(desert.scoops>=4){
        return desert.scoops + ' is too many scoops!';
    } else{
        return 'Your order will be ready';
    }
}

let myIceCream:IceCream={
    flavor:'vanilla',
    scoops:2
}

// console.log(myIceCream)


console.log(tooManyScoops({flavor:'chocolate',scoops:4}))
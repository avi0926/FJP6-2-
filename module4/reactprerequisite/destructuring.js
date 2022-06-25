// Array 
// let arr = [1,2,3];

// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
// console.log(a);
// console.log(b);
// console.log(c);

// let arr = [1,2,3];
// let [a,b,c,d] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// let arr = [1,2,3];
// let [a,b=0,c,d=12] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// Object 
// let obj = {
//     name:"Adam",
//     state:"New York",
//     pincode:12345
// }

// let {name,state} = obj;
// console.log(name);
// console.log(state);

// let {state,name} = obj;
// console.log(name);
// console.log(state);

// let {name:firstname,state} = obj;
// console.log(firstname); //now we cannot use name variable to print name
// console.log(state);

//nested obj
let obj = {
    name:"Adam",
    address:{
        country:"USA",
        state:{
            stateName:"New York",
            pincode:12345
        }
    }
}

let {name} = obj;
console.log(name);

let {address:{country:cd}} = obj;
console.log(cd);

let {address:{state:{pincode}}} = obj;
console.log(pincode);
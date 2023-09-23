console.log('Welcome to tutorial 9.js');

// let a = 28;
// a++;
// a+=1;
// console.log(a);

// // For Loop
// for(i=0; i<10; i++)
// console.log(i+1);

// While Loop
// let j = 0;
// while (j < 100) {
//     console.log(j+1);
//     j +=1;
// }

// let k = 0;
// do {
//     if(k===5){
//         k +=1;
//         continue;
//     }
//     console.log(k+1);
//     k  +=1;
// }while(k < 10);

let arr = [2,6,9,8,45,78];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }

arr.forEach(function(element, index, array){
    console.log(element, index, array);
})

// arr.forEach(function(element){
//     console.log(element);
// });

let obj = {
    name: 'Gaurav',
    age: 20,
    type: 'Regular',
    os: 'Windows 11'
}
for(let key in obj){
    console.log(`${key} of object is ${obj[key]}`);
}

console.log('done');
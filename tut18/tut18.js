console.log('Welcome to tutorial 18.js');

// let btn = document.getElementById('btn');
// btn.addEventListener('click', func1);
// btn.addEventListener('dblclick', func2);
// btn.addEventListener('mousedown', func3);

// function func1(e){
//     console.log("Thanks", e);
//     e.preventDefault();
// }
// function func2(e){
//     console.log("Thanks for double click", e);
//     e.preventDefault();
// }
// function func3(e){
//     console.log("Thanks for mousedown ", e);
//     e.preventDefault();
// }

// document.querySelector('.no').addEventListener('mouseenter',function(){
//     console.log('You entered no')
// });

// document.querySelector('.no').addEventListener('mouseleave',function(){
//     console.log('You exited no')
// });

document.querySelector('.container').addEventListener('mousemove',function(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX}, 154)`;
    console.log('You triggered mouse move event');
});
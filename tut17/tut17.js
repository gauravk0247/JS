console.log('Welcome to tutorial 17.js');

document.getElementById('heading').addEventListener('mouseover',function(e){
    let variable;
    console.log('You have clicked the heading');
    variable = e.target;
    variable = e.target.className;
    variable = e.target.classList;
    variable = Array.from(e.target.classList);

    variable = e.target.id;
    variable = e.offsetX;
    variable = e.offsetY;
    variable = e.clientX;
    variable = e.clientY;
    console.log(variable);
    // location.href = '//google.com'
});
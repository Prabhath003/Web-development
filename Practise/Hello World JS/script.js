let helloBtn = document.querySelector('button');
helloBtn.addEventListener('click', inputMsg);

function inputMsg(){
    let name = prompt('Enter Name of Student');
    helloBtn.textContent = 'Roll No. 9: ' + name;
}
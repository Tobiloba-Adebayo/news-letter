let Btn = document.getElementById('Btn');
let inputBox = document.getElementById('inputBox');
let container = document.querySelector('.container');
let message = document.querySelector('.Message');
let notification = document.querySelector('.notification');

Btn.addEventListener('click', (e)=>{
    e.preventDefault();

    if(inputBox.innerHTML === ""){
        inputBox.classList.add('error');
    }

    if(inputBox.value != ""){
        let content = inputBox.value;
        inputBox.classList.remove('error');
        inputBox.classList.add('success');

        setInterval(function(){
            window.location.href = "Notif.html";
        },1000);
    };

    
});



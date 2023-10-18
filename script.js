// const list = document.querySelector('.list')
// const showList = document.querySelector('nav ul')
// menu.addEventListener('click',()=>{
//     showList.classList.toggle('showlist')
// })





  /*................login form.....................*/
const loginForm = document.querySelector('#loginform')
const loginuname = document.querySelector('#lusername');
const loginpwd = document.querySelector('#lpassword');

loginForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    loginValidateInputs()
})

function loginValidateInputs(){
    const usernameVal = loginuname.value.trim()
    const passwordVal = loginpwd.value.trim()
    const getUname = localStorage.getItem("username");
    const getPassword = localStorage.getItem("password");
    
    if (usernameVal === getUname && passwordVal === getPassword) {
        alert("Login Successfully!");
        window.location.href = "todolist.html";
    } else {
        alert("Invalid username or password.");
    }

    
}


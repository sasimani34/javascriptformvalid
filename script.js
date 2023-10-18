// const list = document.querySelector('.list')
// const showList = document.querySelector('nav ul')
// menu.addEventListener('click',()=>{
//     showList.classList.toggle('showlist')
// })



/*................signup form.....................*/
const form = document.querySelector('#form')
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit',(event)=>{
    
    
        event.preventDefault()
        validateInputs()
        alert("Registered Successfully!");
    
})

function validateInputs(){
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim()
    const passwordVal = password.value.trim()
    const cpasswordVal = cpassword.value.trim()
    let success = true

    if(usernameVal===''){
        success=false;
        setError(username,'Username is required')
    }
    else{
        localStorage.setItem("username", usernameVal);
        setSuccess(username)
    }

    if(emailVal===''){
        success = false;
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        success = false;
        setError(email,'Please enter a valid email')
    }
    else{
        setSuccess(email)
    }

    if(passwordVal === ''){
        success= false;
        setError(password,'Password is required')
    }
    else if(passwordVal.length<8){
        success = false;
        setError(password,'Password must be atleast 8 characters long')
    }
    else{
        
        setSuccess(password)
    }

    if(cpasswordVal === ''){
        success = false;
        setError(cpassword,'Confirm password is required')
    }
    else if(cpasswordVal!==passwordVal){
        success = false;
        setError(cpassword,'Password does not match')
    }
    else{
        localStorage.setItem("password", cpasswordVal);
        setSuccess(cpassword)
    }

    return success;

}

function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    console.log(errorElement)
    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


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

/*..............................toDoList.............................*/
var addbtn =document.querySelector("#add")
var listdiv =document.getElementById("todoList")
var input =document.getElementById("todoinput")

let todosarr = []

//window load
window.onload = ()=>{
    todosarr = JSON.parse(localStorage.getItem('todos')) || []
    todosarr.forEach(todo=>addtodolist(todo))
}


addbtn.addEventListener('click',()=>{
    
    todosarr.push(input.value)
    localStorage.setItem('todosarr',JSON.stringify(todosarr))
    addtodolist(input.value)
    input.value= ''
    
    
})
function addtodolist(todo){
    var paraele = document.createElement('p')
    paraele.innerText =todo
    paraele.innerHTML += "<button onclick='deleteitem(event)'>delete</button>"
    listdiv.appendChild(paraele)
    // listdiv.appendChild(paraele)
    // listdiv.innerHTML +=  "<button onclick='deleteitem(event)'>delete</button>"
}

function deleteitem(event){
    event.target.parentElement.remove()
}


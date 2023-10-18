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
    let success = true

    if(usernameVal===''){
        success=false;
        setError(loginuname,'Username is required')
    }
    else{
        setSuccess(loginuname)
    }

  
    if(passwordVal === ''){
        success= false;
        setError(loginpwd,'Password is required')
    }
    else if(passwordVal.length<8){
        success = false;
        setError(loginpwd,'Password must be atleast 8 characters long')
    }
    else{
        setSuccess(loginpwd)
    }

    return success;

}


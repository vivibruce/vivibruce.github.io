const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


function showError(input, message)
{
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input)
    }
    else{
        showError(input, 'Email is not valid')
    }
}

function showSuccess(input)
{
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function checkInput(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim()===''){
            showError(input,`${getInputFieldName(input)} is a required property`)
        }else{
            showSuccess(input)
        }
    })

}
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getInputFieldName(input)} must be atleast ${min} characters`)
    }else{
        showSuccess(input)
    }
}

function checkPasswordMatch(input1, input2){
    if(input1.value.length!==input2.value.length){
        showError(input2, 'Passwords do not match')
    }
}
function hasUppercase(input){
    // return (/[A-Z]/.test(input));
    return input.value!==input.value.toLowerCase();
}
function hasSpecialCharacter(input){
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return format.test(input.value);
    
}
function checkPasswordSpecs(input){
    if(hasUppercase(input)){
        showSuccess(input)
    }else{
        showError(input, 'should contain atleast one uppercase character, one special character')
    }
}

function getInputFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    //old implementstion
    // if(email.value==='')
    // {
    //     showError(email, 'Email is required')
    // }else if(!isValidEmail(email)){
    //     showError(email, 'Email is not valid')
    // }else{
    //     showSuccess(email)
    // }

    // if(username.value===''){
    //     showError(username,'Username is required')
    // }else{
    //     showSuccess(username)
    // }

    // if(password.value===''){
    //     showError(password,'Password is required')
    // }else{
    //     showSuccess(password)
    // }

    // if(password2.value===''){
    //     showError(password2,'Password 2 is required')
    // }else{
    //     showSuccess(password2)
    // }

    //new implementation
    checkInput([username, email, password, password2]);
    checkLength(username, 3,20);
    checkLength(password, 6,12);
    
    checkEmail(email);
    checkPasswordMatch(password, password2);
    // checkPasswordSpecs(password);

    
  
  });
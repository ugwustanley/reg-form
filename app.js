// variable declaration 
let fname = document.querySelector("#f_name");
let lname = document.querySelector("#l_name");
let contact = document.querySelector("#contact");
let email = document.querySelector("#email");
let dbirth = document.querySelector("#dbirth");
let nations = document.querySelector("#nations");
let state = document.querySelector("#state");
let error = document.querySelector(".error");

// this handles form validation
function formValidation(e){ 
    e.preventDefault();
    if(fname.value == ''){
        console.log('working')  
        error.innerHTML = '<h3>Please Enter a Valid First Name<h3>'
        errorHandler()
    }
    if(lname.value == ''){
        error.innerHTML = '<h3>Please Enter a Valid Last Name<h3>'
        errorHandler()
    }
    if(contact.value == ''){
        error.innerHTML = '<h3>Please Enter your contact details<h3>'
        errorHandler()
    }
    if(email.value == '' || email.value.length < 6){
        error.innerHTML = '<h3>Please Enter an email address<h3>'
        errorHandler()
    }
    if(dbirth.value == ''){
        error.innerHTML = '<h3>Please Enter a Valid date of birth <h3>'
        errorHandler()
    }
    if(nations.value == ''){
        error.innerHTML = '<h3>Please Select your country of origin<h3>'
        errorHandler()
    }
    if(state.value == ''){
        error.innerHTML = '<h3>Please Select your state of origin<h3>'
        errorHandler()
    }
}

// this handle error message display

function errorHandler(){
error.style.display = 'block'
setTimeout( function clear(){
    error.style.display = 'none'
}, 5000)
}




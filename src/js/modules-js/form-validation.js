

export default  function validateForm(event) {
    event.preventDefault ()

    let form = event.target;
    

    if(form.name.value.length == 0){
        form.name.setCustomValidity("Plese write your name")
        form.name.nextElementSibling.textContent = form.name.validationMessage;
        form.name.focus();
        
    } else {
            form.name.nextElementSibling.textContent = "";
            form.name.setCustomValidity("");

    }

    
    if (form.email.value.length == 0) {
        form.email.setCustomValidity("Please write your email")
        form.email.nextElementSibling.textContent = form.email.validationMessage;
        form.email.focus();
    } else if (!validEmail(form.email.value)){
        form.email.setCustomValidity("This email is not valid")
        form.email.nextElementSibling.textContent = form.email.validationMessage;
        form.email.focus();
    } else {
        form.email.nextElementSibling.textContent ="";
        form.email.setCustomValidity("");

    }
     
    
     if(form.message.value.length == 0){
        form.message.setCustomValidity("Please write me a message!!")
        form.message.nextElementSibling.textContent = form.message.validationMessage;
        form.message.focus();

    } else {
            form.message.nextElementSibling.textContent = "";
            form.message.setCustomValidity("");
    }


if (form.checkValidity()) {
    form.submit(); // This sends the form
    alert("Thanks for your e-mail!! I'll get back to you as soon as posible!!");
    form.reset(); // This clears all the inputs
}

}



function validEmail(email){
    var emailRegEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,})+$/; 
    if (emailRegEx.test(email)){ 
return true; 
    } 
    return false; 
}
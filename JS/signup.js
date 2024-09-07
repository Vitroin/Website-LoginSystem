var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var infoContainer = [];
var outputControl = document.getElementById("output");
if (localStorage.getItem('logInfo') !== null) {
    infoContainer = JSON.parse(localStorage.getItem('logInfo'));

}



function add() {
    var LoginInfo = {
        username: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    }

    for (var i = 0; i < infoContainer.length; i++) {
        if (infoContainer[i].email.toLowerCase()  == LoginInfo.email.toLowerCase()) {
            outputControl.innerHTML = "Email Already Exists";
            empty();
            outputControl.classList.add("text-danger");
            outputControl.classList.remove("text-success");
            return;
        }
    }

    if ((validation(nameInput) && validation(emailInput) && validation(passwordInput)) == true) {
        infoContainer.push(LoginInfo);
        localStorage.setItem('logInfo', JSON.stringify(infoContainer));
        outputControl.innerHTML = "Sign Up Success";
        outputControl.classList.remove("text-danger");
        outputControl.classList.add("text-success");
        empty();
    } else {

        if ((isempty(nameInput) || isempty(emailInput) || isempty(passwordInput)) == true) {
            outputControl.innerHTML = "Incomplete Sign Up Information"
            outputControl.classList.remove('d-none');
            outputControl.classList.add("text-danger");
            outputControl.classList.remove("text-success");
            empty();
        } else {
            outputControl.innerHTML = "Invalid Sign Up Information"
            outputControl.classList.remove('d-none');
            outputControl.classList.add("text-danger");
            outputControl.classList.remove("text-success");
            empty();
        }
    }
}


function validation(element) {
    var regex = {
        nameInput: /^[a-zA-Z 0-9_-]{3,}$/,
        emailInput: /^[^\s][^\s@]*@[^\s@]+\.[^\s@]+$/,
        passwordInput: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/
    }

    if (regex[element.id].test(element.value) == true) {
        element.classList.add('is-valid')
        element.classList.remove('is-invalid')
        element.nextElementSibling.classList.add('d-none');

        return true
    } else {
        element.classList.remove('is-valid')
        element.classList.add('is-invalid')
        element.nextElementSibling.classList.remove('d-none');
        return false
    }

}

function empty() {
    nameInput.value = "";
    nameInput.classList.remove('is-valid')
    nameInput.classList.remove('is-invalid');
    emailInput.value = "";
    emailInput.classList.remove('is-valid')
    emailInput.classList.remove('is-invalid');
    passwordInput.value = "";
    passwordInput.classList.remove('is-invalid');
    passwordInput.classList.remove('is-valid')
    nameInput.nextElementSibling.classList.add('d-none');
    passwordInput.nextElementSibling.classList.add('d-none');
    emailInput.nextElementSibling.classList.add('d-none');
}

function isempty(element) {
    if (element.value == '') {
        empty();
        return true;
    } else {
        return false;
    }
}
var emailLogin = document.getElementById("emailLogin");
var passwordLogin = document.getElementById("passwordLogin");
var outputControl = document.getElementById("output")
var infoContainer = [];

if (localStorage.getItem('logInfo') !== null) {
    infoContainer = JSON.parse(localStorage.getItem('logInfo'));
}

function present() {

    if (indata() == 1) {
        outputControl.innerHTML = "Login Success";
        outputControl.classList.remove("text-danger");
        outputControl.classList.add("text-success");
        empty();
    } else if (indata() == 0) {
        outputControl.innerHTML = "Incorrect Password"
        outputControl.classList.remove("text-success");
        outputControl.classList.add("text-danger");
        empty();
    } else {
        if ((isempty(emailLogin) || isempty(passwordLogin)) == true) {
            outputControl.innerHTML = "Incomplete Login Information"
            outputControl.classList.remove("text-success");
            outputControl.classList.add("text-danger");

            empty();
        } else {
            outputControl.innerHTML = "No Email With Such Information, please sign up"
            outputControl.classList.remove("text-success");
            outputControl.classList.add("text-danger");
            empty();
        }
    }
}

function indata() {
    var result;
    for (var i = 0; i < infoContainer.length; i++) {
        if (infoContainer[i].email.toLowerCase() === emailLogin.value.toLowerCase() && infoContainer[i].password === passwordLogin.value) {
            result = 1;
            return result;
        } else if (infoContainer[i].email.toLowerCase() === emailLogin.value.toLowerCase() && infoContainer[i].password !== passwordLogin.value) {
            result = 0;
            return result;
        }
    }

    return result;
}



function validation(element) {
    var regex = {
        emailLogin: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
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

    emailLogin.value = "";
    passwordLogin.value = "";
    emailLogin.classList.remove('is-valid')
    emailLogin.classList.remove('is-invalid');
    emailLogin.nextElementSibling.classList.add('d-none');
}


function isempty(element) {
    if (element.value == '') {
        empty();
        return true;
    } else {
        return false;
    }
}
function mostrarPassword() {
    let inputPassword = document.getElementById("password");
    let checkbox = document.getElementById("checkPassword");
    let iconEyeSlash = document.getElementById("eyeSlash");
    let iconEye = document.getElementById("eye");

    if(inputPassword.type == "password" && checkbox.checked){
        inputPassword.type = "text";
        iconEyeSlash.style.display = "none";
        iconEye.style.display = "initial";
    }else{
        inputPassword.type = "password";
        iconEyeSlash.style.display = "initial";
        iconEye.style.display = "none   ";
    }
}

function mostrarConfirmPassword() {
    let inputConfirmPassword = document.getElementById("passwordConfirm");
    let checkboxConfirm = document.getElementById("checkPasswordConfirm");
    let iconEyeSlash = document.getElementById("eyeSlashConfirm");
    let iconEye = document.getElementById("eyeConfirm");

    if(inputConfirmPassword.type == "password" && checkboxConfirm.checked){
        inputConfirmPassword.type = "text";
        iconEyeSlash.style.display = "none";
        iconEye.style.display = "initial";
    }else{
        inputConfirmPassword.type = "password";
        iconEyeSlash.style.display = "initial";
        iconEye.style.display = "none   ";
    }
}

function desplegarMenu() {
    let mainNavbar = document.getElementById("mainNavbar");
    if(mainNavbar.style.display == "flex") {
        mainNavbar.style.display = "none";
    } else {
        mainNavbar.style.display = "flex";
        mainNavbar.style.transition ="all 2s"
    }
}

// function enviarDatos() {
//     let inputPassword = document.getElementById("password");
//     let inputConfirmPassword = document.getElementById("passwordConfirm");
//     if(inputPassword.value == inputConfirmPassword.value) {
//         alert("Las contraseñas no son iguales")
//     }
// }
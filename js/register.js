const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 500);
})

let menu = document.querySelector('.menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('close-icon');
    navlist.classList.toggle('open');
}

let passwordField = document.getElementById('password');
let confirmPasswordContainer = document.getElementById('confirmPassword');
passwordField.addEventListener('input', function() {
      if (passwordField.value) {
        confirmPasswordContainer.style.display = 'block';
      } else {
        confirmPasswordContainer.style.display = 'none';
      }
});

document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('submit');

    let isValid = true;

    let name = document.getElementById('name').value;
    if (name === '') {
        document.getElementById('nameError').innerText = "Name is required"
        isValid = false;
    }
    else if (!validName(name)){
        document.getElementById('nameError').innerText = "Name should only contain letters and spaces"
        isValid = false;
    }
    else {
        document.getElementById('nameError').innerText = ""
    }

    let email = document.getElementById('email').value;
    if (email === '') {
        document.getElementById('emailError').innerText = "Email is required"
        isValid = false;
    }
    else if (!email.endsWith('@gmail.com')){
        document.getElementById('emailError').innerText = "Email must be end with @gmail.com"
        isValid = false;
    }
    else {
        document.getElementById('emailError').innerText = ""
    }

    let password = document.getElementById('password').value;
    if (password === '') {
        document.getElementById('passwordError').innerText = "Password is required"
        isValid = false;
    }
    else if (!validPassword(password)){
        document.getElementById('passwordError').innerText = "Password must be contains letter and number, no symbol"
        isValid = false;
    }
    else {
        document.getElementById('passwordError').innerText = ""
    }

    let confirmPassword = document.getElementById('confirm-password').value;
    if (confirmPassword === '') {
        document.getElementById('confirmPasswordError').innerText = "Confirm password is required"
        isValid = false;
    }
    else if (confirmPassword != password && validPassword(password)){
        document.getElementById('confirmPasswordError').innerText = "Confirm password must be the same as password"
        isValid = false;
    }
    else {
        document.getElementById('confirmPasswordError').innerText = ""
    }

    let ageSelected = document.getElementById('age').value;
    if (!ageSelected){
        document.getElementById('ageError').innerText = "Age is required"
        isValid = false;
    }
    else {
        document.getElementById('ageError').innerText = ""
    }

    let genderSelected = document.querySelector('input[name="gender"]:checked');
    if (!genderSelected){
        document.getElementById('genderError').innerText = "Gender is required"
        isValid = false;
    }
    else {
        document.getElementById('genderError').innerText = ""
    }

    let terms = document.getElementById('terms').checked;
    if (!terms){
        document.getElementById('termsError').innerText = "You must accept all the terms and conditions"
        isValid = false;
    }
    else {
        document.getElementById('termsError').innerText = ""
    }

    if (isValid) {
        alert('Register success!');
    }
})

function validName(name) {
    let haveLetter = false;
    for (let i = 0; i < name.length; i++){
        const character = name[i];
        if ((character >= 'a' && character <= 'z') || (character >= 'A' && character <= 'Z')){
            haveLetter = true;
        }
        else if (!(character >= 'a' && character <= 'z') && !(character >= 'A' && character <= 'Z') && character != ' ') {
            haveLetter = false;
            return haveLetter;
        } 
    }
    return haveLetter;
}

function validPassword(password) {
    let haveNumber = false;
    let haveLetter = false;
    let haveSymbol = false;
    for (let i = 0; i < password.length; i++){
        const character = password[i];
        if ((character >= 'a' && character <= 'z') || (character >= 'A' && character <= 'Z')){
            haveLetter = true;
        }
        else if (character >= '0' && character <= '9') {
            haveNumber = true;
        } 
        else haveSymbol = true;
    }
    return haveLetter && haveNumber && !haveSymbol;
}
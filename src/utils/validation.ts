const emailRegexp =  /^[a-z]+[a-z-]+\@[a-z]+\.[a-z]+$/;
const passwordRegexp = /(?<!\S)(?=\S{8,40}(?!\S))\S*(\d\S*[A-ZА-ЯЁ]|[A-ZА-ЯЁ]\S*\d)\S*/;
const loginRegexp = /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/
const nameRegexp = /^[A-ZА-ЯЁ][a-zA-Zа-яА-ЯёЁ-]+$/;
const phoneRegexp =  /^\+*\d{10,15}$/;

function checkPassword() {
    const errorPassword = document.getElementById("passwordError") as HTMLElement;
    const inputPassword = document.getElementById("password") as  HTMLInputElement;
    if (!inputPassword.value.match(passwordRegexp)) {
        inputPassword.classList.add("login__input_error");
        errorPassword.textContent = "Пароль должен состоять от 8 до 40 символов,одной заглавной буквы и цифры."
    } else {
        inputPassword.classList.remove("login__input_error");
        errorPassword.textContent = "";
    }
}

function checkEmail() {
    const inputEmail = document.getElementById("email") as HTMLInputElement;
    const errorEmail = document.getElementById("emailError") as HTMLElement;
    if (!inputEmail.value.match(emailRegexp)) {
        inputEmail.classList.add("login__input_error");
        errorEmail.textContent = "Пароль состоит из латиницы, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть «собака» (@)"
    } else {
        inputEmail.classList.remove("login__input_error");
        errorEmail.textContent = "";
    }
}

function checkLogin() {
    const inputLogin = document.getElementById("login") as HTMLInputElement;
    const errorLogin = document.getElementById("loginError") as HTMLElement;
    if (!inputLogin.value.match(loginRegexp)) {
        inputLogin.classList.add("login__input_error");
        errorLogin.textContent = "Логин от 3 до 20 символов, латиница, может содержать цифры, допустимы дефис и нижнее подчёркивание"
    } else {
        inputLogin.classList.remove("login__input_error");
        errorLogin.textContent = "";
    }
}

function checkPasswordDouble() {
    const inputPasswordDouble = document.getElementById("password-again") as HTMLInputElement;
    const errorPasswordAgain = document.getElementById("passwordAgainError") as HTMLElement;

    if (!inputPasswordDouble.value.match(passwordRegexp)) {
        inputPasswordDouble.classList.add("login__input_error");
        errorPasswordAgain.textContent = "Пароль должен состоять от 8 до 40 символов,одной заглавной буквы и цифры"
    } else {
        inputPasswordDouble.classList.remove("login__input_error");
        errorPasswordAgain.textContent = "";
    }
}

function checkName() {
    const inputName = document.getElementById("first_name") as HTMLInputElement;
    const errorName = document.getElementById("nameError") as HTMLElement;
    if (!inputName.value.match(nameRegexp)) {
        inputName.classList.add("login__input_error");
        errorName.textContent = "Имя включает латиницу или кириллицу, первая буква должна быть заглавной, без пробелов и без цифр"
    } else {
        inputName.classList.remove("login__input_error");
        errorName.textContent = "";
    }
}

function checkPhone() {
    const inputPhone = document.getElementById("phone") as HTMLInputElement;
    const errorPhone = document.getElementById("phoneError") as HTMLElement;
    if (!inputPhone.value.match(phoneRegexp)) {
        inputPhone.classList.add("login__input_error");
        errorPhone.textContent = "Введите номер формата +7... или 8, состоящий от 10 до 15 символов"
    } else {
        inputPhone.classList.remove("login__input_error");
        errorPhone.textContent = "";
    }
}

function checkNickname() {
    const inputNickname = document.getElementById("nick_name") as HTMLInputElement;
    const errorNickname = document.getElementById("nickNameError") as HTMLElement;
    if (!inputNickname.value.match(loginRegexp)) {
        inputNickname.classList.add("login__input_error");
        errorNickname.textContent = "Ник от 3 до 20 символов, латиница, может содержать цифры, допустимы дефис и нижнее подчёркивание."
    } else {
        inputNickname.classList.remove("login__input_error");
        errorNickname.textContent = "";
    }
}

function checkSurname() {
    const inputSurname = document.getElementById("second_name") as HTMLInputElement;
    const errorSurname = document.getElementById("surnameError") as HTMLElement;
    if (!inputSurname.value.match(nameRegexp)) {
        inputSurname.classList.add("login__input_error");
        errorSurname.textContent = "Фамилия включает латиницу или кириллицу, первая буква должна быть заглавной, без пробелов и без цифр"
    } else {
        inputSurname.classList.remove("login__input_error");
        errorSurname.textContent = "";
    }
}

export { checkPassword, checkEmail,  checkPhone, checkPasswordDouble, checkName, checkLogin, checkSurname, checkNickname}; // список экспортируемых переменных

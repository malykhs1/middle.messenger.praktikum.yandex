const emailRegexp =  /^[a-z]+[a-z-]+\@[a-z]+\.[a-z]+$/;
const passwordRegexp = /(?<!\S)(?=\S{8,40}(?!\S))\S*(\d\S*[A-ZА-ЯЁ]|[A-ZА-ЯЁ]\S*\d)\S*/;
const loginRegexp = /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/
const nameRegexp = /^[A-ZА-ЯЁ][a-zA-Zа-яА-ЯёЁ-]+$/;
const phoneRegexp =  /^\+*\d{10,15}$/;


function checkPassword(inputValue: any, errorElement: any) {
    if (!inputValue.value.match(passwordRegexp)) {
      inputValue.classList.add("login__input_error");
      errorElement.textContent = "Пароль должен состоять от 8 до 40 символов,одной заглавной буквы и цифры."
    } else {
      inputValue.classList.remove("login__input_error");
      errorElement.textContent = "";
    }
}

function checkEmail(inputValue: any, errorElement: any) {
    if (!inputValue.value.match(emailRegexp)) {
      inputValue.classList.add("login__input_error");
      errorElement.textContent = "Пароль состоит из латиницы, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть «собака» (@)"
    } else {
      inputValue.classList.remove("login__input_error");
      errorElement.textContent = "";
    }
}

function checkLogin(inputValue: any, errorElement: any) {

    if (!inputValue.value.match(loginRegexp)) {
      inputValue.classList.add("login__input_error");
      errorElement.textContent = "Логин от 3 до 20 символов, латиница, может содержать цифры, допустимы дефис и нижнее подчёркивание"
    } else {
      inputValue.classList.remove("login__input_error");
      errorElement.textContent = "";
    }
}

function checkPasswordDouble(inputValue: any, errorElement: any) {
    if (!inputValue.value.match(passwordRegexp)) {
      inputValue.classList.add("login__input_error");
      errorElement.textContent = "Пароль должен состоять от 8 до 40 символов,одной заглавной буквы и цифры"
    } else {
      inputValue.classList.remove("login__input_error");
      errorElement.textContent = "";
    }
}

function checkName(inputValue: any, errorElement: any) {
    if (!inputValue.value.match(nameRegexp)) {
      inputValue.classList.add("login__input_error");
      errorElement.textContent = "Имя включает латиницу или кириллицу, первая буква должна быть заглавной, без пробелов и без цифр"
    } else {
      inputValue.classList.remove("login__input_error");
      errorElement.textContent = "";
    }
}

function checkPhone(inputValue: any, errorElement: any) {
    if (!inputValue.value.match(phoneRegexp)) {
      inputValue.classList.add("login__input_error");
      errorElement.textContent = "Введите номер формата +7... или 8, состоящий от 10 до 15 символов"
    } else {
      inputValue.classList.remove("login__input_error");
      errorElement.textContent = "";
    }
}

function checkNickname(inputValue: any, errorElement: any) {
    if (!inputValue.value.match(loginRegexp)) {
      inputValue.classList.add("login__input_error");
      errorElement.textContent = "Ник от 3 до 20 символов, латиница, может содержать цифры, допустимы дефис и нижнее подчёркивание."
    } else {
      inputValue.classList.remove("login__input_error");
      errorElement.textContent = "";
    }
}

function checkSurname(inputValue: any, errorElement: any) {
    if (!inputValue.value.match(nameRegexp)) {
      inputValue.classList.add("login__input_error");
      errorElement.textContent = "Фамилия включает латиницу или кириллицу, первая буква должна быть заглавной, без пробелов и без цифр"
    } else {
      inputValue.classList.remove("login__input_error");
      errorElement.textContent = "";
    }
}

export { checkPassword, checkEmail,  checkPhone, checkPasswordDouble, checkName, checkLogin, checkSurname, checkNickname}; // список экспортируемых переменных

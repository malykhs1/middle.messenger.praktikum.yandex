import Block from '../../utils/Block';
import template from './register.hbs';
import {Button} from "../../components/buttonSubmitFormsTemplate";
import { InputAuth } from "../../components/inputAuthTemplate";
import { authLink } from "../../components/authLinkTemplate";

import {checkPassword, checkEmail,  checkPhone, checkPasswordDouble, checkName, checkLogin } from "../../utils/validation"


export class RegisterPage extends Block {
    constructor(props: {
        title: string,
        value?: string,
        events?: {
            submit?: (e: any) => void,
        }
    }) {
        super('div', {
            title: "Create account",
            loginRegexp: /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/,
            nameRegexp: /^[A-ZА-ЯЁ][a-zA-Zа-яА-ЯёЁ-]+$/,
            phoneRegexp:  /^\+*\d{10,15}$/,
            emailRegexp: /^[a-z]+[a-z-]+\@[a-z]+\.[a-z]+$/,
            passwordRegexp: /(?<!\S)(?=\S{8,40}(?!\S))\S*(\d\S*[A-ZА-ЯЁ]|[A-ZА-ЯЁ]\S*\d)\S*/,
        });
    }

    onSubmit(e: any) {
        e.preventDefault()
        const formElement = document.getElementsByTagName('input');
        const formData: { [index: string]: any } = {};
        for (let element of formElement) {
            formData[element.name] = element.value
        }
        console.log(formData);
        this.onFocus(e)
        this.onBlur(e)
    }

    onBlur(e: any) {
      const inputEmail = document.getElementById("email") as HTMLInputElement;
      const inputPassword = document.getElementById("password") as  HTMLInputElement;

      const errorPassword = document.getElementById("passwordError") as HTMLElement;
      const errorEmail = document.getElementById("emailError") as HTMLElement;

      const inputLogin = document.getElementById("login") as HTMLInputElement;
      const errorLogin = document.getElementById("loginError") as HTMLElement;

      const inputName = document.getElementById("first_name") as HTMLInputElement;
      const errorName = document.getElementById("nameError") as HTMLElement;

      const inputPasswordDouble = document.getElementById("password-again") as HTMLInputElement;
      const errorPasswordAgain = document.getElementById("passwordAgainError") as HTMLElement;

      const inputPhone = document.getElementById("phone") as HTMLInputElement;
      const errorPhone = document.getElementById("phoneError") as HTMLElement;

      if (e.target === inputEmail) {
        checkEmail(inputEmail, errorEmail);
      }
      if (e.target === inputPassword) {
        checkPassword(inputPassword, errorPassword);
      }
      if (e.target === inputLogin) {
        checkLogin(inputLogin, errorLogin)
      }
      if (e.target === inputName) {
        checkName(inputName, errorName);
      }
      if (e.target === inputPhone) {
        checkPhone(inputPhone, errorPhone);
      }
      if (e.target === inputPasswordDouble) {
        checkPasswordDouble(inputPasswordDouble, errorPasswordAgain);
      }
    }

    onFocus(e: any) {
      const inputEmail = document.getElementById("email") as HTMLInputElement;
      const inputPassword = document.getElementById("password") as  HTMLInputElement;

      const errorPassword = document.getElementById("passwordError") as HTMLElement;
      const errorEmail = document.getElementById("emailError") as HTMLElement;

      const inputLogin = document.getElementById("login") as HTMLInputElement;
      const errorLogin = document.getElementById("loginError") as HTMLElement;

      const inputName = document.getElementById("first_name") as HTMLInputElement;
      const errorName = document.getElementById("nameError") as HTMLElement;

      const inputPasswordDouble = document.getElementById("password-again") as HTMLInputElement;
      const errorPasswordAgain = document.getElementById("passwordAgainError") as HTMLElement;

      const inputPhone = document.getElementById("phone") as HTMLInputElement;
      const errorPhone = document.getElementById("phoneError") as HTMLElement;

      if (e.target === inputEmail) {
        checkEmail(inputEmail, errorEmail);
      }
      if (e.target === inputPassword) {
        checkPassword(inputPassword, errorPassword);
      }
      if (e.target === inputLogin) {
        checkLogin(inputLogin, errorLogin)
      }
      if (e.target === inputPhone) {
        checkPhone(inputPhone, errorPhone);
      }
      if (e.target === inputPasswordDouble) {
        checkPasswordDouble(inputPasswordDouble, errorPasswordAgain);
      }
    }


    init() {
        this.children.button = new Button({
            label: 'Register',
            events: {
                click: (e: any) => this.onSubmit(e),
            },
        });
        this.children.authLink = new authLink({
            linkText: 'Enter',
        });
        this.children.inputEmail = new InputAuth({
            id: 'email',
            title: "Email",
            name: "email",
            placeholder: "Email",
            type: "email",
            value: this.props.email,
            idError: "emailError",
            events: {
                change: (e: any) => this.onBlur(e),
                click: (e : any) => this.onFocus(e),
            }
        });
        this.children.inputLogin = new InputAuth({
            id: 'login',
            title: "Login",
            name: "login",
            placeholder: "Login",
            type: "text",
            value: this.props.login,
            idError: "loginError",
            events: {
                change: (e: any) => this.onBlur(e),
                click: (e : any) => this.onFocus(e),
            }
        });
        this.children.inputName = new InputAuth({
            id: 'first_name',
            title: "Name",
            name: "name",
            placeholder: "Name",
            type: "text",
            value: this.props.firstName,
            idError: "nameError",
            events: {
                change: (e: any) => this.onBlur(e),
                click: (e : any) => this.onFocus(e),
            }
        });
        this.children.inpuSurname = new InputAuth({
            id: 'second_name',
            title: "Surname",
            name: "surname",
            placeholder: "Surname",
            type: "text",
            value: this.props.secondName,
            idError: "surnameError",
            events: {
                change: (e: any) => this.onBlur(e),
                click: (e : any) => this.onFocus(e),
            }
        });
        this.children.inputPhoneNumber = new InputAuth({
            id: 'phone',
            title: "Phone number",
            name: "phone",
            placeholder: "Phone number",
            type: "text",
            value: this.props.phone,
            idError: "phoneError",
            events: {
                change: (e: any) => this.onBlur(e),
                click: (e : any) => this.onFocus(e),
            }
        });
        this.children.inputPassword = new InputAuth({
            id: 'password',
            title: "Password",
            name: "password",
            placeholder: "Password",
            type: "password",
            value: this.props.password,
            idError: "passwordError",
            events: {
                change: (e: any) => this.onBlur(e),
                click: (e : any) => this.onFocus(e),
            }
        });
        this.children.inputPasswordAgain = new InputAuth({
            id: 'password-again',
            title: "Password (again)",
            name: "password",
            placeholder: "Password",
            type: "password",
            value: this.props.passwordAgain,
            idError: "passwordAgainError",
            events: {
                change: (e: any) => this.onBlur(e),
                click: (e : any) => this.onFocus(e),
            }
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
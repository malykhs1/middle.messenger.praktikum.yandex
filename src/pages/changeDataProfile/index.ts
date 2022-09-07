import Block from '../../utils/Block';
import template from './changeDatProfile.hbs';
import {Button} from "../../components/buttonSubmitFormsTemplate";
import {profileInput} from "../../components/profileInputTemplate";
import {inputProfileError} from "../../components/profileInputError";
import { checkPassword, checkEmail,  checkPhone, checkName, checkLogin, checkNickname, checkSurname} from "../../utils/validation"; // список экспортируемых переменных



export class ChangeDataProfilePage extends Block {
    constructor() {
        super('div', {
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
        checkLogin();
        checkEmail();
        checkName();
        checkPhone();
        checkNickname();
        checkSurname();
    }

    onFocus(e: any) {
        checkLogin();
        checkEmail();
        checkName();
        checkPhone();
        checkNickname();
        checkSurname();
    }

    init() {
        this.children.button = new Button({
            label: 'Save',
            events: {
                click: (e: any) => this.onSubmit(e),
            },
        });
        this.children.inputEmail = new profileInput({
            id: 'email',
            label: "Email",
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
        this.children.inputLogin = new profileInput({
            id: 'login',
            label: "Login",
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
        this.children.inputNickname = new profileInput({
            id: 'nick_name',
            label: "Nickname",
            name: "nickname",
            placeholder: "Nickname",
            type: "text",
            value: this.props.nickName,
            idError: "nickNameError",
            events: {
                change: (e: any) => this.onBlur(e),
                click: (e : any) => this.onFocus(e),
            }
        });
        this.children.inputName = new profileInput({
            id: 'first_name',
            label: "Name",
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
        this.children.inputSurname = new profileInput({
            id: 'second_name',
            label: "Surname",
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
        this.children.inputPhoneNumber = new profileInput({
            id: 'phone',
            label: "Phone number",
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
        this.children.inputEmailError = new inputProfileError({
            idError: "emailError"
        });
        this.children.inputNameError = new inputProfileError({
            idError: "nameError"
        });
        this.children.inputSurnameError = new inputProfileError({
            idError: "surnameError"
        });
        this.children.inputNicknameError = new inputProfileError({
            idError: "nickNameError"
        });
        this.children.inputPhoneNumberError = new inputProfileError({
            idError: "phoneError"
        });
        this.children.inputLoginError = new inputProfileError({
            idError: "loginError"
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
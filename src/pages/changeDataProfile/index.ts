import Block from "../../utils/Block";
import template from "./changeDatProfile.hbs";
import { Button } from "../../components/buttonSubmitFormsTemplate";
import { profileInput } from "../../components/profileInputTemplate";
import { inputProfileError } from "../../components/profileInputErrorTemplate";
import {
  checkEmail,
  checkPhone,
  checkName,
  checkLogin,
  checkNickname,
  checkSurname,
} from "../../utils/validation"; // список экспортируемых переменных

export class ChangeDataProfilePage extends Block {
  constructor() {
    super("div", {});
  }

  onSubmit(e: Event) {
    e.preventDefault();
    const formElement = document.getElementsByTagName("input");
    const formData: { [index: string]: any } = {};
    for (let element of formElement) {
      formData[element.name] = element.value;
    }
    console.log(formData);
    this.onFocus(e);
    this.onBlur(e);
  }

  onBlur(e: Event) {
    const errorEmail = document.getElementById("emailError") as HTMLParagraphElement;
    const inputEmail = document.getElementById("email") as HTMLInputElement;

    const inputLogin = document.getElementById("login") as HTMLInputElement;
    const errorLogin = document.getElementById("loginError") as HTMLParagraphElement;

    const inputName = document.getElementById("first_name") as HTMLInputElement;
    const errorName = document.getElementById("nameError") as HTMLParagraphElement;

    const inputPhone = document.getElementById("phone") as HTMLInputElement;
    const errorPhone = document.getElementById("phoneError") as HTMLParagraphElement;

    const inputNickname = document.getElementById(
      "nick_name"
    ) as HTMLInputElement;
    const errorNickname = document.getElementById(
      "nickNameError"
    ) as HTMLParagraphElement;

    const inputSurname = document.getElementById(
      "second_name"
    ) as HTMLInputElement;
    const errorSurname = document.getElementById("surnameError") as HTMLParagraphElement;

    if (e.target === inputEmail) {
      checkEmail(inputEmail, errorEmail);
    }

    if (e.target === inputLogin) {
      checkLogin(inputLogin, errorLogin);
    }
    if (e.target === inputName) {
      checkName(inputName, errorName);
    }
    if (e.target === inputPhone) {
      checkPhone(inputPhone, errorPhone);
    }

    if (e.target === inputNickname) {
      checkNickname(inputNickname, errorNickname);
    }

    if (e.target === inputSurname) {
      checkSurname(inputSurname, errorSurname);
    }
  }

  onFocus(e: Event) {
    const errorEmail = document.getElementById("emailError") as HTMLParagraphElement;

    const inputEmail = document.getElementById("email") as HTMLInputElement;

    const inputLogin = document.getElementById("login") as HTMLInputElement;
    const errorLogin = document.getElementById("loginError") as HTMLParagraphElement;

    const inputName = document.getElementById("first_name") as HTMLInputElement;
    const errorName = document.getElementById("nameError") as HTMLParagraphElement;

    const inputPhone = document.getElementById("phone") as HTMLInputElement;
    const errorPhone = document.getElementById("phoneError") as HTMLParagraphElement;

    const inputNickname = document.getElementById(
      "nick_name"
    ) as HTMLInputElement;
    const errorNickname = document.getElementById(
      "nickNameError"
    ) as HTMLParagraphElement;

    const inputSurname = document.getElementById(
      "second_name"
    ) as HTMLInputElement;
    const errorSurname = document.getElementById("surnameError") as HTMLParagraphElement;

    if (e.target === inputEmail) {
      checkEmail(inputEmail, errorEmail);
    }

    if (e.target === inputLogin) {
      checkLogin(inputLogin, errorLogin);
    }
    if (e.target === inputName) {
      checkName(inputName, errorName);
    }
    if (e.target === inputPhone) {
      checkPhone(inputPhone, errorPhone);
    }
    if (e.target === inputNickname) {
      checkNickname(inputNickname, errorNickname);
    }

    if (e.target === inputSurname) {
      checkSurname(inputSurname, errorSurname);
    }
  }

  init() {
    this.children.button = new Button({
      labelButton: "Save",
      events: {
        click: (e: SubmitEvent) => this.onSubmit(e),
      },
    });
    this.children.inputEmail = new profileInput({
      id: "email",
      label: "Email",
      name: "email",
      placeholder: "Email",
      type: "email",
      value: this.props.email,
      idError: "emailError",
      events: {
        change: (e: FocusEvent) => this.onBlur(e),
        click: (e: Event) => this.onFocus(e),
      },
    });
    this.children.inputLogin = new profileInput({
      id: "login",
      label: "Login",
      name: "login",
      placeholder: "Login",
      type: "text",
      value: this.props.login,
      idError: "loginError",
      events: {
        change: (e: FocusEvent) => this.onBlur(e),
        click: (e: Event) => this.onFocus(e),
      },
    });
    this.children.inputNickname = new profileInput({
      id: "nick_name",
      label: "Nickname",
      name: "nickname",
      placeholder: "Nickname",
      type: "text",
      value: this.props.nickName,
      idError: "nickNameError",
      events: {
        change: (e: FocusEvent) => this.onBlur(e),
        click: (e: Event) => this.onFocus(e),
      },
    });
    this.children.inputName = new profileInput({
      id: "first_name",
      label: "Name",
      name: "name",
      placeholder: "Name",
      type: "text",
      value: this.props.firstName,
      idError: "nameError",
      events: {
        change: (e: FocusEvent) => this.onBlur(e),
        click: (e: Event) => this.onFocus(e),
      },
    });
    this.children.inputSurname = new profileInput({
      id: "second_name",
      label: "Surname",
      name: "surname",
      placeholder: "Surname",
      type: "text",
      value: this.props.secondName,
      idError: "surnameError",
      events: {
        change: (e: FocusEvent) => this.onBlur(e),
        click: (e: Event) => this.onFocus(e),
      },
    });
    this.children.inputPhoneNumber = new profileInput({
      id: "phone",
      label: "Phone number",
      name: "phone",
      placeholder: "Phone number",
      type: "text",
      value: this.props.phone,
      idError: "phoneError",
      events: {
        change: (e: FocusEvent) => this.onBlur(e),
        click: (e: Event) => this.onFocus(e),
      },
    });
    this.children.inputEmailError = new inputProfileError({
      idError: "emailError",
    });
    this.children.inputNameError = new inputProfileError({
      idError: "nameError",
    });
    this.children.inputSurnameError = new inputProfileError({
      idError: "surnameError",
    });
    this.children.inputNicknameError = new inputProfileError({
      idError: "nickNameError",
    });
    this.children.inputPhoneNumberError = new inputProfileError({
      idError: "phoneError",
    });
    this.children.inputLoginError = new inputProfileError({
      idError: "loginError",
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

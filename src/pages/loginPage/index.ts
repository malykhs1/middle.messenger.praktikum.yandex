import Block from "../../utils/Block";
import template from "./login.hbs";
import { Button } from "../../components/buttonSubmitFormsTemplate";
import { InputAuth } from "../../components/inputAuthTemplate";
import { authLink } from "../../components/authLinkTemplate";

import { checkPassword, checkEmail } from "../../utils/validation";

interface loginPageProps {
  title: string;
  value?: string;
  events?: {
    submit?: (e: Event) => void;
  };
}

export class LoginPage extends Block {
  constructor(props: loginPageProps) {
    super("a", props);
  }

  onSubmit(e: Event) {
    e.preventDefault();
    console.log(e)
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
    const inputEmail = document.getElementById("email") as HTMLInputElement;
    const inputPassword = document.getElementById(
      "password"
    ) as HTMLInputElement;

    const errorPassword = document.getElementById(
      "passwordError"
    ) as HTMLParagraphElement;
    const errorEmail = document.getElementById("emailError") as HTMLParagraphElement;

    if (e.target === inputEmail) {
      checkEmail(inputEmail, errorEmail);
    }
    if (e.target === inputPassword) {
      checkPassword(inputPassword, errorPassword);
    }
  }

  onFocus(e: Event) {
    const inputEmail = document.getElementById("email") as HTMLInputElement;
    const inputPassword = document.getElementById(
      "password"
    ) as HTMLInputElement;

    const errorPassword = document.getElementById(
      "passwordError"
    ) as HTMLParagraphElement;
    const errorEmail = document.getElementById("emailError") as HTMLParagraphElement;

    if (e.target === inputEmail) {
      checkEmail(inputEmail, errorEmail);
    }
    if (e.target === inputPassword) {
      checkPassword(inputPassword, errorPassword);
    }
  }

  init() {
    this.children.button = new Button({
      labelButton: "Enter",
      events: {
        click: (e: SubmitEvent) => this.onSubmit(e),
      },
    });
    this.children.createLink = new authLink({
      linkText: "Create account",
    });
    this.children.inputEmail = new InputAuth({
      id: "email",
      title: "Email",
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
    this.children.inputPassword = new InputAuth({
      id: "password",
      title: "Password",
      name: "password",
      placeholder: "Password",
      type: "password",
      value: this.props.password,
      idError: "passwordError",
      events: {
        change: (e: FocusEvent) => this.onBlur(e),
        click: (e: Event) => this.onFocus(e),
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

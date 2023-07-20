import ButtonSubmit from "../../../components/buttonSubmitFormsTemplate";
import { InputAuth } from "../../../components/inputAuthTemplate";
import { authLink } from "../../../components/authLinkTemplate";
import { SignUpData } from '../../../api/AuthAPI';
import Router from '../../../utils/Router';
import AuthController from '../../../controllers/AuthController';
import template from './signup.hbs';
import SubmitPage from '../../../utils/validation/SubmitPage';
import Validation from '../../../utils/validation/Validation';


export default class SignUpPage extends SubmitPage {
    router: Router;

    constructor() {
        super((formData) => {
            const data = {
                email: formData.get('email') as string,
                login: formData.get('login') as string,
                first_name: formData.get('first_name') as string,
                second_name: formData.get('second_name') as string,
                phone: formData.get('phone') as string,
                password: formData.get('password') as string,
            };
            AuthController.signup(data as SignUpData);
        }, 'SignUp');
        this.router = new Router('#app');
    }

    init() {
        this.children.emailInput = new InputAuth({
            value: '',
            type: 'text',
            name: 'email',
            placeholder: 'Email',
            validationError: false,
            validationErrorMessage: '',
            events: {
                focus: () => {
                    ;
                    (this.children.emailInput as InputAuth).removeError();
                },
                blur: () => {

                    Validation.isEmail(this.children.emailInput as InputAuth);
                },
            },
        });

        this.children.loginInput = new InputAuth({
            value: '',
            type: 'text',
            name: 'login',
            placeholder: 'Login',
            validationError: false,
            validationErrorMessage: '',
            events: {
                focus: () => {
                    ;
                    (this.children.loginInput as InputAuth).removeError();
                },
                blur: () => {

                    Validation.isEmptyInput(this.children.loginInput as InputAuth);
                },
            },
        });

        this.children.firstNameInput = new InputAuth({
            value: '',
            type: 'text',
            name: 'first_name',
            placeholder: 'First name',
            validationError: false,
            validationErrorMessage: '',
            events: {
                focus: () => {
                    ;
                    (this.children.firstNameInput as InputAuth).removeError();
                },
                blur: () => {

                    Validation.isEmptyInput(this.children.firstNameInput as InputAuth);
                },
            },
        });

        this.children.secondNameInput = new InputAuth({
            value: '',
            type: 'text',
            name: 'second_name',
            placeholder: 'Last name',
            validationError: false,
            validationErrorMessage: '',
            events: {
                focus: () => {
                    ;
                    (this.children.secondNameInput as InputAuth).removeError();
                },
                blur: () => {

                    Validation.isEmptyInput(this.children.secondNameInput as InputAuth);
                },
            },
        });

        this.children.phoneInput = new InputAuth({
            value: '',
            type: 'text',
            name: 'phone',
            placeholder: 'Phone',
            validationError: false,
            validationErrorMessage: '',
            events: {
                focus: () => {
                    ;
                    (this.children.phoneInput as InputAuth).removeError();
                },
                blur: () => {

                    Validation.isPhone(this.children.phoneInput as InputAuth);
                },
            },
        });

        this.children.passwordInput = new InputAuth({
            value: '',
            type: 'password',
            name: 'password',
            placeholder: 'Password',
            validationError: false,
            validationErrorMessage: '',
            events: {
                focus: () => {
                    ;
                    (this.children.passwordInput as InputAuth).removeError();
                },
                blur: () => {
                    Validation.isEmptyInput(this.children.passwordInput as InputAuth);
                },
            },
        });

        this.children.passwordRepeatInput = new InputAuth({
            value: '',
            type: 'password',
            name: 'password_repeat',
            placeholder: 'Password (again)',
            validationError: false,
            validationErrorMessage: '',
            events: {
                focus: () => {
                    ;
                    (this.children.passwordRepeatInput as InputAuth).removeError();
                },
                blur: () => {

                    Validation.checkTwoPassword(this.children.passwordInput as InputAuth, this.children.passwordRepeatInput as InputAuth);
                },
            },
        });

        this.children.registrationButton = new ButtonSubmit({
            text: "Register",
            type: 'submit',
        });

        this.children.registrationLink = new authLink({
            linkText: 'Enter',
            events: {
                click: () => {
                    this.router.go('/sign-in')
                },
            },
        });

        this.props.checkInput = [
            this.children.emailInput,
            this.children.loginInput,
            this.children.firstNameInput,
            this.children.secondNameInput,
            this.children.phoneInput,
            this.children.passwordInput,
            this.children.passwordRepeatInput,
        ];
    }

    render() {
        return this.compile(template, this.props);

    }
}

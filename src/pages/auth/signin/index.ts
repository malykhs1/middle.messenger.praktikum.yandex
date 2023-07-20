import template from "./login.hbs";
import ButtonSubmit from "../../../components/buttonSubmitFormsTemplate";
import { InputAuth } from "../../../components/inputAuthTemplate";
import { authLink } from "../../../components/authLinkTemplate";
import SubmitPage from "../../../utils/validation/SubmitPage";
import Validation from '../../../utils/validation/Validation';
import Router from '../../../utils/Router';
import { SignInData } from '../../../api/AuthAPI';
import AuthController from '../../../controllers/AuthController';

export default class SignInPage extends SubmitPage {
    router: Router;

    constructor() {
        super((formData) => {
            const data = {
                login: formData.get('login') as string,
                password: formData.get('password') as string,
            };
            AuthController.signin(data as SignInData);
        },  'SignInPage');
        this.router = new Router('#app');
    }

    init() {
        this.children.button = new ButtonSubmit({
            text: 'Enter',
            type: 'submit'
        });

        this.children.createLink = new authLink({
            linkText: "Create account",
            events: {
                click: () => {
                    this.router.go('/sign-up')
                },
            },
        });


        this.children.loginInput = new InputAuth({
            name: 'login',
            placeholder: 'Login',
            type: 'text',
            value: "",
            validationError: false,
            validationErrorMessage: '',
            events: {
                focus: () => {
                    (this.children.loginInput as InputAuth).removeError();
                },
                blur: () => {
                    Validation.isEmptyInput(this.children.loginInput as InputAuth);
                },
            },
        });

        this.children.passwordInput  = new InputAuth({
            name: "password",
            placeholder: "Password",
            type: "text",
            value: "",
            validationError: false,
            validationErrorMessage: '',
            events: {
                focus: () => {
                    (this.children.passwordInput as InputAuth).removeError();
                },
                blur: () => {
                    Validation.isEmptyInput(this.children.passwordInput  as InputAuth);
                },
            },
        });

        this.props.checkInput = [
            this.children.loginInput,
            this.children.passwordInput,
        ];
    }

    render() {
        return this.compile(template, this.props);
    }
}

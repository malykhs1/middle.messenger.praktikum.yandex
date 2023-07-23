import template from './profile.hbs';
import ButtonSubmit from "../buttonSubmitFormsTemplate";
import { InputAuth } from "../inputAuthTemplate";
import Field from '../fieldTemplate';
import FileInput from '../FileInputTemplate';
import ButtonWithImage from '../ButtonWithImageTemplate';
import store, { withStore } from '../../utils/Store';
import AuthController from '../../controllers/AuthController';
import Validation from '../../utils/validation/Validation';
import Router from '../../utils/Router';
import backToImage from '../../../static/img/profilePage/backTo.svg';
import SubmitPage from '../../utils/validation/SubmitPage';
import UsersController from '../../controllers/UsersController';
import profileImage from '../../../static/img/profilePage/icon.svg';
import { UsersProfileData, UsersProfilePassword } from "../../api/UsersAPI"

export interface ProfileData {
    email?: string,
    login?: string,
    first_name?: string,
    second_name?: string,
    display_name?: string,
    phone?: string,
    oldPassword? : string,
    newPassword? : string,
}

class ProfileBase extends SubmitPage {
    router: Router;
    name: string = '';
    avatar: string = '';

    constructor() {
        super((formData) => {
            const data: ProfileData = {};
            if (!(this.children.emailInput as InputAuth).props.hide) {
                data.email = formData.get('email') as string;
                data.login = formData.get('login') as string;
                data.first_name = formData.get('first_name') as string;
                data.second_name = formData.get('second_name') as string;
                data.display_name = formData.get('display_name') as string;
                data.phone = formData.get('phone') as string;

                UsersController.changeInfo(data as UsersProfileData);
            } else {
                data.oldPassword = formData.get('old_password') as string;
                data.newPassword = formData.get('password') as string;

                UsersController.changePassword(data as UsersProfilePassword);
            }
        },  'profilePage');

        this.router = new Router("#app");
    }

    async init() {
        await AuthController.fetchUser();
        this.name = store.getState().user.first_name;
        this.avatar = store.getState().user.avatar;

        this.children.buttonWithImage = new ButtonWithImage({
            src: `${backToImage}`,
            events: {
                click: () => {
                    this.router.go('/')
                },
            },
        });

        this.children.emailInput = new InputAuth({
            value: store.getState().user.email,
            type: 'text',
            name: 'email',
            placeholder: 'Your email',
            validationError: false,
            validationErrorMessage: '',
            disabled: true,
            events: {
                focus: () => {
                    (this.children.emailInput as InputAuth).removeError();
                },
                blur: () => {
                    Validation.isEmail(this.children.emailInput as InputAuth);
                },
            },
        });

        this.children.fileInput = new FileInput({
            events: {
                change: (e) => {
                    let file = e.target.files[0];
                    let formData = new FormData();
                    formData.append("avatar", file);
                    console.log(formData)
                    UsersController.changeAvatar(formData);
                },
            },
        })

        this.children.loginInput = new InputAuth({
            value: store.getState().user.login,
            type: 'text',
            name: 'login',
            placeholder: 'Your login',
            validationError: false,
            validationErrorMessage: '',
            disabled: true,
            events: {
                focus: () => {
                    (this.children.loginInput as InputAuth).removeError();
                },
                blur: () => {
                    Validation.isEmptyInput(this.children.loginInput as InputAuth);
                },
            },
        });

        this.children.firstNameInput = new InputAuth({
            value: store.getState().user.first_name,
            type: 'text',
            name: 'first_name',
            placeholder: 'Your name',
            validationError: false,
            validationErrorMessage: '',
            disabled: true,
            events: {
                focus: () => {
                    (this.children.firstNameInput as InputAuth).removeError();
                },
                blur: () => {
                    Validation.isEmptyInput(this.children.firstNameInput as InputAuth);
                },
            },
        });

        this.children.secondNameInput = new InputAuth({
            value: store.getState().user.second_name,
            type: 'text',
            name: 'second_name',
            placeholder: 'Second name',
            validationError: false,
            validationErrorMessage: '',
            disabled: true,
            events: {
                focus: () => {
                    (this.children.secondNameInput as InputAuth).removeError();
                },
                blur: () => {
                    Validation.isEmptyInput(this.children.secondNameInput as InputAuth);
                },
            },
        });

        this.children.displayNameInput = new InputAuth({
            value: store.getState().user.display_name,
            type: 'text',
            name: 'display_name',
            placeholder: 'Your name in chat',
            validationError: false,
            validationErrorMessage: '',
            disabled: true,
            events: {
                focus: () => {
                    (this.children.displayNameInput as InputAuth).removeError();
                },
                blur: () => {
                    Validation.isEmptyInput(this.children.displayNameInput as InputAuth);
                },
            },
        });

        this.children.phoneInput = new InputAuth({
            value: store.getState().user.phone,
            type: 'text',
            name: 'phone',
            placeholder: 'Telephone',
            validationError: false,
            validationErrorMessage: '',
            disabled: true,
            events: {
                focus: () => {
                    (this.children.phoneInput as InputAuth).removeError();
                },
                blur: () => {
                    Validation.isPhone(this.children.phoneInput as InputAuth);
                },
            },
        });

        this.children.oldPasswordInput = new InputAuth({
            disabled: true,
            value: '',
            type: 'password',
            name: 'old_password',
            placeholder: 'Previous password',
            validationError: false,
            validationErrorMessage: '',
            hide: true,
            events: {
                focus: () => {
                    (this.children.oldPasswordInput as InputAuth).removeError();
                },
                blur: () => {
                    Validation.isEmptyInput(this.children.oldPasswordInput as InputAuth);
                },
            },
        });

        this.children.passwordInput = new InputAuth({
            value: '',
            type: 'password',
            name: 'password',
            placeholder: 'New password',
            validationError: false,
            disabled: true,
            validationErrorMessage: '',
            hide: true,
            events: {
                focus: () => {
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
            placeholder: 'New password (repeat)',
            validationError: false,
            validationErrorMessage: '',
            disabled: true,
            hide: true,
            events: {
                focus: () => {
                    (this.children.passwordRepeatInput as InputAuth).removeError();
                },
                blur: () => {
                    Validation.checkTwoPassword(this.children.passwordInput as InputAuth, this.children.passwordRepeatInput as InputAuth);
                },
            },
        });

        this.children.changeInfo = new Field({
            text: 'Change personal data',
            events: {
                click: () => {
                    (this.children.saveButton as ButtonSubmit).props.disabled = false;

                    (this.children.emailInput as InputAuth).props.hide = false;
                    (this.children.loginInput as InputAuth).props.hide = false;
                    (this.children.firstNameInput as InputAuth).props.hide = false;
                    (this.children.secondNameInput as InputAuth).props.hide = false;
                    (this.children.displayNameInput as InputAuth).props.hide = false;
                    (this.children.phoneInput as InputAuth).props.hide = false;

                    (this.children.oldPasswordInput as InputAuth).props.hide = true;
                    (this.children.passwordInput as InputAuth).props.hide = true;
                    (this.children.passwordRepeatInput as InputAuth).props.hide = true;

                    (this.children.emailInput as InputAuth).props.disabled = false;
                    (this.children.loginInput as InputAuth).props.disabled = false;
                    (this.children.firstNameInput as InputAuth).props.disabled = false;
                    (this.children.secondNameInput as InputAuth).props.disabled = false;
                    (this.children.displayNameInput as InputAuth).props.disabled = false;
                    (this.children.phoneInput as InputAuth).props.disabled = false;

                    this.props.checkInput = [
                        this.children.emailInput,
                        this.children.loginInput,
                        this.children.firstNameInput,
                        this.children.secondNameInput,
                        this.children.displayNameInput,
                        this.children.phoneInput,
                    ]
                },
            },
        });

        this.children.changePassword = new Field({
            text: 'Change password',
            events: {
                click: () => {
                    (this.children.saveButton as ButtonSubmit).props.disabled = false;

                    (this.children.emailInput as InputAuth).props.hide = true;
                    (this.children.loginInput as InputAuth).props.hide = true;
                    (this.children.firstNameInput as InputAuth).props.hide = true;
                    (this.children.secondNameInput as InputAuth).props.hide = true;
                    (this.children.displayNameInput as InputAuth).props.hide = true;
                    (this.children.phoneInput as InputAuth).props.hide = true;

                    (this.children.oldPasswordInput as InputAuth).props.hide = false;
                    (this.children.passwordInput as InputAuth).props.hide = false;
                    (this.children.passwordRepeatInput as InputAuth).props.hide = false;

                    (this.children.oldPasswordInput as InputAuth).props.disabled = false;
                    (this.children.passwordInput as InputAuth).props.disabled = false;
                    (this.children.passwordRepeatInput as InputAuth).props.disabled = false;

                    this.props.checkInput = [
                        this.children.oldPasswordInput,
                        this.children.passwordInput,
                        this.children.passwordRepeatInput,
                    ]
                },
            },
        });

        this.children.buttonExit = new Field({
            text: 'Log out',
            events: {
                click: () => {
                    AuthController.logout();
                },
            },
        });

        this.children.saveButton = new ButtonSubmit({
            text: "Save data",
            type: 'submit'
        });


        this.props.checkInput = [
        ]
        this.props.name = this.name;
        this.props.avatar = this.avatar;
    }

    render() {
        return this.compile(template, { ...this.props, backToImage, profileImage });
    }
}

const withUser = withStore((state) => ({ ...state.user }));

export default withUser(ProfileBase);

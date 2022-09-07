import Block from '../../utils/Block';
import template from './profile.hbs';
import  { InputProfile } from "../../components/profileData";

export class ProfilePage extends Block {

    init() {
        this.children.mailInput = new InputProfile({
            label: 'Mail',
        });
        this.children.loginInput = new InputProfile({
            label: 'Login',
        });
        this.children.nameInput = new InputProfile({
            label: 'Name',
        });
        this.children.surnameInput = new InputProfile({
            label: 'Surname',
        });
        this.children.nicknameInput = new InputProfile({
            label: 'Nickname',
        });
        this.children.phoneInput = new InputProfile({
            label: 'Phone number',
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
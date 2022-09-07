import Block from '../../utils/Block';
import template from './profile.hbs';
import  { ItemProfile } from "../../components/profileDataItemsTemplate";

export class ProfilePage extends Block {

    init() {
        this.children.mailInput = new ItemProfile({
            label: 'Mail',
        });
        this.children.loginInput = new ItemProfile({
            label: 'Login',
        });
        this.children.nameInput = new ItemProfile({
            label: 'Name',
        });
        this.children.surnameInput = new ItemProfile({
            label: 'Surname',
        });
        this.children.nicknameInput = new ItemProfile({
            label: 'Nickname',
        });
        this.children.phoneInput = new ItemProfile({
            label: 'Phone number',
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
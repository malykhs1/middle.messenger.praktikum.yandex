import Block from "../../utils/Block";
import template from "./profile.hbs";
import { ItemProfile } from "../../components/profileDataItemsTemplate";

export class ProfilePage extends Block {
  init() {
    this.children.mailInput = new ItemProfile({
      labelProfile: "Mail",
      dataProfile: "ma@yandex.ru",
    });
    this.children.loginInput = new ItemProfile({
      labelProfile: "Login",
      dataProfile: "ma@yandex.ru",
    });
    this.children.nameInput = new ItemProfile({
      labelProfile: "Name",
      dataProfile: "ma@yandex.ru",
    });
    this.children.surnameInput = new ItemProfile({
      labelProfile: "Surname",
      dataProfile: "ma@yandex.ru",
    });
    this.children.nicknameInput = new ItemProfile({
      labelProfile: "Nickname",
      dataProfile: "ma@yandex.ru",
    });
    this.children.phoneInput = new ItemProfile({
      labelProfile: "Phone number",
      dataProfile: "ma@yandex.ru",
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

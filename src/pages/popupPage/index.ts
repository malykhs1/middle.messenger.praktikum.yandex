import Block from "../../utils/Block";
import template from "./popup.hbs";
import { Button } from "../../components/buttonSubmitFormsTemplate";
import { PopupFile } from "../../components/popupTemplate";

export class PopupPage extends Block {
  init() {
    this.children.buttonPopup = new Button({
      labelButton: "Enter",
      events: {
        click: () => console.log("clicked"),
      },
    });

    this.children.popupContent = new PopupFile({
      popupTitle: "Upload file",
      popupMessage: "Choose file on the computer",
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

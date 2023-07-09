import Block from "../../utils/Block";
import template from "./button.hbs";

export class Button extends Block {
  constructor(props: {
    labelButton: string;
    events: {
      click: (e: SubmitEvent) => void;
    };
  }) {
    super("button", props);
  }

  render() {
    return this.compile(template, this.props);
  }
}

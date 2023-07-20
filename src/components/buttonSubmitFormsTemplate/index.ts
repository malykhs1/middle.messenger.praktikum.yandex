import Block from "../../utils/Block";
import template from "./button.hbs";

interface ButtonAuthProps {
    type?: string;
    text: string;
    disabled?: boolean;
    events?: {
        click?: () => void,
        submit?: () => void,
    }
}

    export default class ButtonSubmit extends Block<ButtonAuthProps> {
        constructor(props: ButtonAuthProps) {
            super(props);
        }

  render() {
    return this.compile(template, { ...this.props });
  }
}

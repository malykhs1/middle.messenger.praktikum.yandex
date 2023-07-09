import Block from "../../utils/Block";
import template from "./inputAuth.hbs";

interface inputAuthProps {
  id: string;
  idError: string;
  title: string;
  name: string;
  placeholder: string;
  type: string;
  value: string;
  events: {
    change: (e: FocusEvent) => void;
    click: (e: Event) => void;
  };
}

export class InputAuth extends Block {
  constructor(props: inputAuthProps) {
    super("input", props);
  }

  render() {
    return this.compile(template, this.props);
  }
}

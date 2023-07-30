import Block from "../../utils/Block";
import template from "./errorMessage.hbs";

interface ErrorPageProps {
  errorNumber: string;
  errorText: string;
}

export default class ErrorMessage extends Block {
  constructor(props: ErrorPageProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}

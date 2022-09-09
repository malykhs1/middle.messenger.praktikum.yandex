import Block from "../../utils/Block";
import template from "./error.hbs";
import { ErrorMessage } from "../../components/errorMessageTemplate";

export class ErrorPage extends Block {
  init() {
    this.children.Eror404 = new ErrorMessage({
      errorNumber: "404",
      errorText: "Page not found",
      navText: "Go back",
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

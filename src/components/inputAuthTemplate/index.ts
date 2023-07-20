import Block from "../../utils/Block";
import template from "./inputAuth.hbs";

interface inputAuthProps {
  value: string;
  type: string,
  name: string,
  placeholder: string,
  validationError?: boolean,
  validationErrorMessage?: string,
  hide?: boolean,
  disabled?: boolean,

  events?: {
    focus: () => void,
    blur: () => void,
  };
}

export class InputAuth extends Block <inputAuthProps> {
  constructor(props: inputAuthProps) {
    super(props);
  }

  public getValue() {
    this.props.value = ((this.element as HTMLInputElement).getElementsByTagName('input')[0]).value;

    return this.props.value;
  }

  public setValue(value: string) {
    return ((this.element as HTMLInputElement).getElementsByTagName('input')[0]).value = value;
  }

  public isValid(): boolean {
    return !this.props.validationError;
  }

  public removeError() {
    if (this.props.validationError) {
      this.props.validationError = false;
    }
  }

  public setError(message: string) {
    if (!this.props.validationError) {
      this.props.validationError = true;
      this.props.validationErrorMessage = message;
    }
  }

  public _addEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      ((this.element as HTMLInputElement).getElementsByTagName('input')[0]).addEventListener(eventName, events[eventName as keyof typeof events]);
    });
  }

  public _removeEvents() {
    const { events = {} } = this.props;

    if (events !== null && events !== undefined) {
      Object.keys(events).forEach((eventName) => {
        ((this.element as HTMLInputElement)?.getElementsByTagName('input')[0]).removeEventListener(eventName, events[eventName as keyof typeof events]);
      });
    }
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

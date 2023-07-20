import Block from "../../utils/Block";
import template from "./inputProfile.hbs";

interface inputProfileProps {
  labelProfile: string;
  dataProfile: string;
}

export class ItemProfile extends Block {
  constructor(props: inputProfileProps) {
    super('p', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}

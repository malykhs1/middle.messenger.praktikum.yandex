import Block from "../../utils/Block";
import template from "./authLink.hbs";

interface authLinkProps {
  linkText: string,
    linkClass?: string,
    events: {
        click: (route: string) => void,
    }
}

export class authLink extends Block<authLinkProps>  {
    constructor(props: authLinkProps) {
        super(props);
    }

  render() {
      return this.compile(template, { ...this.props });
  }
}

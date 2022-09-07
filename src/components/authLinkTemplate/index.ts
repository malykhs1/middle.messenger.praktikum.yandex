import Block from '../../utils/Block';
import template from './authLink.hbs';

interface authLinkProps {
    linkText: string;
}

export class authLink extends Block {
    constructor(props: authLinkProps) {
        super('a', props);
    }

    render() {
        return this.compile(template, this.props);
    }
}
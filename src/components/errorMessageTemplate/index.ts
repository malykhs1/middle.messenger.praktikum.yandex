import Block from '../../utils/Block';
import template from './errorMessage.hbs';

interface ErrorPageProps {
    errorNumber: string;
    errorText: string;
    navText: string;
}

export class ErrorMessage extends Block {
    constructor(props: ErrorPageProps) {
        super('div', props);
    }

    render() {
        return this.compile(template, this.props);
    }
}
import Block from '../../utils/Block';
import template from './profileInputError.hbs';

interface inputProfileErrorProps {
    idError: string;
}

export class inputProfileError extends Block {
    constructor(props: inputProfileErrorProps) {
        super('input', props);
    }

    render() {
        return this.compile(template, this.props);
    }
}
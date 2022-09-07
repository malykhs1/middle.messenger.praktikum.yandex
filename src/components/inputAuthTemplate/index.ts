import Block from '../../utils/Block';
import template from './inputAuth.hbs';

interface inputAuthProps {
    id: string;
    idError: string;
    title: string;
    name: string;
    placeholder: string;
    type: string;
    value: string;
    events?: {
        input?: (e?: any) => void,
        change?: (e?: any) => void,
        click?: (e?: any) => void,
    };
}

export class InputAuth extends Block {
    constructor(props: inputAuthProps) {
        super('input', props);
    }

    render() {
        return this.compile(template, this.props);
    }
}
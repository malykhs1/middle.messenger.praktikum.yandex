import Block from '../../utils/Block';
import template from './profileInput.hbs';

interface inputProfileProps {
    id: string;
    idError: string;
    label: string;
    name: string;
    placeholder: string;
    type: string;
    value: any;
    events?: {
        input?: (e?: any) => void,
        change?: (e?: any) => void,
        click?: (e?: any) => void,
    };
}

export class profileInput extends Block {
    constructor(props: inputProfileProps) {
        super('input', props);
    }

    render() {
        return this.compile(template, this.props);
    }
}
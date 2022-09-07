import Block from '../../utils/Block';
import template from './inputProfile.hbs';

interface inputProfileProps {
    label: string;
}

export class InputProfile extends Block {
    constructor(props: inputProfileProps) {
        super('input', props);
    }

    render() {
        return this.compile(template, this.props);
    }
}
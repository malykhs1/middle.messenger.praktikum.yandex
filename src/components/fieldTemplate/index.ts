import Block from '../../utils/Block';
import template from './field.hbs';
import * as style from './field.scss';

interface FieldProps {
    text: string,
    events: {
        click: () => void
    }
}

export default class Field extends Block {
    constructor(props: FieldProps) {
        super(props);
    }

    render() {
        return this.compile(template, { ...this.props, style });
    }
}

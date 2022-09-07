import Block from '../../utils/Block';
import template from './popup.hbs';

interface popupFileProps {
    popupTitle: string;
    popupMessage: string;
}

export class PopupFile extends Block {
    constructor(props: popupFileProps) {
        super('p', props);
    }

    render() {
        return this.compile(template, this.props);
    }
}
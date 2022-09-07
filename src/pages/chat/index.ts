import Block from '../../utils/Block';
import template from './chat.hbs';

export class ChatPage extends Block {
    render() {
        return this.compile(template, this.props);
    }
}

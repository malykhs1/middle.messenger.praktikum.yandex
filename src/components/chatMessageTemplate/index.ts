import Block from '../../utils/Block';
import template from './chatMessage.hbs';

interface chatMessageProps {
  classItem: string;
  textMessage: string;
  messageTime: string;
}

export class chatMessage extends Block {
  constructor(props: {
    classItem: string;
    textMessage: string;
    messageTime: string;

  }) {
    super('button', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
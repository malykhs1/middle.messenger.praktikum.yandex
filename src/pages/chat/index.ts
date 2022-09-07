import Block from '../../utils/Block';
import template from './chat.hbs';
import {chatMessage} from "../../components/chatMessageTemplate";

export class ChatPage extends Block {

  init() {
    this.children.chatMe1 = new chatMessage({
      classItem: "chat__container-message",
      textMessage:"Hello. How are you today?",
      messageTime: "11:01",
    });

    this.children.chatMe2 = new chatMessage({
      classItem: "chat__container-message",
      textMessage: "Sweet! So, what do you wanna do today?!",
      messageTime: "11:01",
    });

    this.children.chatBuddy1 = new chatMessage({
      classItem: "chat__container-message chat__container-message_darker",
      textMessage: "Hey! I'm fine. Thanks for asking!",
      messageTime: "11:02",
    });

    this.children.chatBuddy2 = new chatMessage({
      classItem: "chat__container-message chat__container-message_darker",
      textMessage: "Nah, I dunno. Play soccer.. or learn more coding perhaps?",
      messageTime: "11:02",
    });
  }

    render() {
        return this.compile(template, this.props);
    }
}

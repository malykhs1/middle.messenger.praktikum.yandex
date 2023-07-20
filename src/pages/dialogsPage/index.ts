import template from './dialogsPage.hbs';
import { ChatInfo } from '../../api/ChatsAPI';
import { authLink } from "../../components/authLinkTemplate";
import { InputAuth } from "../../components/inputAuthTemplate";
import DialogCard from '../../components/dialogCardTemplate';
import DialogMessages from '../../components/dialogMessagesTemplate';
import Popup from '../../components/popupTemplate';
import ButtonSubmit from "../../components/buttonSubmitFormsTemplate";

import ChatsController from '../../controllers/ChatController';
import store, { withStore } from '../../utils/Store';
import Router from '../../utils/Router';
import ButtonWithImage from '../../components/ButtonWithImageTemplate';
import MessagesController, { Message } from '../../controllers/MessagesController';
import createChatIcon from '../../../static/img/dialogsPage/createChat.svg'
import Validation from '../../utils/validation/Validation';
import SubmitPage from '../../utils/validation/SubmitPage';



export default class BaseDialogsPage extends SubmitPage {
    router: Router

    constructor() {
        super(() => {
            MessagesController.sendMessage(store.getState().selectedChat, document.getElementsByTagName('input')[0].value);
        });

        ChatsController.fetchChats();

        this.router = new Router('#app');
        this.props.userId = store.getState().user.id;
    }

    init() {
        this.children.profileLink = new authLink({
            linkText: 'Profile',
            linkClass: 'dialogs__link-to-profileTemplate',
            events: {
                click: () => {
                    this.router.go('/settings');
                },
            },
        });

        this.children.createChatButton = new ButtonWithImage({
            src: `${createChatIcon}`,
            events: {
                click: () => {
                    store.set('createChatPopupVisible', true);
                    // this.props.popupVisible = true;
                },
            },
        });

        this.children.sendMessageInput = new InputAuth({
            value: '',
            type: 'text',
            name: 'sendMessage',
            placeholder: 'Message',
            validationError: false,
            validationErrorMessage: '',
            events: {
                focus: () => {
                    (this.children.sendMessageInput as InputAuth).removeError();
                },
                blur: () => {
                    Validation.isEmptyInput(this.children.sendMessageInput as InputAuth);
                },
            },
        });

        this.children.sendButton = new ButtonSubmit({
            text: 'Send',
            type: 'submit',
        });

        this.props.checkInput = [
            this.children.sendMessageInput,
        ];
    }

    // @ts-ignore
    protected componentDidUpdate(oldProps: any, newProps: any): boolean {
        if (this.props?.createChatPopupVisible) {
            this.children.confirmPopup = new Popup({
                label: 'Chat name',
                placeholder: 'Enter the name of the chat',
                buttonText: 'Create',
                events: {
                    click: () => {
                        store.set('createChatPopupVisible', false);
                    }
                }
            })
        }

        if (this.props?.addUserInChatPopupVisible) {
            this.children.confirmPopup = new Popup({
                label: 'Users Id',
                placeholder: 'Enter users id',
                buttonText: 'Add user',
                events: {
                    click: () => {
                        store.set('addUserInChatPopupVisible', false);
                    }
                }
            })
        }

        if (this.props?.deleteChatPopupVisible) {
            this.children.confirmPopup = new Popup({
                empty: true,
                buttonText: 'Delete chat',
                events: {
                    click: () => {
                        store.set('deleteChatPopupVisible', false);
                    }
                }
            })
        }

        if (this.props?.deleteUserFromChatPopupVisible) {
            this.children.confirmPopup = new Popup({
                label: 'Users id',
                placeholder: 'Enter user id',
                buttonText: 'Delete user',
                events: {
                    click: () => {
                        store.set('deleteUserFromChatPopupVisible', false);
                    }
                }
            })
        }

        if (this.props?.messages) {
            this.children.dialogMessages = (this.props.messages[store.getState().selectedChat] || []).map((item: Message) => new DialogMessages({ ...item, isMine: store.getState().user.id == item.user_id }));
        }

        if (this.props?.chats)
            this.children.dialogsCards = this.props.chats.map((item: ChatInfo) => new DialogCard({ ...item, isSelected: store.getState().selectedChatId === item.id }));

        return true;
    }

    render() {
        return this.compile(template, { ...this.props, createChatIcon });
    }
}

const withSelectedChatMessages = withStore(state => {
    return {
        messages: state.messages || [],
        chats: state.chats || [],
        selectedChatId: state.selectedChatId || '',
        createChatPopupVisible: state.createChatPopupVisible || false,
        addUserInChatPopupVisible: state.addUserInChatPopupVisible || false,
        deleteChatPopupVisible: state.deleteChatPopupVisible || false,
        deleteUserFromChatPopupVisible: state.deleteUserFromChatPopupVisible || false,
    }
})

export const DialogsPage = withSelectedChatMessages(BaseDialogsPage);

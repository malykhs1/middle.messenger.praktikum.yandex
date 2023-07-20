import Block from '../../utils/Block';
import Li from '../../components/liTemplate';
import template from './navPage.hbs';
import Router from '../../utils/Router';

export default class NavPage extends Block {
  router: Router;

  constructor() {
    super({});
    this.router = new Router("#app");
  }

  init() {
    this.children.signInLink = new Li({
      text: 'Login',
      events: {
        click: () => {
          this.router.go('/sign-in')
        },
      },
    });

    this.children.signUpLink = new Li({
      text: 'Register',
      events: {
        click: () => {
          this.router.go('/sign-up')
        },
      },
    });

    this.children.dialogsLink = new Li({
      text: 'Dialogs',
      events: {
        click: () => {
          this.router.go('/messenger')
        },
      },
    });

    this.children.profileLink = new Li({
      text: 'Profile',
      events: {
        click: () => {
          this.router.go('/settings')
        },
      },
    });

    this.children.pageNotFound = new Li({
      text: '404',
      events: {
        click: () => {
          this.router.go('/404')
        },
      },
    });
  }

  render() {
    return this.compile(template, {});
  }
}


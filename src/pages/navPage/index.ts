import Block from '../../utils/Block';
import Li from '../../components/liTemplate';
import template from './navPage.hbs';
import Router from '../../utils/Router';

export default class NavPage extends Block {
  router: Router;
  isAuthenticated: boolean;

  constructor() {
    super({});
    this.router = new Router("#app");
  }

  init() {
    this.isAuthenticated = this.checkAuthentication(); // Проверяем аутентификацию в методе init()
    // Отображаем разные ссылки в зависимости от состояния авторизации
    if (this.isAuthenticated) {
      this.renderAuthenticatedLinks();
    } else {
      this.renderUnauthenticatedLinks();
    }
  }

  renderAuthenticatedLinks() {
    // Выводим ссылки для авторизованного пользователя
    this.children.dialogsLink = new Li({
      text: 'Dialogs',
      events: {
        click: () => {
          this.router.go('/messenger');
        },
      },
    });

    this.children.profileLink = new Li({
      text: 'Profile',
      events: {
        click: () => {
          this.router.go('/profile');
        },
      },
    });
  }

  renderUnauthenticatedLinks() {
    // Выводим ссылки для неавторизованного пользователя
    this.children.signInLink = new Li({
      text: 'Login',
      events: {
        click: () => {
          this.router.go('/sign-in');
        },
      },
    });

    this.children.signUpLink = new Li({
      text: 'Register',
      events: {
        click: () => {
          this.router.go('/sign-up');
        },
      },
    });
  }

  // Метод для проверки состояния авторизации пользователя
  checkAuthentication() {
    const isAuth = localStorage.getItem('isAuth');
    console.log(isAuth)
    return isAuth === 'true';
  }

  render() {
    return this.compile(template, {});
  }
}

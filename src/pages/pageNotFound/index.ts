import Block from '../../utils/Block';
import template from './pageNotFound.hbs';
import Router from "../../utils/Router";
import ErrorMessage from "../../components/ErrorMessageTemplate";




export default class PageNotFound extends Block {
  router: Router;

  constructor() {
    super({});
    this.router = new Router("#app");
  }

  init() {
    this.children.Eror404 = new ErrorMessage({
      errorNumber: '404',
      errorText: 'Page not found',
    });
  }

  render() {
        return this.compile(template, {});
    }
}

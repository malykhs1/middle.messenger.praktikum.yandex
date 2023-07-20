// eslint-disable-next-line import/no-unresolved, import/extensions
import Block from '../../utils/Block';
import template from './pageNotFound.hbs';
import { ErrorMessage }  from "../../components/ErrorMessageTemplate";




export default class PageNotFound extends Block {

  constructor() {
    super({ });
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

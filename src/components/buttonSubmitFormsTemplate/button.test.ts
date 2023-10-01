import { expect } from 'chai';
import sinon from 'sinon';
import  ButtonSubmit  from './index';

describe('Button component', () => {
  it('Should be clickable', () => {
    const callback = sinon.stub();
    const button = new ButtonSubmit({ text: '123', events: { click: callback }});

    const element = button.element as HTMLElement;

    element.click();

    expect(callback.calledOnce).to.eq(true);
  });
});

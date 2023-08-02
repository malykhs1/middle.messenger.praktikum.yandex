import { expect } from 'chai';

describe('Check router', () => {
  it('Navigating to a new page should change the state of the story entity', () => {
    window.history.pushState({page: 'login'}, 'Login', '/login');
    window.history.pushState({page: 'register'}, 'Register', '/register');
    expect(window.history.length).to.eq(3);
  });
});

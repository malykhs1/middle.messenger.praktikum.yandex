import API, { AuthAPI, SignInData, SignUpData } from "../api/AuthAPI";
import Router from "../utils/Router";
import store from '../utils/Store';

export class AuthController {
  private readonly api: AuthAPI;
  router: Router;

  constructor() {
    this.api = API;
    this.router = new Router('#app');
  }

  async signin(data: SignInData) {
    try {
      await this.api.signin(data);

      localStorage.setItem('isAuth', "true");
      console.log("AUTH")

      this.router.go('/profile');
    } catch (e: any) {
      console.error(e);
      if (e.reason === "User already in system") {
        this.router.go('/profile');
      }
    }
  }

  async signup(data: SignUpData) {
    try {
      await this.api.signup(data);
      localStorage.setItem('isAuth', "true");

      this.router.go('/profile');
    } catch (e: any) {
      console.error(e);
    }
  }

  async fetchUser() {
    const user = await this.api.read();

    store.set('user', user);
  }

  async logout() {
    try {
      await this.api.logout();
      localStorage.removeItem('isAuth');
      this.router.go('/');
    } catch (e: any) {
      console.error(e.message);
    }
  }
}

export default new AuthController();

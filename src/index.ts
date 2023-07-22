// eslint-disable-next-line import/extensions
import Router from './utils/Router';
import NavPage from "./pages/navPage/";
import SignInPage from './pages/auth/signin';
import SignUpPage from './pages/auth/signup';
import ProfilePage from './pages/profilePage';
import PageNotFound from './pages/pageNotFound';
import { DialogsPage } from './pages/dialogsPage';

const router = new Router('#app');

window.addEventListener('DOMContentLoaded', async () => {
  router
    .use('/', NavPage)
    .use('/sign-in', SignInPage)
    .use('/sign-up', SignUpPage)
    .use('/messenger', DialogsPage, 'protected')
    .use('/profile', ProfilePage, 'protected')
    .use('/404', PageNotFound);

  router.start();
});

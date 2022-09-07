import { LoginPage } from "./pages/loginPage";
import { RegisterPage} from "./pages/registerPage";
import { ProfilePage } from "./pages/profilePage";
import { ErrorPage } from "./pages/errorPage";
import { PopupPage } from "./pages/popupPage";
import { ChangeDataProfilePage } from "./pages/changeDataProfile";
import { ChatPage} from "./pages/chat";
//именно здесь будет происходить рендер компонентов нашего проекта

window.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('app') as HTMLElement;

    const loginPage = new LoginPage({ title: 'Sign in'});
    const registerPage = new RegisterPage({ title: 'Create account'});
    const profilePage = new ProfilePage();
    const errorPage = new ErrorPage();
    const popupPage = new PopupPage();
    const changeDataProfilePage = new ChangeDataProfilePage();
    const chatPage = new ChatPage();


    const login = document.getElementById('logIn') as HTMLElement;
    const register = document.getElementById('Register') as HTMLElement;
    const profile = document.getElementById('Profile')as HTMLElement;
    const error = document.getElementById('Error')as HTMLElement;
    const popup = document.getElementById('Popup')as HTMLElement;
    const profileChangeData = document.getElementById('ProfileChangeData')as HTMLElement;
    const chat = document.getElementById('Chat')as HTMLElement;

    function empty() {
        root.innerHTML = '';
    }

    chat.addEventListener("click", function () {
        empty();
        root.append(chatPage.getContent()!);
    });

    profileChangeData.addEventListener("click", function () {
        empty();
        root.append(changeDataProfilePage.getContent()!);
    });

    login.addEventListener("click", function () {
        empty();
        root.append(loginPage.getContent()!);
    });

    register.addEventListener("click", function () {
        empty();
        root.append(registerPage.getContent()!);
    });

    profile.addEventListener("click", function () {
        empty();
        root.append(profilePage.getContent()!);
    });

    error.addEventListener("click", function () {
        empty();
        root.append(errorPage.getContent()!);
    });

    popup.addEventListener("click", function () {
        empty();
        root.append(popupPage.getContent()!);
    });


    loginPage.dispatchComponentDidMount();
    registerPage.dispatchComponentDidMount();
    profilePage.dispatchComponentDidMount();
    errorPage.dispatchComponentDidMount();
    popupPage.dispatchComponentDidMount();
    changeDataProfilePage.dispatchComponentDidMount();
    chatPage.dispatchComponentDidMount();
});
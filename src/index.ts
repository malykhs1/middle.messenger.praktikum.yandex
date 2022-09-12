import { LoginPage } from "./pages/loginPage";
import { RegisterPage } from "./pages/registerPage";
import { ProfilePage } from "./pages/profilePage";
import { ErrorPage } from "./pages/errorPage";
import { PopupPage } from "./pages/popupPage";
import { ChangeDataProfilePage } from "./pages/changeDataProfile";
import { ChatPage } from "./pages/chat";
//именно здесь будет происходить рендер компонентов нашего проекта

window.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("app") as HTMLElement;

  const loginPage = new LoginPage ({ title: "Sign in" });
  const registerPage = new RegisterPage({ title: "Create account" });
  const profilePage = new ProfilePage();
  const errorPage = new ErrorPage();
  const popupPage = new PopupPage();
  const changeDataProfilePage = new ChangeDataProfilePage();
  const chatPage = new ChatPage();

  const loginLink = document.getElementById("logIn") as HTMLElement;
  const registerLink = document.getElementById("Register") as HTMLElement;
  const profileLink = document.getElementById("Profile") as HTMLElement;
  const errorLink = document.getElementById("Error") as HTMLElement;
  const popupLink = document.getElementById("Popup") as HTMLElement;
  const profileChangeDataLink = document.getElementById(
    "ProfileChangeData"
  ) as HTMLElement;
  const chatLink = document.getElementById("Chat") as HTMLElement;

  function empty() {
    root.innerHTML = "";
  }

  chatLink.addEventListener("click", function () {
    empty();
    root.append(chatPage.getContent()!);
  });

  profileChangeDataLink.addEventListener("click", function () {
    empty();
    root.append(changeDataProfilePage.getContent()!);
  });

  loginLink.addEventListener("click", function () {
    empty();
    root.append(loginPage.getContent()!);
  });

  registerLink.addEventListener("click", function () {
    empty();
    root.append(registerPage.getContent()!);
  });

  profileLink.addEventListener("click", function () {
    empty();
    root.append(profilePage.getContent()!);
  });

  errorLink.addEventListener("click", function () {
    empty();
    root.append(errorPage.getContent()!);
  });

  popupLink.addEventListener("click", function () {
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

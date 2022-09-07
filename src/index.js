"use strict";
exports.__esModule = true;
var homePage_1 = require("./pages/homePage");
//именно здесь будет происходить рендер компонентов нашего проекта
window.addEventListener('DOMContentLoaded', function () {
    var root = document.querySelector('#app');
    var homePage = new homePage_1.HomePage({ title: 'Home page' });
    root.append(homePage.getContent());
    homePage.dispatchComponentDidMount();
});

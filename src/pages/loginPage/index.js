"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.HomePage = void 0;
var Block_1 = require("../../utils/Block");
var home_hbs_1 = require("./home.hbs");
var button_1 = require("../../components/buttonSubmitFormsTemplate");
var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage(props) {
        return _super.call(this, 'div', props) || this;
    }
    HomePage.prototype.init = function () {
        this.children.button = new button_1.Button({
            label: 'Click me',
            events: {
                click: function () {
                    return console.log('clicked');
                }
            }
        });
    };
    HomePage.prototype.render = function () {
        return this.compile(home_hbs_1["default"], this.props);
    };
    return HomePage;
}(Block_1["default"]));
exports.HomePage = HomePage;

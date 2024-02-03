"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var message = 'Hello World';
console.log(message);
function MyButton(_a) {
    var title = _a.title;
    return React.createElement('button', null, title);
}
function MyApp() {
    // Display a <button>
    return React.createElement(MyButton, { title: 'Button' });
}
exports.default = MyApp;

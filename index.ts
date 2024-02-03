import React = require("react");

let message: string = 'Hello World';
console.log(message);

function MyButton({ title }: { title: string }) {
    return React.createElement('button',null,title);
}

export default function MyApp() {

    // Display a <button>
    return React.createElement(
        MyButton,
        {title:'Button'}
      );
  }
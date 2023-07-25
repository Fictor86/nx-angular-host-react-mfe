// import { StrictMode } from 'react';
// import * as ReactDOM from 'react-dom/client';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );

// class Mfe4Element extends HTMLElement {
//   connectedCallback() {
//     root.render(
//       <StrictMode>
//         <App />
//       </StrictMode>
//     );
//   }
// }

class Mfe4Element extends HTMLElement {
  connectedCallback() {
    console.log('http-mfe-react-element connectedCallback from DOM');

    window.React = React;
    ReactDOM.render(<App />, this);
  }

  disconnectedCallback() {
    console.log('http-mfe-react-element disconnectedCallback from DOM');
  }
}

customElements.define('http-mfe-react-element', Mfe4Element);

import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

class MfeReact extends HTMLElement {
  connectedCallback() {
    console.log('web-component: bootstrap.tsx');

    // root.render(<h1>TEST web-component: bootstrap.tsx</h1>);

    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  }
}

customElements.define('microfront-react', MfeReact);

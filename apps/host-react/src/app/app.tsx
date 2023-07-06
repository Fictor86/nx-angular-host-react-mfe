import * as React from 'react';

import { Link, Route, Routes } from 'react-router-dom';
import Home from './home/home';

const MicrofrontReact = React.lazy(() => import('microfront-react/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/microfront-react">MicrofrontReact</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/microfront-react" element={<MicrofrontReact />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;

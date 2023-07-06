// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import Home from './home/home';

export function App() {
  console.log('component: app.tsx');

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;

import { FC } from 'react';
import Header from './components/Header';
import List from './components/List';
import Mainview from './components/Mainview';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <Header />
      <Mainview />
    </div>
  );
};

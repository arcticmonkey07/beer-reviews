import { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store'

import Content from './components/Content/Content';
import Header from './components/Header/Header';

const App: FC = () => {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Content  />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
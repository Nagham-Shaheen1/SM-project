import { Button } from '@mantine/core';
import './App.css'
import '@mantine/core/styles.css';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/routes';

function App() {

  return (
    <>
      <Provider store={store} >
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App

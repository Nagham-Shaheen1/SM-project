import './App.css'
import '@mantine/core/styles.css';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/routes';
import { MantineProvider } from '@mantine/core';

function App() {

  return (
    <>
      <Provider store={store} >
        <MantineProvider>
        <RouterProvider router={router} />
        </MantineProvider>
      </Provider>
    </>
  )
}

export default App

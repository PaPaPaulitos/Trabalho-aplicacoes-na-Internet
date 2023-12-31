import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Routes/Home';
import Dashboard from './Routes/Dashboard';
import CreateEvent from './Routes/CreateEvent';
import EventDes from './Routes/EventDes';
import ErrorPage from './Routes/ErrorPage';
import Login from './Routes/Login';
import Alternative from './Alternative'
import Register from './Routes/Register';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/dashboard',
        element: <Dashboard/>
      },
      {
        path: '/createevent',
        element: <CreateEvent/>
      },
      {
        path: '/eventdes',
        element: <EventDes/>
      }
    ]
  },
  {
    path: '/',
    element: <Alternative/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage/>
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import './App.css';
import Home from './views/Home';
import Calendar from './views/Calendar';
import NoMatch from './views/NoMatch';

import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/calendar",
    element: <Calendar />
  },
  {
    path: "*",
    element: <NoMatch />
  }
]);

function App() {
  return (
    <div className='h-screen w-screen'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

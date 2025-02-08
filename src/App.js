import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import Home from './Compnents/Home';
import Navbar from './Compnents/Navbar';
import About from './Compnents/About';
import Error from './Compnents/Error';
import TopItem from './Compnents/TopItemMenu';
import Item from './Compnents/ItemDetails';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
    errorElement: <Error />,
  },
  {
    path: '/TopItem/:category',
    element:(
      <div>
        <Navbar/>
        <TopItem/>
      </div>
    ),
    errorElement: <Error />,
  },
  {
    path:'/ItemDetails/:id',
    element:(
      <div>
        <Navbar/>
        <Item/>
      </div>
    ),
    errorElement: <Error />,
  }
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;

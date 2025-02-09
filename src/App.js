import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import Home from './Compnents/Home';
import Navbar from './Compnents/Navbar';
import About from './Compnents/About';
import Error from './Compnents/Error';
import TopItem from './Compnents/TopItemMenu';
import Item from './Compnents/ItemDetails';
import { ShopProvider } from './Context/ShopContext';
import Cart from './Compnents/Cart';

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
  },
  {
    path: "/cart", // Add a route for the Cart page
    element: (
      <div>
        <Navbar />
        <Cart />

      </div>
    ),
    errorElement: <Error />,
  },
]);

const App = () => {
  return (
    <div className="App">
      <ShopProvider>
        <RouterProvider router={appRouter} />
      </ShopProvider>
    </div>
  );
};

export default App;

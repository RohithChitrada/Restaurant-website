import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import Home from './Compnents/Home';
import Navbar from './Compnents/Navbar';
import Contact from './Compnents/Contact';
import Error from './Compnents/Error';
import TopItem from './Compnents/TopItemMenu';
import Item from './Compnents/ItemDetails';
import { ShopProvider } from './Context/ShopContext';
import Cart from './Compnents/Cart';
import Footer from './Compnents/Footer';
import Notification from './Compnents/Notification';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
        <Footer/>
      </div>
    ),
    errorElement: <Error />,
  },
  {
    path: "/contact",
    element: (
      <div>
        <Navbar />
        <Contact />
        <Footer/>
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
        <Footer/>
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
        <Footer/>
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
        <Footer/>

      </div>
    ),
    errorElement: <Error />,
  },
]);

const App = () => {
  return (
    <div className="App">
      <ShopProvider>
        <Notification />
        <RouterProvider router={appRouter} />
      </ShopProvider>
    </div>
  );
};

export default App;

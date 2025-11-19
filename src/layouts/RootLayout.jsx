import React from 'react';

import Header from '../components/Header';
import { Outlet, useNavigation } from 'react-router';
import { Atom } from 'react-loading-indicators';
import { ToastContainer } from 'react-toastify';
import Footer from '../pages/Footer';

const RootLayout = () => {
  const { state } = useNavigation();
  
  // console.log(state)
    // console.log(state);
    return (
      <div>
        <Header />
        <main>
          {state === "loading" ? (
            <div className="min-h-screen flex items-center justify-center">
              <Atom color="#32cd32" size="medium" text="" textColor="" />
            </div>
          ) : (
            <Outlet />
          )}
        </main>
        <Footer/>
        <ToastContainer/>
      </div>
    );
};

export default RootLayout;
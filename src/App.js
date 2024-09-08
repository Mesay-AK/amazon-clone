import './App.css';
import Header from './Header';
import Home from './Home';
import{BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Checkout from "./Checkout";
import Login from './Login';
import { useStateValue } from './StateProvider';
import React, { useEffect } from 'react';
import {auth} from './firebase';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Order from './Order';

const promise = loadStripe(
  "pk_test_51NcBmGDRT8J0h34z27bVSyhWZGxROWoDhi8QFm8tbdQbcUHYGzaxnhGsYuppO3ZCvbxRv45gCoYH3ds1lSd9HMAL00pPFu1V9B"
);


function App() {
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
       {/* eslint-disable-next-line */}
      <div className="App">
        <Routes>

          <Route path="/orders" element={ <> <Header /> <Order /> </>  } />
          <Route path="/login" element={ <> <Login /> </>}  />
          <Route path="/payment" element={ <><Header /><Elements stripe={promise}><Payment /></Elements> </> }/>
          <Route path="/checkout" element={ <><Header /> <Checkout /></> }/>
          <Route path="/" element={ <> <Header /> <Home /> </>} />

        </Routes>
      </div>
    </Router>
  );
}


export default App;

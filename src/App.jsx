import Checkout from './pages/Checkout.jsx';

import Header from './components/Header.jsx';
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import{BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Orders from './pages/Orders.jsx';

const App = () => {
  return ( 

    <Router>
      <div className="App">
        <Routes>

          <Route path="/Orders" element={ <> <Header /> <Orders /> </>  } />

          <Route path="/Login" element={ <> <Login /> </>}  />

          <Route path="/Checkout" element={ <><Header /> <Checkout /></> }/>

          <Route path="/" element={ <> <Header /> <Home /> </>} />

        </Routes>
      </div>
    </Router>

   );
}
 
export default App;
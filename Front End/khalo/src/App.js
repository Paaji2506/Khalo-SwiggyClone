import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';

import Footer from './components/Footer';
import Userdashboard from './components/Userdashboard';
import Admindashboard from './components/Admindashboard';
import Allrestaurants from './components/Allrestaurants';
import Addrestaurant from './components/Addrestaurant';


function App() {
  return (
    <Router> 
    <Switch>
    <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/admindashboard">
           <Admindashboard/>
          </Route>
          <Route exact path="/userdashboard">
           <Userdashboard/>
          </Route>
          <Route exact path="/allrestaurants">
           <Allrestaurants/>
          </Route>
          <Route exact path="/addrestaurants">
           <Addrestaurant/>
          </Route>
          
        </Switch>
        <Footer/>
      </Router>
  );
}

export default App;

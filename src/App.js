import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home/Home';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import NotFound from './Component/NotFound/NotFound';
import Login from './Component/Login/Login/Login';
import Register from './Component/Register/Register';
import AuthProvider from './context/AuthProvider';
import BreakfastDetails from './Component/Home/Services/Breakfast/BreakfastDetails/BreakfastDetails';
import SingleLunch from './Component/Home/Services/Lunch/SingleLunch/SingleLunch';
import LunchDetails from './Component/Home/Services/Lunch/LunchDetails/LunchDetails';
import DinnerDetails from './Component/Home/Services/Dinner/DinnerDetails/DinnerDetails';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/home-breakfast/:serviceId">
              <BreakfastDetails></BreakfastDetails>
            </Route>
            <Route exact path="/home-lunch/:serviceId">
              <LunchDetails></LunchDetails>
            </Route>
            <Route exact path="/home-dinner/:serviceId">
              <DinnerDetails></DinnerDetails>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import {Row,Button,Col} from "react-bootstrap";
import Meal from "./Components/Meals/Meal";
import Meals from "./Components/Meals/Meals";
import Resturent from "./Components/Resturent/Resturent";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Aboutus from "./Components/About/Aboutus";
import Contact from "./Components/Contact/Contact";

import NotFound from "./Components/Error Page/NotFound";
import MealDetails from "./Components/Meals/MealDetails";

function App() {
  return (
    <div className="App">
       <Router>
         <Switch>

           <Route exact path="/">
             <Resturent></Resturent>
           </Route>
           <Route exact path="/resturent">
             <Resturent></Resturent>
           </Route>

           <Route exact path="/about">
             <Aboutus></Aboutus>
           </Route>
           <Route exact path="/resturent/:mealid">
             <MealDetails></MealDetails>
           </Route>
             <Route exact path="/contact">
               <Contact></Contact>
             </Route>



         </Switch>
       </Router>



    </div>
  );
}

export default App;

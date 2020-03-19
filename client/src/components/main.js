import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchForClasses from './searchforclasses';
import ViewMyClasses from './viewmyclasses';
import ShoppingCart from './shoppingcart';
import MySchedule from './myschedule';
import DropClasses from './dropclasses';
import BrowseCatalog from './browsecatalog';
import LandingPage from './landingpage';
import SearchResults from './searchresults';

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/searchforclasses" component={SearchForClasses} />
            <Route path="/viewmyclasses" component={ViewMyClasses} />
            <Route path="/shoppingcart" component={ShoppingCart} />
            <Route path="/myschedule" component={MySchedule} />
            <Route path="/dropclasses" component={DropClasses} />
            <Route path="/browsecatalog" component={BrowseCatalog} />
            <Route path="/searchresults" component={SearchResults}/>
           
        </Switch>
    )
    
}

export default Main;
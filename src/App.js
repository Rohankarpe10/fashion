import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'
import MenProductList from './components/MenProductList';
import WomenProductList from './components/WomenProductList';
import KidProductList from './components/KidProductList';
import Home from './components/Home'
import Modal from './components/Modal'
import StoreModal from './components/StoreModal'
import Checkout from './components/Checkout'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch> 
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/men' component={MenProductList} />
        <Route exact path='/women' component={WomenProductList} />
        <Route exact path='/kids' component={KidProductList} />
        <Route path='/details' component={Details} />
        <Route path='/cart' component={Cart} />
        <Route path='/checkout' component={Checkout} />
        <Route component={Default} />
      </Switch>

      <Modal />
      <StoreModal />
    </React.Fragment>
    
  );
}

export default App;

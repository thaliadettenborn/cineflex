import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import {DataProvider} from './context/DataContext';
import Header from './componentsApp/Header';
import Main from './pages/Main';
import Sessions from './pages/Sessions';
import Footer from './componentsApp/Footer';
import Seats from './pages/Seats';
import Client from './pages/Client';
import Sucess from './pages/Sucess';

function App() {
  return (
    <DataProvider>
      <Router>
        <Header />

        <Switch>
          <Route path='/' exact>
            <Main />
          </Route>

          <Route path='/sessoes'>
            <Sessions />
            <Footer />
          </Route>

          <Route path='/assentos'>
            <Seats />
            <Footer />
          </Route>

          <Route path='/cliente'>
            <Client />
            <Footer />
          </Route>
          
          <Route path='/sucesso'>
            <Sucess />
          </Route>
        </Switch>
      </Router>
    </DataProvider>
  );
}

export default App;

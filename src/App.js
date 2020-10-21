import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import {DataProvider} from './context/DataContext';
import Header from './componentsApp/Header';
import Main from './pages/Main';
import Sections from './pages/Sections';

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
            <Sections />
          </Route>
        </Switch>
      </Router>
    </DataProvider>
  );
}

export default App;

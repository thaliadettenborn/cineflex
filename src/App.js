import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import {DataProvider} from './context/DataContext';
import Main from './pages/root/Main';

function App() {
  return (
    <DataProvider>
      <Router>
        <h1>Cineflex</h1>
        <Switch>
          <Route path='/' exact>
            <Main />
          </Route>
        </Switch>
      </Router>
    </DataProvider>
  );
}

export default App;

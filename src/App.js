import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import {DataProvider} from './context/DataContext';
import Main from './pages/main/Main';
import Header from './componentsApp/Header';

function App() {
  return (
    <DataProvider>
      <Router>
        <Header />
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

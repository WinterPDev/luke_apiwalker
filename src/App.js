import './App.css';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" exact component={SearchForm} />
        <Route exact path="/:resource/:id">
          <SearchForm />
          <SearchResult />
        </Route>
      </Switch>
      
      </BrowserRouter>

    </div>
  );
}

export default App;

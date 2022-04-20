import { Route, Switch } from 'react-router-dom';
import './App.module.scss';
import UsersPage from '../UsersPage/UsersPage';
import UserPage from '../UserPage/UserPage';


const App = () => {


  return (
    <div className="app">
      <Switch>

        <Route exact path='/'>
          <UsersPage/>
        </Route>

        <Route path='/:id'>
          <UserPage/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;

import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import { Strategy, Makestrategy, Comparestrategy, Buystrategy } from './pages/Strategy';
import { Notification, Dailyupdate, Paymentreceipt } from './pages/Notification';
import { Visualization, Graphicalrepresentation, Numericalrepresentation } from './pages/Visualization';
import Logout from './pages/Logout';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/profile' exact component={Profile} />
        <Route path='/strategy' exact component={Strategy} />
        <Route path='/strategy/makestrategy' exact component={Makestrategy} />
        <Route path='/strategy/comparestrategy' exact component={Comparestrategy} />
        <Route path='/strategy/buystrategy' exact component={Buystrategy} />
        <Route path='/notification' exact component={Notification} />
        <Route path='/notification/dailyupdate' exact component={Dailyupdate} />
        <Route path='/notification/paymentreceipt' exact component={Paymentreceipt} />
        <Route path='/visualization' exact component={Visualization} />
        <Route path='/visualization/graphicalrepresentation' exact component={Graphicalrepresentation} />
        <Route path='/visualization/numericalrepresentation' exact component={Numericalrepresentation} />
        <Route path='/logout' exact component={Logout} />
      </Switch>
    </Router>
  );
}

export default App;

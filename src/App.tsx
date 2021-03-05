//vendor imports
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//global styles
import GlobalStyle from './styles/globalStyles'

//pages
import Login from '@pages/login'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/admin" component={() => <h2>ADMIN</h2>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

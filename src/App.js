import './App.css';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Users from './user/pages/Users';
import NewCodeSnippet from './codeSnippet/pages/NewCodeSnippet';
import CodeSnippets from './codeSnippet/pages/CodeSnippets';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Users></Users>
        </Route>
        <Route path="/code-snippets" exact>
          <CodeSnippets />
        </Route>
        <Route path="/code-snippet/new" exact>
          <NewCodeSnippet />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;

import './App.css';
import Layout from './hoc/Layout/Layout';
import Todo from './containers/Todo/Todo'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
// import ChangeTheme from './components/ChangeTheme/ChangeTheme'
import Auth from './containers/Auth/Auth'
import Navibar from './components/NaviBar/Navibar';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Navibar />
        <Switch>
          {/* <Route path="/change-theme" exact component={ChangeTheme}/> */}
          <Route path="/" exact component={Todo}/>
          {/* <Route path="/auth" exact component={Auth}/> */}
          <Redirect to="/"/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
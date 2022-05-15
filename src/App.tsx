import './App.css';
import Layout from './hoc/Layout/Layout';
import Todo from './containers/Todo/Todo'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
// import ChangeTheme from './components/ChangeTheme/ChangeTheme'
import Auth from './containers/Auth/Auth'
import Navibar from './components/NaviBar/Navibar'
import Toggle from './containers/Toggle/Toggle';
// import { useEffect } from 'react';
// import axios from 'axios'

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Navibar />
        <Switch>
          {/* <Route path="/change-theme" exact component={ChangeTheme}/> */}
          <Route path="/" exact component={Auth}/>
          <Route path="/toggle" exact component={Toggle}/>
          <Route path="/todos" exact component={Todo}/>
          <Redirect to="/"/>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
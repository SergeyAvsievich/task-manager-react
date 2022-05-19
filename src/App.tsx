import './App.css';
import Layout from './hoc/Layout/Layout';
import Todo from './containers/Todo/Todo'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Auth from './containers/Auth/Auth'
import Navibar from './components/NaviBar/Navibar'
import Toggle from './containers/Toggle/Toggle';
import { useTypedSelector } from './hooks/useTypedSelector';
// import ChangeTheme from './components/ChangeTheme/ChangeTheme'
// import { useEffect } from 'react';
// import axios from 'axios'

function App() {

  const isLogin = useTypedSelector(state => state.auth.token)

  let routes = (
    <>
      <Switch>
        <Route path="/auth" exact component={Auth}/>
        <Redirect to="/auth"/>
      </Switch>
    </>
  )

  if (isLogin) {
    routes = (
      <>
        <Navibar />
        <Switch>
          <Route path="/" exact component={Todo}/>
          <Route path="/toggle" exact component={Toggle}/>
          <Redirect to="/"/>
        </Switch>
      </>
    ) 
  } 

  return (
    <Layout>
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </Layout>
  )
}

export default App;
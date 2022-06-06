import './App.css'
import Layout from './hoc/Layout/Layout'
import Todo from './containers/Todo/Todo'
import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom'
import Auth from './containers/Auth/Auth'
import Toggle from './containers/Toggle/Toggle'
import {useTypedSelector} from './hooks/useTypedSelector'
import {Error} from './containers/Error/Error'
import Navbar from './components/Navbar/Navbar'
// import ChangeTheme from './components/ChangeTheme/ChangeTheme'
// import { useEffect } from 'react';
// import axios from 'axios'

function App() {

  const userId = useTypedSelector(state => state.auth.token)
  let user = localStorage.getItem('userId') || userId

  let routes = (
    <>
      {/* <Navbar/> */}
      <Routes>
        {/* <Route path="/" element={<Auth/>}/> */}
        <Route path="/" element={<Todo/>}/>
        <Route path="/*" element={<Error/>}/>
      </Routes>
    </>
  )

  if (userId) {
    console.log('userid: ', user)
    const link = `/todos/${user}`
    routes = (
      <>
        <Routes>
          {/* <Route path="/" element={<Navigate to={link} replace/>}/>
          <Route path="/todos/:user" element={<Todo/>}/>
          <Route path="/toggle" element={<Toggle/>}/> */}
        </Routes>
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
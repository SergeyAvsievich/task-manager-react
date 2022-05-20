import './App.css';
import Layout from './hoc/Layout/Layout';
import Todo from './containers/Todo/Todo'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Auth from './containers/Auth/Auth'
import Navibar from './components/NaviBar/Navibar'
import Toggle from './containers/Toggle/Toggle';
import { useTypedSelector } from './hooks/useTypedSelector';
// import ChangeTheme from './components/ChangeTheme/ChangeTheme'
// import { useEffect } from 'react';
// import axios from 'axios'

function App() {

  const userId = useTypedSelector(state => state.auth.token)

  let routes = (
    <>
      <Routes>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/*" element={<Auth/>}/>
      </Routes>
    </>
  )

  if (userId) {
    routes = (
      <>
        <Navibar />
        <Routes>
          <Route path="/todos" element={<Todo/>}/>
          <Route path="/toggle" element={<Toggle/>}/>
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
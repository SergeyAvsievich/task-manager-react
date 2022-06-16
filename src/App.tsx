import './App.css'
import Layout from './hoc/Layout/Layout'
import Todo from './containers/Todo/Todo'
import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom'
import Auth from './containers/Auth/Auth'
import Toggle from './containers/Toggle/Toggle'
import {useTypedSelector} from './hooks/useTypedSelector'
import {Error} from './containers/Error/Error'

function App() {

  let userId = useTypedSelector(state => state.auth.token)
  // let userLS = localStorage.getItem('userId')

  if (userId || localStorage.getItem('userId')) {
    userId = localStorage.getItem('userId')
  }

  let routes = (
    <>
      <Routes>
        <Route path="/" element={<Auth/>}/>
        <Route path="/*" element={<Error/>}/>
      </Routes>
    </>
  )

  if (userId) {
    const link = `/todos/${userId}`
    routes = (
      <>
        <Routes>
          <Route path="/" element={<Navigate to={link} replace />} />
          <Route path="/todos/:id" element={<Todo/>}/> 
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
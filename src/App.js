import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Home from './routes/Home/Index'
import Layout from './components/Base/Layout'
import 'bootstrap/dist/css/bootstrap.css'
import { getResources } from './resources'
import LocalizationAction from './actions/localization'
import './App.css'

const App = () => {
  const dispatch = useDispatch()
  const culture = useSelector(state => state.culture)
  const localization = useSelector(state => state.localization)

  useEffect(() => {
    //document.body.setAttribute('style', 'background: #e5e5e5;')
    dispatch(LocalizationAction.setLocalization(getResources(culture)))
  }, [])

  return (
    localization === null ? null : (
      <Router>
        <div>
          <Switch>
            <Route path='/' render={()=> (
              <Layout>
                <Home></Home>
              </Layout>
            )}>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  )
}

export default App
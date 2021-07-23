import React from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom"
import LandingPage from './screens/LandingPage'
import QuizMain from './screens/QuizMain'
const App = () => {
  return (
    <Router basename={"quiz_application"}>
      <React.Fragment>
        <Route component={LandingPage} path="/" exact/>
        <Route component={QuizMain} path="/quiz" exact/>
      </React.Fragment>
    </Router>
  )
}
export default App
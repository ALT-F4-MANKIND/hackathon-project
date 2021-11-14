import FormContainer from './Components/Form/FormContainer'
import OtherForm from './Components/OtherForm'
import Footer from './Components/Footer/FooterContainer'
import Analysis from './Components/Analysis/AnalysisContainer'
import SignIn from './Components/SignIn'
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import NavigationBar from './Components/Header/NavigationBar';
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isSignedIn: false
    }
    this.handleSignIn = this.handleSignIn.bind(this)
  }

  handleSignIn() {
    console.log("handleSignIn")
    this.setState({
      isSignedIn: true
    })
  }
  
  render () {
    return this.state.isSignedIn ? 
      (
        <>
          <NavigationBar />
          <div className="app">
            <Router>
              <Routes>
                <Route path="/other-form" element={<OtherForm/>} />
                <Route path="/analysis" element={<Analysis/>} />
                <Route exact={true} path="/" element={<FormContainer/>} />
              </Routes>
            </Router>
            <Footer />
          </div>
        </>
      )
    :
    <SignIn handleSignIn={this.handleSignIn}/>;


  }
}

export default App;
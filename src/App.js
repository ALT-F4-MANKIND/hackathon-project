import FormContainer from './Components/Form/FormContainer'
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
    this.handleSignOut = this.handleSignOut.bind(this)
  }

  handleSignIn() {
    console.log("handleSignIn")
    this.setState({       // ROBERTO: here you want to check if the user is signed in or not, if they are, set isSignedIn to true
      isSignedIn: true
    })
  }

  handleSignOut() {
    console.log("handleSignOut")
    this.setState({       // ROBERTO: here you want to check if the user is signed in or not, if they are, set isSignedIn to true
      isSignedIn: false
    })
  }
  
  render () {
    // return this.state.isSignedIn ? 
    return  (
        <>
          <NavigationBar handleSignOut={this.handleSignOut}/>
          <div className="app">
            <Router>
              <Routes>
                <Route path="/analysis" element={<Analysis/>} />
                <Route exact={true} path="/" element={<FormContainer/>} />
              </Routes>
            </Router>
            <Footer />
          </div>
        </>
      )
    // :
    // <SignIn handleSignIn={this.handleSignIn}/>;


  }
}

export default App;
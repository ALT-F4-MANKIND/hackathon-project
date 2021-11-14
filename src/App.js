import NavigarionBar from './Components/Header/NavigationBar'
import FormContainer from './Components/Form/FormContainer'
import Footer from './Components/Footer/FooterContainer'
import Analysis from './Components/Analysis/AnalysisContainer'
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
      onFormPage: true
    }
  }
  
  render () {
    return (
      <>
        <NavigationBar />
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
    );

  }
}

export default App;

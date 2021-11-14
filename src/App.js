import './App.css';
import Header from './Components/Header/HeaderContainer'
import FormContainer from './Components/Form/FormContainer'
import Footer from './Components/Footer/FooterContainer'
import Analysis from './Components/Analysis/AnalysisContainer'
import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      onFormPage: true
    }
  }
  
  render () {
    return (
      <div className="App">
        <Header />
        <FormContainer />
        <Analysis />
        <Footer />
      </div>
    );

  }
}

export default App;

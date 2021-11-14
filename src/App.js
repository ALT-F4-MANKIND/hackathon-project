import './App.css';
import Header from './Components/Header'
import FormContainer from './Components/FormContainer'
import Footer from './Components/Footer'

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/store';

function App() {
  return (
    <div className="App">
      <Header />
      <FormContainer />
      <Footer />
    </div>
  );
}

export default App;

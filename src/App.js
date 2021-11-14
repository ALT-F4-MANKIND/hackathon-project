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

import 'firebase/auth';

import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from '@firebase/auth';
import { getAuth, signOut, onAuthStateChanged } from '@firebase/auth';
import { initializeApp } from '@firebase/app';
import {useAuthState} from 'react-firebase-hooks/auth';
import { getFirestore, updateDoc, addDoc,collection } from '@firebase/firestore'


const firebaseApp = initializeApp({ 
    apiKey: "AIzaSyCV6lWSaS3VpPALnuj_nZ6oGnsBG1_RM-g",
      authDomain: "level-7f535.firebaseapp.com",
      databaseURL: "https://level-7f535-default-rtdb.firebaseio.com/",
      projectId: "level-7f535",
      storageBucket: "level-7f535.appspot.com",
      messagingSenderId: "600278227779",
      appId: "1:600278227779:web:012ba071acccfe0ac12df6",
      measurementId: "G-NS3XXMZYGC"
});

const firestore = getFirestore();
const auth = getAuth();

const userCollection = collection(firestore, 'users 1');

async function updateUsers(username) {
  const updatedUser = await updateDoc(userCollection, {name: username});
}

function addNewUser(userName) {
  const newUser = addDoc(userCollection, {name: userName});
}

function checkForSignIn()
{
    
    const user = auth.currentUser;
    
    const provider = new GoogleAuthProvider();
    
    if (user)
    {
      console.log("You are already SIGNED IN!");
    }
    else
    {
      signInWithPopup(auth, provider).then((result) => {
        const user = result.currentUser;
        const uid = user.uid;
        addNewUser(uid);
        
        
      }).catch((error) => {
        console.log(error);
      });
    }
}



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
    checkForSignIn();
    this.setState({       // ROBERTO: here you want to check if the user is signed in or not, if they are, set isSignedIn to true
      isSignedIn: true
    })
  }

  handleSignOut() {
    console.log("handleSignOut")
    signOut(auth);
    this.setState({       // ROBERTO: here you want to check if the user is signed in or not, if they are, set isSignedIn to true
      isSignedIn: false
    })
  }
  
  render () {
    return this.state.isSignedIn ? 
      (
        <>
          <NavigationBar handleSignOut={this.handleSignOut}/>
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
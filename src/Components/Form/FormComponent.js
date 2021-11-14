import React from 'react'
import './Form.css'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'firebase/auth';

import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from '@firebase/auth';
import { getAuth, signOut, onAuthStateChanged } from '@firebase/auth';
import { initializeApp } from '@firebase/app';
import {useAuthState} from 'react-firebase-hooks/auth';

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

 

/*
    function isSignedIn()
{
    console.log("it worked");
    signOut(auth).then(() => 
    {
        console.log("Sign out successful");
        const user = auth.currentUser;
    }).catch(() => 
    {
        console.log("Error while signing out");
    });
    
}

function notSignedIn()
{
   // const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);

    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');


    console.log(user);
    const user = auth.currentUser;
    //}

    //return (
    //    <Button onClick={signInWithGoogle}>Sign in with Google</Button>
    //);
}
*/

function checkForSignIn()
{
    const auth = getAuth();
    const user = auth.currentUser;

    const provider = new GoogleAuthProvider();

    if (user)
    {
        console.log("You are already SIGNED IN!");
        signOut(auth);
    }
    else
    {
        signInWithPopup(auth, provider).then((result) => {
            const user = result.currentUser;
        }).catch((error) => {
            console.log(error);
        });
    }
}





export default function FormComponent (props) {   
    return(
        <form className="form">
            {/* Put Anish and Bilal's form in here */}
            <p>How are you feeling today?</p>
            <div className="moodPanel">
                <img 
                    src="happy-face.png"
                    className="mood"
                    value="happy"
                    onClick={() => props.handleMoodClick("happy")}
                    alt=""
                    style={ props.mood === "happy" ? {opacity: 1} : {opacity: 0.5}}
                />
                <img 
                    src="neutral-face.png"
                    className="mood"
                    onClick={() => props.handleMoodClick("neutral")}
                    alt=""
                    style={ props.mood === "neutral" ? {opacity: 1} : {opacity: 0.5}}
                />
                <img 
                    src="sad-face.png"
                    className="mood"
                    onClick={() => props.handleMoodClick("sad")}
                    alt=""
                    style={ props.mood === "sad" ? {opacity: 1} : {opacity: 0.5}}
                />
            </div>
            <Button onClick={checkForSignIn}
                className="m-3">
                clear
            </Button>
            <Button 
                className="m-3"
                onClick={props.handleSubmit}>
                Submit
            </Button>
        </form>
    )
}

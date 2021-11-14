import React from 'react'
import OtherForm from './OtherForm'

import {initializeApp} from 'firebase/app';
import {getFirestore, doc, setDoc} from 'firebase/firestore';

// web app's firebase configuration
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

const user = doc(firestore, '/users/users/');
function writeUsers(userMood) {
    setDoc(user, {
        mood: userMood, 
        tookNap: false,
        hoursOfSleep: 8,
        numberOfMeals: 3,
        qualityOfSleep: 10,
        date: null
    });
}


class OtherFormContainer extends React.Component {
    constructor () {
        super()
        this.state = {
            tookNap: false,
            hoursOfSleep: 8,
            numberOfMeals: 3,
            qualityOfSleep: 10,
            mood: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleMoodClick = this.handleMoodClick.bind(this)
    }

    handleChange (event) {
        console.log("handleChange")
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
        console.log([name] + " set to " + value)
    }

    handleSubmit () {
        writeUsers(this.state.mood);
        console.log("Handle Submit")
        // Send state off to make an entry into database
    }

    handleMoodClick (mood) {
        console.log("you are now", mood)
        this.setState({
            mood: mood
        })
    }

    render() {
        <OtherForm 
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            handleMoodClick={this.handleMoodClick}
            {...this.state}
        />
    }
}

export default OtherFormContainer
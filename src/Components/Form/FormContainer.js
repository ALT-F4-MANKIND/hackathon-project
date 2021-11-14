import React from 'react'
import FormComponent from './FormComponent'

import {initializeApp} from 'firebase/app';
import {getFirestore, doc, setDoc, addDoc} from 'firebase/firestore';

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

const userData = doc(firestore, '/users/users/');
function writeUserData(todayDate, hasTakenNap, hoursSlept, numMeals, userMood, userWeight, userHeight) {
    setDoc(userData, {
        date: todayDate,
        tookNap: hasTakenNap,
        hoursOfSleep: hoursSlept,
        numberOfMeals: numMeals,
        mood: userMood,
        weight: userWeight,
        height: userHeight
    });
}


 class Form extends React.Component {
     
     constructor () {
        const d = new Date();
        const dateString = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate()
        const blankState = {
            tookNap: false,
            hoursOfSleep: "",
            numberOfMeals: "",
            mood: "",
            date: dateString,
            weight: "",
            height: "",
        }
        super()
        this.state = blankState
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleMoodClick = this.handleMoodClick.bind(this)
        this.reset = this.reset.bind(this)
    }

    handleChange (event) {        
        const {name, value, type, checked} = event.target

        if (type === "checkbox") {
            console.log("Changing checkbox")
            this.setState({
                [name]: checked
            })
            return
        }
        console.log("Setting " + [name] + " to " + value)
        this.setState({
            [name]: value
        })
        console.log([name] + " set to " + value)
        console.log(this.state)
    }

    handleSubmit () {
        writeUserData(
            this.state.date,
            this.state.tookNap,
            this.state.hoursOfSleep,
            this.state.numberOfMeals,
            this.state.mood,
            this.state.weight,
            this.state.height
        );
        console.log("Handle Submit")
        // Send state off to make an entry into database
        
    }

    handleMoodClick (mood) {
        console.log("you are now", mood)
        this.setState({
            mood: mood
        })
    }

    reset () {
        console.log("reset")
        this.setState({
            tookNap: false,
            hoursOfSleep: "",
            numberOfMeals: "",
            mood: "",
            date: "",
            weight: "",
            height: "",
        })
    }
    
    render () {
        return(
            <FormComponent
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                handleMoodClick={this.handleMoodClick}
                reset={this.reset}
                {...this.state}
            />
        )
    }
}

export default Form

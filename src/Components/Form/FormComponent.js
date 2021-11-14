import React from 'react'
import './Form.css'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

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
            <Button 
                className="m-3">
                Clear
            </Button>
            <Button 
                className="m-3"
                onClick={props.handleSubmit}>
                Submit
            </Button>
        </form>
    )
}

import React from 'react'
import './FormComponent.css'

export default function FormComponent (props) {
    return(
        <form className="form">
            <input 
                type="checkbox"
                onChange={console.log("Check box hit")}
            />
            <input 
                type="text"
                value={props.numberOfMeals}
                onChange={props.handleChange}
            />
            <button 
                onClick={props.handleSubmit}>Submit
            </button>
            <p>You hade {props.hoursOfSleep} hours of sleep</p>
        </form>
    )
}

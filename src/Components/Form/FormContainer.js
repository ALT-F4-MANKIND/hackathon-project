import React from 'react'
import FormComponent from './FormComponent'

 class Form extends React.Component {
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
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit () {
        console.log("Handle Submit")
        // Send state off to make an entry into database
    }

    handleMoodClick (mood) {
        console.log("you are now", mood)
        this.setState({
            mood: mood
        })
    }
    
    render () {
        return(
            <FormComponent
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                handleMoodClick={this.handleMoodClick}
                {...this.state}
            />
        )
    }
}

export default Form
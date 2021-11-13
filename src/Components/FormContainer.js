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
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit () {
        console.log("Handle Submit")
    }
    
    render () {
        return(
            <FormComponent
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                {...this.state}
            />
        )
    }
}

export default Form
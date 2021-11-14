import React from 'react'
import './Form.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, ButtonGroup, Button } from 'react-bootstrap'

export default function FormComponent (props) {   
    return(
        <Form>
            <div className="body">
                <div className="logo-row">
                    <img className="img-level_up" src="level_up.png" alt ="" />
                </div>        
                <form name="Level Up" id="Level Up" action="contactform.php" method="post">
                    <div>
                        <label htmlFor="date">Date: </label>
                        <input 
                            type="date" 
                            name="date" 
                            id="date" 
                            required
                            value={props.date}
                            onChange={props.handleChange}
                        />
                    </div>
                    <br />
                    <div>
                        <p>What is your weight?</p>
                        <input 
                            type="text" 
                            placeholder="Enter your weight in kilograms" 
                            required 
                            value={props.weight}
                            name="weight"
                            onChange={props.handleChange}
                        />
                    </div>
                    <br />
                    <div>
                        <p>What is your height?</p>
                        <input 
                            type="text" 
                            placeholder="Enter your height in centimeters" 
                            width="100%" 
                            required 
                            value={props.height}
                            name="height"
                            onChange={props.handleChange}
                        />
                    </div>
                    <br />
                    <p>How many hours of sleep did you get?</p>
                    {/* <ButtonGroup aria-label="Basic example">
                        <Button variant="secondary">0-4</Button>
                        <Button variant="secondary">5-6</Button>
                        <Button variant="secondary">7-9</Button>
                        <Button variant="secondary">9+</Button>
                    </ButtonGroup> */}
                    <div className="sleep">
                        <p><input 
                            type="radio"
                            name="hoursOfSleep" 
                            value="less than 4"
                            required 
                            checked={props.hoursOfSleep === "less than 4"}
                            onChange={props.handleChange}
                        />0-4</p>
                        <p><input 
                            type="radio" 
                            name="hoursOfSleep" 
                            value="4-6" 
                            checked={props.hoursOfSleep === "4-6"}
                            onChange={props.handleChange}
                        />4-6</p>
                        <p><input 
                            type="radio" 
                            name="hoursOfSleep" 
                            value="7-9" 
                            checked={props.hoursOfSleep === "7-9"}
                            onChange={props.handleChange}
                        />7-9</p>
                        <p><input 
                            type="radio" 
                            name="hoursOfSleep" 
                            value="9-11" 
                            checked={props.hoursOfSleep === "9-11"}
                            onChange={props.handleChange}
                        />9+</p>
                    </div>

                    <br />
                    <p>How many meals have you eaten today?</p>
                    <div className="meals">
                        <p><input 
                            type="radio" 
                            name="numberOfMeals" 
                            value="0" 
                            required
                            checked={props.numberOfMeals === "0"}
                            onChange={props.handleChange}
                         />0</p>
                        <p><input 
                            type="radio" 
                            name="numberOfMeals" 
                            value="1"
                            checked={props.numberOfMeals === "1"}
                            onChange={props.handleChange}
                         />1</p>
                        <p><input 
                            type="radio" 
                            name="numberOfMeals" 
                            value="2"
                            checked={props.numberOfMeals === "2"}
                            onChange={props.handleChange}
                         />2</p>
                        <p><input 
                            type="radio" 
                            name="numberOfMeals" 
                            value="3"
                            checked={props.numberOfMeals === "3"}
                            onChange={props.handleChange}
                         />3</p>
                        <p><input 
                            type="radio" 
                            name="numberOfMeals" 
                            value="4+"
                            checked={props.numberOfMeals === "4+"}
                            onChange={props.handleChange}
                         />4+</p>
                    </div>
                    <br />
                    <div>
                        <p>Did you take a nap today?</p>
                        <input 
                            className="big-checkbox"
                            type="checkbox" 
                            name="tookNap"
                            checked={props.tookNap}
                            onChange={props.handleChange}
                        />
                        <br/>
                        <span>{props.tookNap ? "yes" : "no"}</span>
                    </div>
                    <br />
                    <div>
                        <p>On a scale of 1-5, how are you feeling?</p>
                        <img className = "img-smile" src="smile.png" alt ="" />
                        <br />
                        <select 
                            name="mood"
                            value={props.mood}
                            onChange={props.handleChange}
                        >
                            <option value="1" required>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <br />
                    <div className="buttons">
                        <button 
                            className="button-submit" 
                            type="submit" 
                            name="Submit"
                            onClick={props.handleSubmit}
                        >
                            Submit
                        </button>
                        <button 
                            className="button-reset" 
                            type="reset"
                            onClick={props.reset}
                        >
                            Clear
                        </button>
                    </div>
                </form>
            </div>
        </Form>
    )
}

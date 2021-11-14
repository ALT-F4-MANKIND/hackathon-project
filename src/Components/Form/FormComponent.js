import React from 'react'
import './Form.css'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function FormComponent (props) {   
    return(
        <>
            <div className="body">
                <div className="logo-row">
                    <img className="img-level_up" src="level_up.png" alt ="" />
                </div>        
                <form name="Level Up" id="Level Up" action="contactform.php" method="post">
                    <div>
                        <label for="date">Date: </label>
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
                        <p><input type="text" placeholder="Enter your weight in centimeters" required /></p>
                    </div>
                    <br />
                    <div>
                        <p>What is your height?</p>
                        <p><input type="text" placeholder="Enter your height in centimeters" width="100%" required /></p>
                    </div>
                    <br />
                    <p>How many hours of sleep did you get?</p>
                    <div className="sleep">
                        <p><input type="radio" name="sleep" value="Less than 4" required />0-4</p>
                        <p><input type="radio" name="sleep" value="4-6" />4-6</p>
                        <p><input type="radio" name="sleep" value="7-9" />7-9</p>
                        <p><input type="radio" name="sleep" value="9-11" />9+</p>
                    </div>
                    <br />
                    <p>How many meals have you eaten today?</p>
                    <div className="meals">
                        <p><input type="radio" name="eat" value="0" required />0</p>
                        <p><input type="radio" name="eat" value="1" />1</p>
                        <p><input type="radio" name="eat" value="2" />2</p>
                        <p><input type="radio" name="eat" value="3" />3</p>
                        <p><input type="radio" name="eat" value="More than 4" />4+</p>
                    </div>
                    <br />
                    <div>
                        <p>Did you take a nap today?</p>
                        <select name="nap">
                            <option value="Yes" required>Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <br />
                    <div>
                        <p>On a scale of 1-5, how are you feeling?</p>
                        <img className = "img-smile" src="smile.png" alt ="" />
                        <br />
                        <select name="feeling">
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
                        >
                            Submit
                        </button>
                        <button 
                            className="button-reset" 
                            type="reset"
                        >
                            Clear
                        </button>
                    </div>
                </form>
            </div>
        </>
        // <form className="form">
        //     {/* Put Anish and Bilal's form in here */}
        //     <p>How are you feeling today?</p>
        //     <div className="moodPanel">
        //         <img 
        //             src="happy-face.png"
        //             className="mood"
        //             value="happy"
        //             onClick={() => props.handleMoodClick("happy")}
        //             alt=""
        //             style={ props.mood === "happy" ? {opacity: 1} : {opacity: 0.5}}
        //         />
        //         <img 
        //             src="neutral-face.png"
        //             className="mood"
        //             onClick={() => props.handleMoodClick("neutral")}
        //             alt=""
        //             style={ props.mood === "neutral" ? {opacity: 1} : {opacity: 0.5}}
        //         />
        //         <img 
        //             src="sad-face.png"
        //             className="mood"
        //             onClick={() =>{
        //                  props.handleMoodClick("sad")
        //                  console.log(props);
        //             }}
        //             alt=""
        //             style={ props.mood === "sad" ? {opacity: 1} : {opacity: 0.5}}
        //         />
        //     </div>
        //     <Button 
        //         className="m-3">
        //         Clear
        //     </Button>
        //     <Button 
        //         className="m-3"
        //         onClick={props.handleSubmit}>
        //         Submit
        //     </Button>
        // </form>
    )
}

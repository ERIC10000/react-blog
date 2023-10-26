import { useState } from "react"

const Home = () => {

    return (
        <div className="home">
            
        </div>
    );
}

export default Home;

// Create a button, when the button is click, call the function 
// handleAddNumber = (parameters) =>{}
// handleAddNumber(23 + 45)

// const handleClick = () => {
//     console.log("Button Clicked!!")
// }

// const handleClickAgain = (name) => {
//     console.log("Hello  " + name)
// }

// const handleCalculateInterest = (principal, rate, time) => {
//     let interest = (principal * rate * time) / 100
//     console.log("Your Interest is " + interest)
// }

{/* <button onClick={() => handleClickAgain('Collins')}>Click Me Again</button>
<button onClick={() => handleCalculateInterest(20000, 5, 6)}>Calculate Interest</button> */}


// When useState Hook is not implemented on React Applications Data Remains Remains unreactive to events

// The initial course is Artificial Intelligence, use the useState Hook and update the course to Data Science

// let name = "Dominic"
    // const [variable, functionToChangeVariable] = useState(data)
    // const [name, setName] = useState('Dominic')
    // const [age, setAge] = useState(29)
    // const [county, setCounty] = useState('Nairobi')

    // const handleClick = () => {
    //     setName('Mercy')
    // }

    // const handleUpadeteAge = () => {
    //     setAge(30)
    // }

    // const handleUpdateCounty = () => {
    //     setCounty('Mombasa')
    // }

    // <h2>Home Page</h2>
    //         <p> {name} </p>
    //         <p> {age} </p>
    //         <p>{county}</p>

    //         <button onClick={handleClick}>Click Me!</button><br />
    //         <button onClick={handleUpadeteAge}>Age + 1</button>
    //         <button onClick={handleUpdateCounty}>Update County</button>
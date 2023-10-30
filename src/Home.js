import { useState, useEffect } from "react"
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);


    // Delete function placed here: Home component where data was created

    const handleDelete = (id) => {
        const remainingBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(remainingBlogs)
    }



    // useEffect: Execute after every DOM Render
    useEffect(() => {
        fetch('http://wangechi.pythonanywhere.com/api/view_nurses')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data)
            })
    }, []);


    // If its empty, then useEffect will only execute once

    // JSONArray -> Array of Object
    // [{}, {}, {}]

    // JSONObject -> Single
    // {}

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />

            {/* <BlogList blogs={blogs.filter((blog) => blog.author === "Dominic Williams")} title="Dominic Williams Blogs!" /> */}

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

    // Filter Method in Array: Used to return results based on a condition
    // Functions as Props: Delete a Blog


    // useEffect Hook in React: A function that will always run/execute after every DOM render:
    // DOM render: Operation that will create and update the UI

    // useEffect Dependencies: Array that is called after use Effect render, Deternine which operation can triggeer useEffect
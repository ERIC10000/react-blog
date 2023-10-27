import { useState } from "react"
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([

        {
            title: 'Blockchain Technology',
            body: 'Blockchain is the future of technology',
            author: 'Dominic Williams',
            image_url: "https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/blockchain.png",
            id: 1
        },

        {
            title: 'Internet Computer',
            body: 'Applications that run on Blochain Technology',
            author: 'Elon Musk',
            image_url: "https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/blockchain.png",
            id: 2
        },

        {
            title: 'Bitcoin and Cryptocurrencies',
            body: 'Payments systems implemented on Blockchain',
            author: 'Matthews',
            image_url: "https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/blockchain.png",
            id: 3
        },

        {
            title: 'Quantum Computers',
            body: 'Blockchain is the future of technology',
            author: 'Dominic Williams',
            image_url: "https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/blockchain.png",
            id: 4
        },

        {
            title: ' Decentralized Application ',
            body: 'Applications Deployed on Blockchain',
            author: 'Dominic Williams',
            image_url: "https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/blockchain.png",
            id: 5
        },

        {
            title: 'Metaverse ',
            body: ' One of DeFi that are currently on Internet Computer',
            author: 'Dominic Williams',
            image_url: "https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/blockchain.png",
            id: 6
        }

    ]);

    // Delete function placed here: Home component where data was created

    const handleDelete = (id) => {
        const remainingBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(remainingBlogs)
    }

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
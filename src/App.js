
import Navbar from './Navbar';
import Home from './Home';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>

    </div>
  );
}

export default App;

// Create a compont Content, insert 2 paragraphs, then render the component to the root component.
// Dynamic Values in React: SPA
// Objects and Booleans cannot be dynamically rendered: Error
// To render object, we will later use array methods -> map, filter, reduce

// Styling in React Application
// 1. Normal and Inline CSS -> Boostrap
// 2. Styled Components
// 3. React Material Design
{/* <h1> {title} </h1>
        <p> We have {viewers} Viewers</p>
        <p> {"Hello my Blog Follers"} </p>
        <p> {[1, 2, 3, 4]} </p>
        <p> {1 + 1} </p>

        <a href={twitter_handle}>Twitter</a> */}

// React Events: Operations on the UI, click, mouseenter, onchange, onload...
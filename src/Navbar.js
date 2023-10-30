const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>React Conference App</h1>
            {/* React Router Implemented Here... */}
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "10px",
                    padding: "10px"
                }}>Add Room</a>
            </div>

        </nav>
    );
}

export default Navbar;
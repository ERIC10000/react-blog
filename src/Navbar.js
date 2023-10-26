const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>React Blog App</h1>
            {/* React Router Implemented Here... */}
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "20px"
                }}>New Blog</a>
            </div>

        </nav>
    );
}

export default Navbar;
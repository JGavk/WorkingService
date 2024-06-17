
const Home = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a className="navbar-brand ml-5 text-xl-start p-3" href="#">J</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/workers">Workers here!!!</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/users">Join as user!!</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/worker-storage">Watch our Workers</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/user-storage">Watch our Users</a>
            </li>
            </ul>
        </div>
        </nav>
        <div>
            <label >THIS SITE IS UNDER DEVELOPMENT -not final version</label>
        </div>
        </> 
    ) 
}
export default Home;
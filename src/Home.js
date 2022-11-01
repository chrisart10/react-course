const Home = () => {
    const handleClick = (e) => {
        console.log('Hello ninjas',e.target)
    }
    const handleClickAgain = (name) => {
        console.log(name)
    }

    return (
        <div className="home">
            <h2>App component</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClickAgain('Hello christian')}>Click me Again</button>
        </div>
    );
}

export default Home;
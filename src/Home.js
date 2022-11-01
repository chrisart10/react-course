import {useState} from 'react'

const Home = () => {
     
        const [name,setName]= useState('mario')
        const [age,setAge]= useState(50)
        const handleClick = () =>{
            setName('luigi')
            setAge(30)
            console.log(name)
        }

    return (
        <div className="home">
            <h2>App component</h2>
            <p>{name} {age}</p>
            <button onClick={handleClick}>click</button>
        </div>
    );
}

export default Home;
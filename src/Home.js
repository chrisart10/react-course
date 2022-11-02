// TODO Seguir con video 16 de The net ninja react
import { useState, useEffect } from 'react'
import BlogsList from './Blogs';

const Home = () => {
    const [blogs, SetBlogs] = useState(null)
    const [isPending, SetIsPending] = useState(true)
    const [error,setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    if(!res.ok){
                        setError(res.message)
                        throw Error('Could not fetch data for that resource')
                    }
                    return res.json()
                })
                .then(data => {
                    SetBlogs(data)
                    SetIsPending(false)
                })
                .catch((err)=>{
                    setError(err.message)
                    console.log(err.message)
                })
        }, 1000)
    }, [])

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading ...</div>}
            {blogs && <BlogsList
                blogs={blogs}
                title="All Blogs"
            />}
        </div>
    );
}

export default Home;
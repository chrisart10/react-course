// TODO Seguir con video 16 de The net ninja react
import { useState, useEffect } from 'react'
import BlogsList from './Blogs';

const Home = () => {
    const [blogs, SetBlogs] = useState(null)
    const [isPending, SetIsPending] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    console.log(data)
                    SetBlogs(data)
                    SetIsPending(false)
                })
        }, 1000)
    }, [])

    return (
        <div className="home">
            {isPending && <div>Loading ...</div>}
            {blogs && <BlogsList
                blogs={blogs}
                title="All Blogs"
            />}
        </div>
    );
}

export default Home;
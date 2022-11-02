// TODO Seguir con video 16 de The net ninja react
import { useState, useEffect } from 'react'
import BlogsList from './Blogs';

const Home = () => {
    const [blogs, SetBlogs] = useState(null)

    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data)
            SetBlogs(data)
        })
    },[])

    return (
        <div className="home">
           {blogs && <BlogsList
                blogs={blogs}
                title="All Blogs"
            />}
        </div>
    );
}

export default Home;
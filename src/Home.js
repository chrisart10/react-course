import { useState, useEffect } from 'react'
import BlogsList from './Blogs';

const Home = () => {
    const [blogs, SetBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        SetBlogs(newBlogs)
    }

    useEffect(()=>{
        console.log('this code run in useEffect')
        console.log(blogs)
    })

    return (
        <div className="home">
            <BlogsList
                blogs={blogs}
                title="All Blogs"
                handleDelete={handleDelete}
            />
            <BlogsList
                blogs={blogs.filter((blog) => blog.author === "mario")}
                title="All Mario's Blogs"
                handleDelete={handleDelete}
            />
        </div>
    );
}

export default Home;
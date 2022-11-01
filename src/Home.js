import { useState, useEffect } from 'react'
import BlogsList from './Blogs';

const Home = () => {
    const [blogs, SetBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const [name,setName] = useState('mario')

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        SetBlogs(newBlogs)
    }
    // Only run once in starting. 
    // useEffect(()=>{
    //     console.log('this code run in useEffect')
    //     console.log(blogs)
    // },[])

    // Only run when name has a change
    useEffect(()=>{
        console.log('this code run in useEffect')
        console.log(name)
    },[name])

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
            <p>{name}</p>
            <button onClick={()=>setName('luigi')}>Click me</button>
        </div>
    );
}

export default Home;
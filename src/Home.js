// TODO Seguir con video 16 de The net ninja react
import useFetch from './useFetch'
import BlogsList from './Blogs';

const Home = () => {
    const {data:blogs,isPending,error} = useFetch('http://localhost:8000/blogs')
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
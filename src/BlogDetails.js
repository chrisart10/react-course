import { useNavigate, useParams} from 'react-router-dom'
import useFetch from './useFetch';
const BlogDetalis = () => {
    const { id } = useParams()
    const { data: blog, error, isPeding } = useFetch('http://localhost:8000/blogs/' + id)
    const navigate = useNavigate()

    const handlerDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE',
        }).then(() => {
            navigate('/')
        })
    }

    return (
        <div className="blog-details">
            {isPeding && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog &&
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            }
            {blog && <button onClick={handlerDelete}>Delete</button>}
        </div>
    );
}

export default BlogDetalis;
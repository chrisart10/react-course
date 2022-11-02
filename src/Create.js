import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const [isPending, SetIsPending] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author }
        SetIsPending(true)
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('New blog added')
            SetIsPending(false)
        })
    }
    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="b-title">Blog title:*</label>
                <input
                    type="text"
                    id="b-title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label htmlFor="b-body">Blog body:*</label>
                <textarea
                    name="body"
                    id="b-body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                >
                </textarea>
                <label htmlFor="b-author">Blog Author</label>
                <select
                    name="author"
                    id="b-author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding blog.... </button>}

            </form>
        </div>
    );
}

export default Create;
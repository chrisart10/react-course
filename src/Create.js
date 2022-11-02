const Create = () => {
    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form>
                <label htmlFor="b-title">Blog title:*</label>
                <input type="text" required id="b-title" />
                <label htmlFor="b-body">Blog body:*</label>
                <input type="text" required id="b-body" />
            </form>
        </div>
    );
}

export default Create;
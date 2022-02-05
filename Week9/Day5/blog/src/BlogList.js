const BlogList = ({blogs, title, handleDelete}) => {


    return (
        <div className='blog-list'>
            <h2>{title}</h2>
             {blogs.map((blog,i) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Wrriten by {blog.author}</p>
                    <button onClick={()=> handleDelete(blog.id)}>delete blog</button>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList

import { useState } from "react";

const BlogList = ({ blogs, title, handleDelete }) => {

    // const blogs = props.blogs
    // const title = props.title

    // create a function to handleDelete(id)

    // function delete removed here...
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by  {blog.author}</p>
                    <img src={blog.image_url} style={{
                        width: "400px",
                        height: "300px",
                        borderRadius: "20px",
                        marginTop: "15px"
                    }} /> <br /><br />

                    <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>

                </div>
            ))}

        </div>
    );
}

export default BlogList;
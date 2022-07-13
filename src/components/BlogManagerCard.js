import React from 'react'

const BlogManagerCard = (blog, deleteBlog) => {
    return (
        <div>
            <div className="blogPost">
                <p></p>
                <span>
                    <strong> Title: </strong>
                    <br />
                </span>
                {blog.title}
                <p>
                    <span>
                        <strong> Author: </strong>
                        <br />
                    </span>
                    {blog.author}
                </p>
                <p>
                    <span>
                        <strong>Category: </strong> <br />
                    </span>
                    {blog.category}
                </p>
                <p>
                    <span>
                        <strong> Text: </strong> <br />
                    </span>
                    {blog.text}
                </p>
                <p>
                    <span>
                        <strong> Created At: </strong> <br />
                    </span>
                    {blog.createdAt}
                </p>
                <p>
                    <span>
                        <strong> Last Modified: </strong> <br />
                    </span>
                    {blog.lastModified}
                </p>
                <p>
                    <span>
                        <strong> ID: </strong> <br />
                    </span>
                    {blog.id}
                </p>
                <hr></hr>
            </div>

        </div>
    )
}

export default BlogManagerCard

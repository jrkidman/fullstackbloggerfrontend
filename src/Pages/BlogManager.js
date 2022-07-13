import React from 'react'
import BlogManagerCard from '../components/BlogManagerCard'


const BlogManager = ({ adminBlogList, deleteBlog }) => {
    adminBlogList.map((blog) => {
        return (
            <BlogManagerCard blog={blog} deleteBlog={deleteBlog} />
        )

    })
    return (
        <div>

        </div>
    )
}

export default BlogManager

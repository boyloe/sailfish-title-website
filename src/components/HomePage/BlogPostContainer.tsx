import React from 'react'
import { Link } from 'react-router-dom'

export const BlogPostContainer:React.FC = () => {
    return(
        <section id="blog-post-container">
            <h4 id="blog-post-title">Recent Blog Posts</h4>
            <ul>
                <li>
                    <h5>Blog Post 1</h5>
                    <p>Opening line of post...</p>
                </li>
                <li>
                    <h5>Blog Post 2</h5>
                    <p>Opening line of post...</p>
                </li>
                <li>
                    <h5>Blog Post 3</h5>
                    <p>Opening line of post...</p>
                </li>
                <li>
                    <h5>Blog Post 4</h5>
                    <p>Opening line of post...</p>
                </li>
            </ul>
        </section>
    )
}
import React from 'react'
import { Link } from 'react-router-dom'

const SinglePosts = ({post}) => {
    return (
        <div key={post.id} className="shadow shadow-black p-6 mb-6">
            <img className="h-20 w-20 rounded-full"
                src={`http://127.0.0.1:8000${post.user.image}`}
                alt="" />
            <a href="">
                <h1 className="text-2xl text-blue-600 font-medium mb-1 underline">{post.user.user.username}</h1>
            </a>
            <Link to={`/${post.id}/`}>
                <i className="text-2xl font-medium mb-1 underline">{post.title}</i>
            </Link>
            <p className="py-4">{post.date}</p>

            <p className="mb-2">{post.description}</p>
        </div>
    )
}

export default SinglePosts
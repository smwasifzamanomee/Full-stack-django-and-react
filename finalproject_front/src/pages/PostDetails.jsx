import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PostDetails = () => {
    const { id } = useParams();

    const [post, setPost] = useState(null);

    console.log(post)

    useEffect(() => {
        const options = {
            method: 'GET',
            url: `http://127.0.0.1:8000/api/post/${id}/`
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            setPost(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        <div className="container mx-auto">
            <div className="flex justify-center">
                <div className="w-8/12 bg-white p-6 rounded-lg">
                    <div className="shadow shadow-black p-6 mb-6">
                        <div className="flex">
                            <div>
                                <img className="h-20 w-20 rounded-full" src={`http://127.0.0.1:8000${post?.user?.image}`} alt="" />
                            </div>
                            <div className="flex px-10 h-10 gap-4">

                                <a href="" className="text-2xl font-medium mb-1 bg-gray-400 text-white rounded text-center w-[100px]">Update</a>
                                <a href="" className="text-2xl font-medium mb-1 bg-red-500 text-white rounded text-center w-[100px]">Delete</a>

                            </div>
                        </div>


                        <h1 className="text-2xl text-blue-600 font-medium mb-1 underline">{post?.user?.user?.username}</h1>


                        <p>
                            <i className="text-2xl font-medium mb-1 underline">{post?.title}</i>
                        </p>
                        <p className="py-4">{post?.date}</p>

                        <p className="mb-2">{post?.description}</p>
                        
                        <img className="h-100 w-full" src={post?.image} alt="" />

                    </div>
                </div>
            </div>
        </div>

    )
}

export default PostDetails
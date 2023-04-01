
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SinglePosts from './SinglePosts';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'http://127.0.0.1:8000/api/post/'
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            setPosts(response.data);
        }).catch(function (error) {
            console.error(error);
        });


    }, [])
    return (
        <div>
            {
                posts.map((data) => {
                    return (
                        <SinglePosts post={data} key={data.id}/>
                    )
                })
            }
        </div>
    )
}

export default Posts
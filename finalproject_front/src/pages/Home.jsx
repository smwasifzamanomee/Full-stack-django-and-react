import React from 'react'
import Posts from './Posts'

const Home = () => {

    return (
        <div className="container mx-auto">
            <div className="flex justify-center">
                <div className="w-8/12 bg-white p-6 rounded-lg">
                    <Posts/>
                </div>
            </div>
        </div>
    )
}

export default Home
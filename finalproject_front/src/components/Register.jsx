import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleRegister = (e) => {
        e.preventDefault()
        if (password === confirmPassword) {
            const options = {
                method: 'POST',
                url: 'http://127.0.0.1:8000/api/register/',
                headers: { 'Content-Type': 'application/json' },
                data: { username: username, password: password }
            };

            axios.request(options).then(function (response) {
                console.log(response.data);
                window.location.href = '/login'
            }).catch(function (error) {
                console.error(error);
            });
        }
    }
    return (
        <div>
            <section>
                <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
                    <div className="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
                        <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
                            <div className="w-full px-6 py-3">
                                <div>
                                    <div className="mt-3 text-left sm:mt-5">
                                        <div className="inline-flex items-center w-full">
                                            <h3 className="text-lg font-bold text-neutral-600 l eading-6 lg:text-5xl">Sign up</h3>
                                        </div>
                                        <div className="mt-4 text-base text-gray-500">
                                            <p>Sign up and get our newest news.</p>
                                        </div>
                                    </div>
                                </div>

                                <form onSubmit={handleRegister} className="mt-6 space-y-2">
                                    <div>
                                        <label htmlFor="email" className="sr-only">Username</label>
                                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="username" id="username" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Enter your username" />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="sr-only">Password</label>
                                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Enter your password" />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="sr-only">Confirm Password</label>
                                        <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" name="password" id="password" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Enter your password" />
                                    </div>
                                    <div className="flex flex-col mt-4 lg:space-y-2">
                                        <button type="submit" className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign up</button>
                                        <a href="#" type="button" className="inline-flex justify-center py-4 text-base font-medium text-gray-500 focus:outline-none hover:text-neutral-600 focus:text-blue-600 sm:text-sm"> Forgot your Password? </a>
                                    </div>
                                </form>
                            </div>
                            <div className="order-first hidden w-full lg:block">
                                <img className="object-cover h-full bg-cover rounded-l-lg" src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Register
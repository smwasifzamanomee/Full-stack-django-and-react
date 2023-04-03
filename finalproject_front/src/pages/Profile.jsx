import { useStateValue } from "../state/StateProvider";

const Profile = () => {
    const [{profile},  ] = useStateValue();
    return (
        <div className="flex items-center h-screen w-full justify-center">
           
            <div className="max-w-xs">
                <div className="bg-white shadow-xl rounded-lg py-3">
                    <div className="photo-wrapper p-2">
                        <img className="w-32 h-32 rounded-full mx-auto" src={`http://127.0.0.1:8000${profile?.image}`} alt=""/>
                    </div>
                    <div className="p-2">
                        <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{profile?.user?.username}</h3>
                        <div className="text-center text-gray-400 text-xs font-semibold">
                            <p>{profile?.bio}</p>
                        </div>
                        <table className="text-xs my-3">
                            <tbody><tr>
                                <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                                <td className="px-2 py-2">{profile?.location}</td>
                            </tr>
                                <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                    <td className="px-2 py-2">+977 9955221114</td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Birthday</td>
                                    <td className="px-2 py-2">{profile?.birth_date}</td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                    <td className="px-2 py-2">{profile?.user?.email}</td>
                                </tr>
                            </tbody></table>

                        <div className="text-center my-3">
                            <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile
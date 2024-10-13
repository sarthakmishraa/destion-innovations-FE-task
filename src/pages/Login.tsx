import { Link } from "react-router-dom";

export const Login = () => {
    return(
        <div className="py-20 px-60 text-center space-y-6">
            <form className="flex flex-col items-center space-y-4">
                <input
                    type="email"
                    required
                    placeholder="Email"
                    className="border-b-2 border-gray-600 p-1"
                />
                <input
                    type="password"
                    required
                    placeholder="Password"
                    className="border-b-2 border-gray-600 p-1"
                />
                <input className="cursor-pointer font-semibold p-2 border-2 border-gray-600 rounded-sm transition-all bg-black text-white hover:bg-white hover:text-black" type="submit" />
            </form>
            <div>
                <Link to="/signup" className="text-lg font-semibold hover:underline">
                    <p>Don't have an account? Sign Up</p>
                </Link>
            </div>
        </div>
    )
}
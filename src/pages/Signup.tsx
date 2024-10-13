import { Link } from "react-router-dom";

export const Signup = () => {
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
    };
    return(
        <div className="py-20 xl:px-60 text-center space-y-6">
            <form className="flex flex-col items-center space-y-4">
                <input
                    type="text"
                    required
                    placeholder="First Name"
                    className="sm:w-[25%] border-b-2 border-gray-600 p-1"
                />
                <input
                    type="text"
                    required
                    placeholder="Last Name"
                    className="sm:w-[25%] border-b-2 border-gray-600 p-1"
                />
                <input
                    type="email"
                    required
                    placeholder="Email"
                    className="sm:w-[25%] border-b-2 border-gray-600 p-1"
                />
                <input
                    type="password"
                    required
                    placeholder="Password"
                    className="sm:w-[25%] border-b-2 border-gray-600 p-1"
                />
                <input
                    type="password"
                    required
                    placeholder="Confirm Password"
                    className="sm:w-[25%] border-b-2 border-gray-600 p-1"
                />
                <input onSubmit={ handleSubmit } className="sm:w-[25%] cursor-pointer font-semibold p-2 border-2 border-gray-600 rounded-sm transition-all bg-black text-white hover:bg-white hover:text-black" type="submit" />
            </form>
            <div>
                <Link to="/login" className="text-lg font-semibold hover:underline">
                    <p>Already have an account? Log In</p>
                </Link>
            </div>
        </div>
    )
}
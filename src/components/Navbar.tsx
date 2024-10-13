import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <div className="text-lg font-semibold p-4 flex justify-around">
            <div className="flex space-x-4">
                <Link to="/" className="hover:underline">
                    <p>Destion Innovations</p>
                </Link>
                <Link to="/dashboard" className="hover:underline">
                    <p>Dashboard</p>
                </Link>
            </div>
            <div className="flex space-x-4">
                <Link to="/login" className="hover:underline">
                    <p>Log In</p>
                </Link>
                <Link to="/signup" className="hover:underline">
                    <p>Sign Up</p>
                </Link>
            </div>
        </div>
    )
}
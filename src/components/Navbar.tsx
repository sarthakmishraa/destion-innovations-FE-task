import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

import { auth } from "../config/firebase";

export const Navbar = () => {
    const [user] = useAuthState(auth);

    const signOutFromGoogle = async () => {
        await signOut(auth);
        toast.dark("Signed Out successfully");
    };

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
                {
                    user ? (
                        <Link to="/" onClick={ signOutFromGoogle } className="hover:underline">
                            <p>Sign Out</p>
                        </Link>
                    ):(
                        <>
                            <Link to="/login" className="hover:underline">
                                <p>Log In</p>
                            </Link>
                            <Link to="/signup" className="hover:underline">
                                <p>Sign Up</p>
                            </Link>
                        </>
                    )
                }
            </div>
        </div>
    )
}
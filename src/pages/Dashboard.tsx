import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "../config/firebase";

export const Dashboard = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    if(!user) {
        navigate("/login");
    }

    return(
        <div className="py-20 px-60 text-center space-y-12">
            <p>This is the dashboard</p>
            {
                user &&
                <p className="text-xl font-semibold">Hi { user.displayName }</p>
            }
        </div>
    )
};
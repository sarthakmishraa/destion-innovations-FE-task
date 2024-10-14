import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";

import { auth, provider } from "../config/firebase";

export const SignInWithGoogle = () => {
    const navigate = useNavigate();
    
    const handleGoogleSignIn = async () => {
        await signInWithPopup(auth, provider);
        navigate("/dashboard");
    }

    return(
        <div className="flex justify-center">
            <button onClick={ handleGoogleSignIn } className="flex items-center justify-center text-center flex-row space-x-2 text-xl p-1 border-2 border-gray-600 rounded-full font-semibold hover:bg-gray-300">
                <img src="./googleIcon.png" width={ 30 } alt="Google icon" />
                <p>Sign In With Google</p>
            </button>
        </div>
    )
};
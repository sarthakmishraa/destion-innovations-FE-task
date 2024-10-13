import { Link } from "react-router-dom";

export const Landing = () => {
    // create react app
    // clean the app
    // add tailwind
    // create routes
    // add landing page content
    // polish landing page
    // add responsiveness
    // add firebase login
    // add content to dashboard

    return(
        <div className="py-20 px-20 xl:px-60 text-center space-y-12">
            <div className="space-y-4">
                <p className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight tracking-tighter">Destion Innovations</p>
                <p className="text-left xl:text-center text-md md:text-lg lg:text-xl leading-snug">Destion: Innovating with Passion and Expertise. Led by a dynamic team of enthusiastic students and developers, Destion specializes in web development, Android development, and data science. We turn visionary ideas into powerful digital solutions, driving the future of technology.</p>
            </div>
            <div>
                <Link
                    to="/dashboard"
                    className="text-xl font-semibold p-2 border-2 border-gray-600 rounded-sm transition-all bg-black text-white hover:bg-white hover:text-black"
                >
                    Get Started
                </Link>
            </div>
        </div>
    )
};
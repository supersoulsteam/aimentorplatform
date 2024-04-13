import { Link } from "react-router-dom"
import '../CSS/navbar.css'
// import login from "../assets/login.jpg"
import Team_logo from "../assets/Team_logo.jpg"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
const Navbar = () => {
    return (
        <div className="container-navbar">
            <header>
                <div className='navbar'>
                    <img className="logo" src={Team_logo} alt="Logo" />
                    <Link to="/"><button className="nav-btn">HOME</button></Link>
                    <Link to="/courses"><button className="nav-btn">COURSES</button></Link>
                    <Link to="/mentor"><button className="nav-btn">MENTORS</button></Link>
                    <Link to="/about"><button className="nav-btn">ABOUT US</button></Link>
                    <Link to="/career"><button className="nav-btn">COUNSELLOR</button></Link>
                    <Link to="/tests"><button className="nav-btn">TESTS</button></Link>
                    <Link to="/champions_portal"><button className="nav-btn">CHAMPIONS PORTAL</button></Link>
                    <Link to="/jobs"><button className="nav-btn">JOBS</button></Link>
                    {/* <img src={login} alt="Login" className="login" /> */}
                    <SignedOut>
                        <SignInButton className="l" />
                    </SignedOut>
                    <SignedIn>
                        <UserButton className="l" />
                    </SignedIn>
                </div>
            </header>
        </div>
    )
}

export default Navbar
import Image from "next/image";
import LoginSignup from '../LoginSignup/LoginSignup'
import HomePage from '../LandingPage/components/home'
import Navbar from '../LandingPage/components/navbar'
import Footer from "../LandingPage/components/footer"

export default function Home() {
  return (
    <div>
      <HomePage/>
      <Footer/>
    </div>
  );
}

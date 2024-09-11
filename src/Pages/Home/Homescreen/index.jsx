import HeroSection from "../HeroSection";
import Navbar from "../Navbar"
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import Testimonial from "../Testimonials";
import ContactMe from "../ContactMe";
export default  function Home()
{
    return (
        <>
            <HeroSection/>
            <AboutMe/>
            <MySkills/>
            <ContactMe/>
        </>
    )
}
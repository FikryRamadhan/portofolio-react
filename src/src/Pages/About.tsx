import LastProject from "../Section/About/LastProject"
import Profile from "../Section/About/Profile"
import Skill from "../Section/Home/Skill"

const About = () => {
    return (
        <>
            <div className="bg-black">
                <Profile />
                <Skill />
                <LastProject />
            </div>
        </>
    )
}

export default About
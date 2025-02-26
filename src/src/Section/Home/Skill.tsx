import PhotoGrid from "../../Components/PhotoGrid"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Skill = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div className="h-auto flex flex-col justify-start items-center relative overflow-hidden">
            <div className="text-center relative rounded-lg mt-8">
                <h1 className="text-5xl font-bold mb-4 text-slate-100" data-aos="fade-up">Skill</h1>
            </div>
            <PhotoGrid />
        </div>
    )
}

export default Skill
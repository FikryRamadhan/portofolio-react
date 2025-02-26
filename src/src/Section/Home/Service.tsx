import PhotoGrid from "../../Components/PhotoGrid";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {  useEffect } from "react";

const Service = () => {

    useEffect(() => {    
            AOS.init()
    })
    return (
        <>
            <div className="h-auto flex flex-col justify-start items-center relative overflow-hidden">
                {/* Gambar di bagian atas */}
                <img
                    src="/images/image-atas.png"
                    alt="Hero"
                    className="w-full h-full absolute inset-0 z-0"
                />

                {/* Teks dengan margin atas yang lebih kecil */}
                <div className="text-center relative rounded-lg mt-8">
                    <h1 className="text-5xl font-bold mb-4 text-slate-100" data-aos="zoom-in">Our Service</h1>
                    {/* Container untuk 3 card */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-5 lg:mx-40" data-aos="fade-up">
                        {/* Card 1 */}
                        <div className=" bg-zinc-950 bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4 text-slate-100">Web Developer</h3>
                            <p className="text-lg text-slate-100">
                            I specialize in creating digital experiences that are intuitive, easy to use, and accessible to everyone.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className=" bg-zinc-950 bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4 text-slate-100">UI/UX</h3>
                            <p className="text-lg text-slate-100">
                            My designs are crafted to provide a delightful and engaging experience for users, ensuring a seamless and intuitive interaction.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className=" bg-zinc-950 bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4 text-slate-100">Mobile Developer</h3>
                            <p className="text-lg text-slate-100">
                            I ensure that every mobile solution I create achieves its intended purpose efficiently, delivering high-performance apps that meet user needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service
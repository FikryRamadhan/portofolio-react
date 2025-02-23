import React from "react";

const Profile = () => {
    return (
        <div className="min-h-screen bg-black text-white flex  items-center justify-center p-10 lg:p-30">
            <div className="gap-8 justify-center flex  flex-wrap-reverse lg:flex-wrap items-center px-6 lg:px-20">
                {/* Konten Teks */}
                <div className="w-full self-center lg:w-1/2 text-white">
                    <h1 className="text-2xl md:text-xl lg:text-3xl mb-2 mt-20">
                        Fikry Ramadhan
                    </h1>
                    <p className=" leading-relaxed  text-white lg:text-sm">
                        I am a freelancer with expertise in Web Development. With over a year of experience in the industry, I have
                        successfully worked on various projects for diverse clients, creating
                        innovative and efficient digital solutions. My skills include
                        designing intuitive user interfaces and developing responsive web and
                        mobile applications.
                        <br />  <br />
                        One of my standout achievements is being the National Champion in the
                        ICF Web Developer Competition, where I demonstrated my ability to
                        create visually appealing and functional websites at a national
                        level. This experience has enhanced my technical skills and
                        confidence, allowing me to deliver the best results in every project.
                        <br />  <br />
                        As a freelancer, I am committed to providing high-quality services
                        that meet my clients' needs and expectations. I believe that strong
                        communication and a personalized approach are key to creating a
                        satisfying experience for clients and achieving outstanding results.
                    </p>
                </div>
                <div className=" lg:w-1/3 lg:pl-10">
                    <img
                        src="/public/images/fikry.png"
                        alt="E-Learning Illustration"
                        className="lg:ml-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default Profile;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DetailProject = (props) => {
        useEffect(() => {
            AOS.init()
        }, [])
    return (
        <div className="mt-5 mb-2 p-5 bg-white shadow-md rounded-lg" data-aos="fade-up">
            <h4 className="text-xl font-semibold text-gray-800">{props.title}</h4>

            <img src={props.image} className="w-full h-60 mt-5 object-cover rounded-md" alt={props.title} />
            <p className="text-sm text-gray-600 mt-3">{props.details.description}</p>

            {/* Client */}
            <div className="mt-3">
                <h5 className="text-lg font-semibold text-gray-700">Client</h5>
                <p className="text-sm text-gray-600 mt-1">{props.details.client || "Internal Project"}</p>
            </div>

            {/* Tech Stack */}
            <div className="mt-3">
                <h5 className="text-lg font-semibold text-gray-700">Tech Stack</h5>
                <ul className="mt-2 flex flex-wrap gap-2">
                    {props.details.techStack && props.details.techStack.length > 0 ? (
                        props.details.techStack.map((tech, index) => (
                            <li key={index} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                                {tech}
                            </li>
                        ))
                    ) : (
                        <p className="text-sm text-gray-500">Tech stack tidak tersedia</p>
                    )}
                </ul>
            </div>

            {props.details.repo && (
                <div className="mt-5">
                    <h5 className="text-lg font-semibold text-gray-700">Repository</h5>
                    <a 
                        href={props.details.repo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-500 text-sm mt-1 inline-block hover:underline"
                    >
                        Lihat Repository →
                    </a>
                </div>
            )}
        </div>
    );
};

export default DetailProject;

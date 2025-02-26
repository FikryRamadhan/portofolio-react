import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DetailSertifikat = (props) => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div className="mt-5 mb-2 p-5 bg-white shadow-md rounded-lg" data-aos="fade-up">
            <h4 className="text-xl font-semibold text-gray-800">{props.title}</h4>

            <img src={props.image} className="w-full h-60 mt-5 object-cover rounded-md" alt={props.title} />
            <p className="text-sm text-gray-600 mt-3">{props.desc}</p>

            {/* Client */}
            <div className="mt-3">
                <h5 className="text-md font-semibold text-gray-700">Tingkat</h5>
                <p className="text-sm text-gray-600 mt-1">{props.tingkat}</p>
            </div>
        </div>
    );
};

export default DetailSertifikat;

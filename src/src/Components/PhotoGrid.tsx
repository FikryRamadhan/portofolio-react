import React from 'react';

const photos = [
    '/logo/2.png',
    '/logo/11.png',
    '/logo/7.png',
    '/logo/5.png',
    '/logo/1.png',
    '/logo/3.png',
    '/logo/9.png',
    '/logo/4.png',
    '/logo/8.png',
    '/logo/6.png',
    '/logo/10.png',
];

const PhotoGrid = () => {
    const initialPhotos = photos.slice(0, 4); // Hanya tampilkan 4 foto awal
    const remainingPhotos = photos.slice(4); // Foto-foto berikutnya


    return (
        <div className="overflow-hidden relative lg:w-[73%] w-[90%] mt-5">
            <div className="flex animate-scroll">
                {initialPhotos.map((photo, index) => (
                    <div key={index} className="flex-shrink-0 w-48 h-48">
                        <img src={photo} alt={`Photo ${index}`} className="w-1/2 h-1/2 object-cover rounded-lg" />
                    </div>
                ))}
                {remainingPhotos.map((photo, index) => (
                    <div key={index + initialPhotos.length} className="flex-shrink-0 w-48 h-48 m-2">
                        <img src={photo} alt={`Photo ${index + initialPhotos.length}`} className="w-1/2 h-1/2 object-cover rounded-lg" />
                    </div>
                ))}

            </div>
        </div>
    );
};

export default PhotoGrid;
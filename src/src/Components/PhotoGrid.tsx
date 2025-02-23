import React from 'react';

const photos = [
    '/public/logo/2.png',
    '/public/logo/11.png',
    '/public/logo/7.png',
    '/public/logo/5.png',
    '/public/logo/1.png',
    '/public/logo/3.png',
    '/public/logo/9.png',
    '/public/logo/4.png',
    '/public/logo/8.png',
    '/public/logo/6.png',
    '/public/logo/10.png',
    // Tambahkan lebih banyak URL gambar di sini
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
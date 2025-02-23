const Hero = () => {
    return (
        <>
            <div className="h-150 flex flex-col justify-center items-center relative overflow-hidden">
                {/* Gambar di bagian bawah */}
                <img
                    src="/images/hero.png"
                    alt="Hero"
                    className="w-full h-full absolute inset-0 z-0"
                />

                {/* Teks di atas gambar */}
                <div className="text-center relative z-10 p-8 mt-24 rounded-lg">
                    <h1 className="text-5xl font-bold mb-4 text-white kanit-semibold">I'm a creative freelancer</h1>
                    <h2 className="text-3xl font-semibold mb-6 text-white">based in Indonesia</h2>
                    <p className="text-xl max-w-2xl mx-auto mt-[-15px] text-white">
                        I concentrate on creating digital experiences that are user-friendly, enjoyable, and effective in achieving their purpose.
                    </p>
                    <div className="mt-2">
                        <button className="bg-white p-3  text-black font-semibold rounded-2xl">
                            Learn more
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
import BannerImage from "../assets/banner.png";

const Banner = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-between 
                        max-w-6xl mx-auto my-12 md:my-20 px-4 gap-8 md:gap-12">

            {/* Left */}
            <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">

                <div className="inline-flex items-center gap-2 bg-[#E1E7FF] text-sm px-4 py-2 rounded-full mx-auto md:mx-0">
                    <span className="flex items-center gap-2 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text">
                        <i className="fa-regular fa-circle-dot"></i>
                        New: AI-Powered Tools Available
                    </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-extrabold 
                               bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text leading-tight">
                    Supercharge Your <br className="hidden sm:block" />
                    Digital Workflow
                </h1>

                <p className="text-sm md:text-base text-zinc-700 max-w-md mx-auto md:mx-0">
                    Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-3 justify-center md:justify-start">
                    <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#4F39F6] to-[#9514FA]
                     text-white font-medium rounded-full transition-all duration-300 hover:scale-105">
                        Explore Products
                    </button>

                    <button className="w-full sm:w-auto px-6 py-3 border border-purple-500 rounded-full font-medium transition-all duration-300 hover:scale-105">
                        <span className="flex gap-2 items-center justify-center bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text">
                            <i className="fa-solid fa-play"></i> Watch Demo
                        </span>
                    </button>
                </div>
            </div>

            {/* Right */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <img
                    src={BannerImage}
                    alt="Banner"
                    className="w-full max-w-sm md:max-w-md lg:max-w-xl object-contain"
                />
            </div>

        </div>
    );
};

export default Banner;
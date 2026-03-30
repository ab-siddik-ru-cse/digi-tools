import BannerImage from "../assets/banner.png";

const Banner = () => {
    return (
        <div className="flex items-center justify-between max-w-300 mx-auto my-20">
            <div>
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-[#E1E7FF] text-sm font-medium px-5 py-2 rounded-full">
                        <span className="flex items-center gap-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text"> <i class="fa-regular fa-circle-dot"></i> New: AI-Powered Tools Available</span>
                    </div>

                    <h1 className="text-4xl lg:text-7xl font-extrabold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text">
                        Supercharge Your
                        <br />
                        Digital Workflow
                    </h1>

                    <p className="text-md text-zinc-700 max-w-lg">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                        <br />
                        Explore Products
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">
                            Explore Products
                        </button>
                        <button className="btn bg-transparent rounded-full border-purple-500 ">
                            <span className="flex gap-3 items-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text"> <i class="fa-solid fa-play"></i> Watch Demo</span>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <img src={BannerImage} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;
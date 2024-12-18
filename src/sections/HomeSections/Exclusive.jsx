import { Link } from "react-router-dom";
import EX1 from "../../assets/Exclusives/DAILY_N-DURANCE.png";
import Sep1 from "../../assets/Vector-IMG/sep-1.png";
import Sep2 from "../../assets/Vector-IMG/sep-2.png";

function Exclusive() {
    return (
        <div>
            <div className="w-full flex justify-start items-center pl-5 sm:pl-10 relative pb-4">
                <div className="w-auto text-2xl sm:text-3xl px-3 sm:px-5 py-2 h-16 sm:h-20 bg-[#fd9b40] rounded-full flex justify-center items-center text-[#290c06] font-medium z-10">
                    <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">03</span> Exclusives
                </div>
                <div className="w-auto text-2xl sm:text-3xl px-3 sm:px-5 py-2 h-16 sm:h-20 bg-[#290c06] rounded-full flex justify-center items-center text-[#290c06] font-medium absolute top-2 left-13">
                    <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">03</span> Exclusives
                </div>
            </div>
            <div className="bg-[#fff]">
                <img src={Sep1} alt="" className="w-[100vw] h-20" />
            </div>
            <div className="w-full h-[45vh] relative pt-10 flex justify-center items-center bg-[#5ACEA1]">
                {/* Images behind the banner */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <img src={EX1} alt="" className="sm:h-[400px] h-[200px]" />
                </div>
                <div className="absolute top-1/2 left-20 -translate-y-1/2 z-0">
                    <img src={EX1} alt="" className="sm:h-64 h-40" />
                </div>
                <div className="absolute top-1/2 right-20 -translate-y-1/2 z-0">
                    <img src={EX1} alt="" className="sm:h-64 h-40" />
                </div>
                {/* Banner */}
                <div className="w-full z-10 sm:h-20 h-13 bg-[#fd9b40] border-y-2 border-[#290c06] relative">
                    {/* Text in the banner */}
                    <marquee className="w-full z-30 h-20 flex items-center justify-center">
                        <h2 className="text-3xl sm:font-mono"> &quot;We Provide You With a Wide Variety of Products, Ranging from Exotic Plant Extracts to Premium Spices&quot; </h2>
                    </marquee>
                </div>
            </div>
            <div className="w-full flex flex-col sm:text-2xl text-xl text-center justify-center items-center bg-[#5ACEA1] sm:px-14 px-4">
                Currently we are providing free samples of our products to our customers. You can get your free sample by clicking the button below.
                <Link to={"http://www.floraextracts.us/request_sample.html"} className="bg-[#fd9b40] text-[#290c06] font-medium text-2xl sm:text-3xl rounded-full flex justify-center items-center px-5 py-3 mt-3">Get Free Sample</Link>
            </div>
            <div className="bg-[#fff]">
                <img src={Sep2} alt="" className="w-[100vw] h-20" />
            </div>
        </div>
    );
}

export default Exclusive;

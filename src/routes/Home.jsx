import { Link } from "react-router-dom";

import Banner_01 from "../assets/banner-images/banner_01.jpg";
import Banner_02 from "../assets/banner-images/banner_02.jpg";
import Banner_03 from "../assets/banner-images/banner_03.jpg";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
    return (
        <main className="max-width">
            {/* Head section */}
            <section className="flex flex-col md:flex-row gap-3 md:gap-0 md:rounded-2xl overflow-hidden">
                <Link
                    to={"#"}
                    className="relative group rounded-xl md:rounded-none overflow-hidden"
                >
                    <img
                        src={Banner_01}
                        alt="Banner 01"
                        className="grayscale group-hover:grayscale-0 transition duration-300 ease-in-out w-full max-h-96 md:w-auto md:max-h-none"
                    />
                    <div className="absolute left-0 bottom-6 rounded-r-lg overflow-hidden  w-[90%]">
                        <div className="px-4 py-6 bg-white group-hover:text-white transition-colors duration-500 min-h-60">
                            <h5 className="text-lg sm:text-xl md:text-lg lg:text-xl font-medium mb-3 uppercase relative z-10">
                                Procedure rooms
                            </h5>
                            <div className="relative z-10">
                                <p className="flex items-center gap-2 sm:text-lg md:text-base lg:text-lg  relative z-10">
                                    <MdOutlineKeyboardArrowRight />
                                    Research
                                </p>
                                <p className="flex items-center gap-2 sm:text-lg md:text-base lg:text-lg ">
                                    <MdOutlineKeyboardArrowRight />
                                    Vaccines
                                </p>
                            </div>
                            <div className="absolute top-0 bottom-0 bg-primary w-full left-[-100%] transition-[left] duration-500 ease-in-out group-hover:left-0"></div>
                        </div>
                    </div>
                </Link>
                <Link
                    to={"#"}
                    className="relative group rounded-xl md:rounded-none overflow-hidden"
                >
                    <img
                        src={Banner_02}
                        alt="Banner 02"
                        className="grayscale group-hover:grayscale-0 transition duration-300 ease-in-out w-full max-h-96 md:w-auto md:max-h-none"
                    />
                    <div className="absolute left-0 bottom-6 rounded-r-lg overflow-hidden  w-[90%]">
                        <div className="px-4 py-6 bg-white group-hover:text-white transition-colors duration-500 min-h-60">
                            <h5 className="text-lg sm:text-xl md:text-lg lg:text-xl font-medium mb-3 uppercase relative z-10">
                                Clinics
                            </h5>
                            <div className="relative z-10">
                                <p className="flex items-center gap-2 sm:text-lg md:text-base lg:text-lg  relative z-10">
                                    <MdOutlineKeyboardArrowRight />
                                    Dentistry
                                </p>
                                <p className="flex items-center gap-2 sm:text-lg md:text-base lg:text-lg  relative z-10">
                                    <MdOutlineKeyboardArrowRight />
                                    Research
                                </p>
                                <p className="flex items-center gap-2 sm:text-lg md:text-base lg:text-lg ">
                                    <MdOutlineKeyboardArrowRight />
                                    Vaccines
                                </p>
                            </div>
                            <div className="absolute top-0 bottom-0 bg-primary w-full left-[-100%] transition-[left] duration-500 ease-in-out group-hover:left-0"></div>
                        </div>
                    </div>
                </Link>{" "}
                <Link
                    to={"#"}
                    className="relative group rounded-xl md:rounded-none overflow-hidden"
                >
                    <img
                        src={Banner_03}
                        alt="Banner 03"
                        className="grayscale group-hover:grayscale-0 transition duration-300 ease-in-out w-full max-h-96 md:w-auto md:max-h-none"
                    />
                    <div className="absolute left-0 bottom-6 rounded-r-lg overflow-hidden  w-[90%]">
                        <div className="px-4 py-6 bg-white group-hover:text-white transition-colors duration-500 min-h-60">
                            <h5 className="text-lg sm:text-xl md:text-lg lg:text-xl font-medium mb-3 uppercase relative z-10">
                                Diagnostic and Day Surgery Center
                            </h5>
                            <div className="relative z-10">
                                <p className="flex items-center gap-2 sm:text-lg md:text-base lg:text-lg  relative z-10">
                                    <MdOutlineKeyboardArrowRight />
                                    Day inpatient
                                </p>
                                <p className="flex items-center gap-2 sm:text-lg md:text-base lg:text-lg  relative z-10">
                                    <MdOutlineKeyboardArrowRight />
                                    Instrumental Research
                                </p>
                                <p className="flex items-center gap-2 sm:text-lg md:text-base lg:text-lg ">
                                    <MdOutlineKeyboardArrowRight />
                                    Specialist doctors
                                </p>
                            </div>
                            <div className="absolute top-0 bottom-0 bg-primary w-full left-[-100%] transition-[left] duration-500 ease-in-out group-hover:left-0"></div>
                        </div>
                    </div>
                </Link>
            </section>
        </main>
    );
};

export default Home;

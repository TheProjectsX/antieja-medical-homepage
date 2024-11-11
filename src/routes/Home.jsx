import { Link } from "react-router-dom";

import Banner_01 from "../assets/banner-images/banner_01.jpg";
import Banner_02 from "../assets/banner-images/banner_02.jpg";
import Banner_03 from "../assets/banner-images/banner_03.jpg";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GiAtom } from "react-icons/gi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { PiMicroscopeLight } from "react-icons/pi";
import { GiTestTubes } from "react-icons/gi";
import { RiCustomerService2Line } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";

const Home = () => {
    return (
        <main className="max-width space-y-10 mb-10">
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

            {/* Info cards section */}
            <section className="text-gray-600 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-6 gap-x-4">
                <div className="flex flex-col gap-2 items-center text-center group cursor-pointer">
                    <GiAtom className="text-6xl text-gray-400 group-hover:text-primary" />
                    <p>Technological advantage</p>
                </div>

                <div className="flex flex-col gap-2 items-center text-center group cursor-pointer">
                    <BiMessageSquareDetail className="text-6xl text-gray-400 group-hover:text-primary" />
                    <p>Quality service</p>
                </div>

                <div className="flex flex-col gap-2 items-center text-center group cursor-pointer">
                    <PiMicroscopeLight className="text-6xl text-gray-400 group-hover:text-primary" />
                    <p>More than 3000 studies</p>
                </div>

                <div className="flex flex-col gap-2 items-center text-center group cursor-pointer">
                    <GiTestTubes className="text-6xl text-gray-400 group-hover:text-primary" />
                    <p>Fast research</p>
                </div>

                <div className="flex flex-col gap-2 items-center text-center group cursor-pointer">
                    <RiCustomerService2Line className="text-6xl text-gray-400 group-hover:text-primary" />
                    <p>Free remote discussion of results</p>
                </div>

                <div className="flex flex-col gap-2 items-center text-center group cursor-pointer">
                    <AiOutlineLike className="text-6xl text-gray-400 group-hover:text-primary" />
                    <p>Professional team</p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="rounded-xl overflow-hidden flex flex-col md:flex-row">
                <div className="p-8 bg-[#e7e7e7]">
                    <h4 className="font-semibold mb-1">Get the news first</h4>
                    <p className="text-sm text-gray-700 mb-4">
                        How often is preventive health check-up necessary? When
                        is the time to get a flu shot? Subscribe to the
                        newsletter so that the most important reminders arrive
                        in your mailbox on time. You will receive not only
                        useful information on how to take care of your health,
                        but also the best offers and promotions.
                    </p>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <fieldset className="flex items-center mb-4">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="border-none outline-none px-4 py-2 text-sm rounded-l-xl"
                            />
                            <button className="text-2xl px-4 py-1.5 rounded-r-xl bg-primary text-white">
                                <TfiEmail />
                            </button>
                        </fieldset>

                        <label className="flex items-center gap-1.5">
                            <input type="checkbox" /> I agree to{" "}
                            <Link
                                to={"#"}
                                className="text-primary underline underline-offset-2 decoration-primary"
                            >
                                the privacy policy*
                            </Link>
                        </label>
                        <label>
                            <input type="checkbox" /> I certify that I am 14
                            years of age or older
                            <span className="text-primary">*</span>
                        </label>
                    </form>
                </div>
                <div className="p-8 bg-[#ececec]">
                    <h4 className="font-semibold mb-1">Customer service</h4>
                    <p className="text-primary">
                        Tel: <span className="font-semibold">8 700 55 511</span>
                    </p>
                    <p className="text-primary mb-4">
                        Tel: (from abroad){" "}
                        <span className="font-semibold">00-370-37-245330</span>
                    </p>

                    <p className="text-gray-700 mb-3">
                        Calls to the customer service center number are charged
                        according to the tariff applied by your communication
                        operator.
                    </p>

                    <p className="text-primary mb-1.5">
                        Email:{" "}
                        <span className="font-medium">pagalba@anteja.lt</span>
                    </p>

                    <p className="mb-1.5">Working hours:</p>
                    <p className="text-gray-700 mb-1.5">1. 7:00 - 19:00</p>
                    <p className="text-gray-700 mb-1.5">2. 10:00 - 14:00</p>
                </div>

                <div className="p-8 bg-[#f3f3f3]">
                    <h4 className="font-semibold mb-1">Reviews</h4>
                    <div>Review Items will be here</div>
                </div>
            </section>
        </main>
    );
};

export default Home;

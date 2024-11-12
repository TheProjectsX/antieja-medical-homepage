import { Link } from "react-router-dom";

// Banner Images
import Banner_01 from "../assets/banner-images/banner_01.jpg";
import Banner_02 from "../assets/banner-images/banner_02.jpg";
import Banner_03 from "../assets/banner-images/banner_03.jpg";

import Banner_04 from "../assets/banner-images/banner_04.jpg";

// Slider 01 Images
import Slider_01 from "../assets/slider-images/slider_01.jpg";
import Slider_02 from "../assets/slider-images/slider_02.jpg";
import Slider_03 from "../assets/slider-images/slider_03.jpg";
import Slider_04 from "../assets/slider-images/slider_04.jpg";

// Product Images
import Product_01 from "../assets/product-images/product_01.png";
import Product_02 from "../assets/product-images/product_02.png";
import Product_03 from "../assets/product-images/product_03.png";
import Product_04 from "../assets/product-images/product_04.png";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GiAtom } from "react-icons/gi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { PiMicroscopeLight } from "react-icons/pi";
import { GiTestTubes } from "react-icons/gi";
import { RiCustomerService2Line } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import CustomButton from "../components/CustomButton";

// Keen Slider
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";

const productItems = [
    {
        image: Product_01,
        title: "Immunity evaluation program",
        studies: {
            from: 4,
            to: 7,
        },
        href: "#",
    },
    {
        image: Product_02,
        title: "A study of Men's health",
        studies: {
            from: 12,
            to: 56,
        },
        href: "#",
    },
    {
        image: Product_03,
        title: "Examination of child's health",
        studies: {
            from: 9,
            to: 31,
        },
        href: "#",
    },
    {
        image: Product_04,
        title: "A study of Women's health",
        studies: {
            from: 12,
            to: 56,
        },
        href: "#",
    },
];

const Home = () => {
    const [currentSlide_01, setCurrentSlide_01] = useState(0);
    const [slider_01_Loaded, setSlider_01_Loaded] = useState(false);

    const [slider_01_Ref, instance_01_Ref] = useKeenSlider({
        slides: {
            spacing: 8,
        },
        loop: true,
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide_01(slider.track.details.rel);
        },
        created() {
            setSlider_01_Loaded(true);
        },
    });

    const [slider_02_PerView, setSlider_02_PerView] = useState(3);
    const [currentSlide_02, setCurrentSlide_02] = useState(0);
    const [slider_02_Loaded, setSlider_02_Loaded] = useState(false);

    const [slider_02_Ref, instance_02_Ref] = useKeenSlider({
        slides: { perView: slider_02_PerView },
        loop: true,
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide_02(slider.track.details.rel);
        },
        created() {
            setSlider_02_Loaded(true);
        },
    });

    // Update perView based on viewport width
    useEffect(() => {
        const updatePerView = () => {
            if (window.innerWidth < 640) {
                setSlider_02_PerView(1); // Mobile view
            } else if (window.innerWidth < 768) {
                setSlider_02_PerView(2); // Tablet view
            } else {
                setSlider_02_PerView(3); // Desktop view
            }
        };

        updatePerView();

        window.addEventListener("resize", updatePerView);
        return () => window.removeEventListener("resize", updatePerView);
    }, []);

    // Initialize the slider with responsive perView

    useEffect(() => {
        const interval = setInterval(() => {
            instance_01_Ref.current?.next();
        }, 3000);

        return () => clearInterval(interval);
    }, [slider_01_Loaded, instance_01_Ref]);

    useEffect(() => {
        const interval = setInterval(() => {
            instance_02_Ref.current?.next();
        }, 6000);

        return () => clearInterval(interval);
    }, [slider_02_Loaded, instance_02_Ref]);

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

            {/* Slider 01 */}
            <section className="rounded-lg overflow-hidden cursor-pointer relative">
                <div className="absolute bg-gray-600/40 px-2 py-1 rounded-full bottom-4 right-4 z-10 flex items-center gap-2">
                    <div>
                        {slider_01_Loaded && instance_01_Ref.current && (
                            <div className="flex gap-1.5 px-2">
                                {[
                                    ...Array(
                                        instance_01_Ref.current.track.details
                                            .slides.length
                                    ).keys(),
                                ].map((idx) => {
                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => {
                                                instance_01_Ref.current?.moveToIdx(
                                                    idx
                                                );
                                            }}
                                            className={
                                                "slider-dot" +
                                                (currentSlide_01 === idx
                                                    ? " slider-dot--active"
                                                    : "")
                                            }
                                        ></button>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                    <button
                        onClick={(e) =>
                            e.stopPropagation() ||
                            instance_01_Ref.current?.prev()
                        }
                        className="bg-gray-200/70 text-white hover:bg-white hover:text-primary rounded-full p-2 text-3xl"
                    >
                        <MdKeyboardArrowLeft />
                    </button>
                    <button
                        onClick={(e) =>
                            e.stopPropagation() ||
                            instance_01_Ref.current?.next()
                        }
                        className="bg-gray-200/70 text-white hover:bg-white hover:text-primary rounded-full p-2 text-3xl"
                    >
                        <MdKeyboardArrowRight />
                    </button>
                </div>
                <div ref={slider_01_Ref} className="keen-slider">
                    <div className="keen-slider__slide">
                        <img
                            src={Slider_01}
                            alt="Slider 01"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="keen-slider__slide">
                        <img
                            src={Slider_02}
                            alt="Slider 02"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="keen-slider__slide">
                        <img
                            src={Slider_03}
                            alt="Slider 03"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="keen-slider__slide">
                        <img
                            src={Slider_04}
                            alt="Slider 04"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Tryout Section (Banner 04) */}
            <section className="w-full rounded-2xl overflow-hidden relative">
                <img
                    src={Banner_04}
                    alt="Banner 04"
                    className="w-full min-h-44"
                />
                <Link
                    to="#"
                    className="absolute bottom-3 sm:bottom-5 md:bottom-8 right-5"
                >
                    <CustomButton className="sm:py-2.5">
                        Try it Out
                    </CustomButton>
                </Link>
            </section>

            {/* Slider 02 (Products) */}
            <section className="rounded-lg overflow-hidden cursor-pointer relative">
                <button
                    onClick={(e) =>
                        e.stopPropagation() || instance_02_Ref.current?.prev()
                    }
                    className="absolute top-[50%] left-0 hover:text-primary p-2 text-3xl z-10"
                >
                    <MdKeyboardArrowLeft />
                </button>
                <button
                    onClick={(e) =>
                        e.stopPropagation() || instance_02_Ref.current?.next()
                    }
                    className="absolute top-[50%] right-0 hover:text-primary p-2 text-3xl z-10"
                >
                    <MdKeyboardArrowRight />
                </button>

                <div ref={slider_02_Ref} className="keen-slider">
                    {productItems.map((product, idx) => (
                        <Link
                            key={idx}
                            to={product.href}
                            className="keen-slider__slide flex flex-col items-center text-center group"
                        >
                            <div className="w-72 h-64 flex justify-center items-center mb-2">
                                <img
                                    src={product.image}
                                    alt="Product 01"
                                    className=""
                                />
                            </div>
                            <h5 className="mb-3 font-medium text-lg group-hover:underline underline-offset-2">
                                {product.title}
                            </h5>
                            <p className="mb-5 text-primary font-medium">
                                From {product.studies?.from} to{" "}
                                {product.studies?.to} Studies
                            </p>
                            <CustomButton className="py-2.5 px-12">
                                More
                            </CustomButton>
                        </Link>
                    ))}
                </div>
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

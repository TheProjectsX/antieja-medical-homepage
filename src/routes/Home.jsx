import { Link } from "react-router-dom";

// Background Image
import DNA_Image from "../assets/dna.png";

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

// News Images
import News_01 from "../assets/news-images/news_01.png";
import News_02 from "../assets/news-images/news_02.jpg";
import News_03 from "../assets/news-images/news_03.jpg";
import News_04 from "../assets/news-images/news_04.jpeg";
import News_05 from "../assets/news-images/news_05.jpg";
import News_06 from "../assets/news-images/news_06.png";

// Icons
import Blood_test_01 from "../assets/icons/blood_test_01.svg";
import Blood_test_02 from "../assets/icons/blood_test_02.svg";
import Blood_test_03 from "../assets/icons/blood_test_03.svg";
import Blood_test_04 from "../assets/icons/blood_test_04.svg";

import Services_01 from "../assets/icons/services_01.png";
import Services_02 from "../assets/icons/services_02.png";
import Services_03 from "../assets/icons/services_03.png";
import Services_04 from "../assets/icons/services_04.png";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GiAtom } from "react-icons/gi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { PiMicroscopeLight } from "react-icons/pi";
import { GiTestTubes } from "react-icons/gi";
import { RiCustomerService2Line } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IoIosStar } from "react-icons/io";

import CustomButton from "../components/CustomButton";

// Keen Slider
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";

const productItemsData = [
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

const newsItemsData = [
    {
        image: News_01,
        title: `A new "Antėja" procedure room has been opened in Klaipėda!`,
        href: "#",
    },
    {
        image: News_02,
        title: `New "Antėja" treatment room in Vilnius!`,
        href: "#",
    },
    {
        image: News_03,
        title: `Proper and timely treatment of hemorrhoids is a successful path to a fulfilling life`,
        href: "#",
    },
    {
        image: News_04,
        title: `We have opened a new generation laboratory: it will perform as many as 300,000 tests daily`,
        href: "#",
    },
    {
        image: News_05,
        title: `The clinic in Marijampole has opened its doors!`,
        href: "#",
    },
    {
        image: News_06,
        title: `The rehabilitation center in Klaipėda has opened its doors!`,
        href: "#",
    },
];

const Home = () => {
    const [sliderPerView, setSliderPerView] = useState(1);

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

    const [productsSliderLoaded, setProductsSliderLoaded] = useState(false);

    const [productsSliderRef, productsSliderInstance] = useKeenSlider({
        slides: { perView: sliderPerView },
        loop: true,
        initial: 0,
        created() {
            setProductsSliderLoaded(true);
        },
    });

    const [reviewSliderRef, reviewInstanceRef] = useKeenSlider({
        // slides: { perView: 1 },
        loop: true,
        initial: 0,
    });

    const [newsSliderRef, newsSliderInstance] = useKeenSlider({
        slides: { perView: sliderPerView },
        loop: true,
        initial: 0,
    });

    // Update perView based on viewport width
    useEffect(() => {
        const updatePerView = () => {
            if (window.innerWidth < 640) {
                setSliderPerView(1); // Mobile view
            } else if (window.innerWidth < 768) {
                setSliderPerView(2); // Tablet view
            } else {
                setSliderPerView(3); // Desktop view
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
            productsSliderInstance.current?.next();
        }, 6000);

        return () => clearInterval(interval);
    }, [productsSliderLoaded, productsSliderInstance]);

    return (
        <main
            className="max-width space-y-20 mb-10 py-10 bg-cover bg-no-repeat bg-top min-h-full"
            style={{ backgroundImage: `url('${DNA_Image}')` }}
        >
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
                <div ref={slider_01_Ref} className="keen-slider">
                    <div className="keen-slider__slide">
                        <img
                            src={Slider_01}
                            alt="Slider 01"
                            className="rounded-lg w-full"
                        />
                    </div>
                    <div className="keen-slider__slide">
                        <img
                            src={Slider_02}
                            alt="Slider 02"
                            className="rounded-lg w-full"
                        />
                    </div>
                    <div className="keen-slider__slide">
                        <img
                            src={Slider_03}
                            alt="Slider 03"
                            className="rounded-lg w-full"
                        />
                    </div>
                    <div className="keen-slider__slide">
                        <img
                            src={Slider_04}
                            alt="Slider 04"
                            className="rounded-lg w-full"
                        />
                    </div>
                </div>
                <div className="mt-5 sm:m-0 sm:absolute bg-gray-600/40 px-2 py-1 rounded-full bottom-4 right-4 z-10 flex items-center justify-center gap-2">
                    <div className="order-2 sm:order-1">
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
                        className="bg-gray-200/70 text-white hover:bg-white hover:text-primary rounded-full p-2 text-3xl order-1 sm:order-2"
                    >
                        <MdKeyboardArrowLeft />
                    </button>
                    <button
                        onClick={(e) =>
                            e.stopPropagation() ||
                            instance_01_Ref.current?.next()
                        }
                        className="bg-gray-200/70 text-white hover:bg-white hover:text-primary rounded-full p-2 text-3xl order-3"
                    >
                        <MdKeyboardArrowRight />
                    </button>
                </div>
            </section>

            {/* Info cards section */}
            <section className="text-gray-600 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-6 gap-x-4 text-sm sm:text-base">
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
            <section className="rounded-lg overflow-hidden cursor-pointer relative px-5">
                <button
                    onClick={(e) =>
                        e.stopPropagation() ||
                        productsSliderInstance.current?.prev()
                    }
                    className="absolute top-[50%] left-0 hover:text-primary p-2 text-3xl z-10"
                >
                    <MdKeyboardArrowLeft />
                </button>
                <button
                    onClick={(e) =>
                        e.stopPropagation() ||
                        productsSliderInstance.current?.next()
                    }
                    className="absolute top-[50%] right-0 hover:text-primary p-2 text-3xl z-10"
                >
                    <MdKeyboardArrowRight />
                </button>

                <div ref={productsSliderRef} className="keen-slider">
                    {productItemsData.map((product, idx) => (
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

            {/* Blood tests and Services */}
            <section className="flex flex-col gap-10 lg:flex-row">
                <section className="flex-1 text-center text-gray-700">
                    <h3 className="text-center lg:text-left text-2xl font-medium mb-6">
                        Blood tests
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5">
                        <Link
                            to={"#"}
                            className="flex flex-col items-center justify-center gap-3 bg-[#f3f3f3] px-4 rounded-lg group h-56"
                        >
                            <img
                                src={Blood_test_01}
                                alt="Blood test Image 01"
                                className="group-hover:invert group-hover:brightness-0 transition-[filter] duration-100 ease-in-out"
                            />
                            <p className="font-medium">Anemia studies</p>
                            <p className="flex items-center gap-0.5 text-primary">
                                To order <MdKeyboardArrowRight />
                            </p>
                        </Link>
                        <Link
                            to={"#"}
                            className="flex flex-col items-center justify-center gap-3 bg-[#f3f3f3] px-4 rounded-lg group h-56"
                        >
                            <img
                                src={Blood_test_02}
                                alt="Blood test Image 02"
                                className="group-hover:invert group-hover:brightness-0 transition-[filter] duration-100 ease-in-out"
                            />
                            <p className="font-medium">
                                General blood tests (cell tests)
                            </p>
                            <p className="flex items-center gap-0.5 text-primary">
                                To order <MdKeyboardArrowRight />
                            </p>
                        </Link>
                        <Link
                            to={"#"}
                            className="flex flex-col items-center justify-center gap-3 bg-[#f3f3f3] px-4 rounded-lg group h-56"
                        >
                            <img
                                src={Blood_test_03}
                                alt="Blood test Image 03"
                                className="group-hover:invert group-hover:brightness-0 transition-[filter] duration-100 ease-in-out"
                            />
                            <p className="font-medium">
                                Blood coagulation tests
                            </p>
                            <p className="flex items-center gap-0.5 text-primary">
                                To order <MdKeyboardArrowRight />
                            </p>
                        </Link>
                        <Link
                            to={"#"}
                            className="flex flex-col items-center justify-center gap-3 bg-[#f3f3f3] px-4 rounded-lg group h-56"
                        >
                            <img
                                src={Blood_test_04}
                                alt="Blood test Image 04"
                                className="group-hover:invert group-hover:brightness-0 transition-[filter] duration-100 ease-in-out"
                            />
                            <p className="font-medium">
                                Food sensitivity testing
                            </p>
                            <p className="flex items-center gap-0.5 text-primary">
                                To order <MdKeyboardArrowRight />
                            </p>
                        </Link>
                    </div>

                    <div className="flex justify-center lg:justify-start">
                        <Link to={"#"}>
                            <CustomButton className="py-2.5 px-10">
                                All research
                            </CustomButton>
                        </Link>
                    </div>
                </section>

                <section className="flex-1 text-center text-gray-700">
                    <h3 className="text-center lg:text-left text-2xl font-medium mb-6">
                        Services
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5">
                        <Link
                            to={"#"}
                            className="flex flex-col items-center justify-center gap-3 bg-[#f3f3f3] px-4 rounded-lg group h-56"
                        >
                            <img
                                src={Services_01}
                                alt="Services icon 01"
                                className="group-hover:invert group-hover:brightness-0 transition-[filter] duration-100 ease-in-out"
                            />
                            <p className="font-medium">Vaccines</p>
                            <p></p>
                        </Link>
                        <Link
                            to={"#"}
                            className="flex flex-col items-center justify-center gap-3 bg-[#f3f3f3] px-4 rounded-lg group h-56"
                        >
                            <img
                                src={Services_02}
                                alt="Services icon 02"
                                className="group-hover:invert group-hover:brightness-0 transition-[filter] duration-100 ease-in-out"
                            />
                            <p className="font-medium">Health checks</p>
                            <p></p>
                        </Link>
                        <Link
                            to={"#"}
                            className="flex flex-col items-center justify-center gap-3 bg-[#f3f3f3] px-4 rounded-lg group h-56"
                        >
                            <img
                                src={Services_03}
                                alt="Services icon 03"
                                className="group-hover:invert group-hover:brightness-0 transition-[filter] duration-100 ease-in-out"
                            />
                            <p className="font-medium">For companies</p>
                            <p></p>
                        </Link>
                        <Link
                            to={"#"}
                            className="flex flex-col items-center justify-center gap-3 bg-[#f3f3f3] px-4 rounded-lg group h-56"
                        >
                            <img
                                src={Services_04}
                                alt="Services icon 04"
                                className="group-hover:invert group-hover:brightness-0 transition-[filter] duration-100 ease-in-out"
                            />
                            <p className="font-medium">Clinics</p>
                            <p></p>
                        </Link>
                    </div>

                    <div className="flex justify-center lg:justify-start">
                        <Link to={"#"}>
                            <CustomButton className="py-2.5 px-10">
                                All services
                            </CustomButton>
                        </Link>
                    </div>
                </section>
            </section>

            {/* Slider 03 (News) */}
            <section className="rounded-lg overflow-hidden cursor-pointer relative px-6">
                <h3 className="text-center text-3xl font-medium mb-6">News</h3>
                <button
                    onClick={(e) =>
                        e.stopPropagation() ||
                        newsSliderInstance.current?.prev()
                    }
                    className="absolute top-[50%] left-0 hover:text-primary p-2 text-3xl z-10"
                >
                    <MdKeyboardArrowLeft />
                </button>
                <button
                    onClick={(e) =>
                        e.stopPropagation() ||
                        newsSliderInstance.current?.next()
                    }
                    className="absolute top-[50%] right-0 hover:text-primary p-2 text-3xl z-10"
                >
                    <MdKeyboardArrowRight />
                </button>

                <div ref={newsSliderRef} className="keen-slider">
                    {newsItemsData.map((item, idx) => (
                        <div
                            key={idx}
                            className="keen-slider__slide flex justify-center"
                        >
                            <Link
                                to={item.href}
                                className="w-56 sm:w-64 flex flex-col group"
                            >
                                <div className="w-full h-52 flex justify-center items-center mb-5 ">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="rounded-xl w-full"
                                    />
                                </div>
                                <p className="overflow-hidden text-ellipsis line-clamp-2 mb-6 group-hover:underline underline-offset-2">
                                    {item.title}
                                </p>
                                <p className="flex items-center gap-1.5 text-primary hover:underline underline-offset-2 text-sm">
                                    Read more <MdKeyboardArrowRight />
                                </p>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section className="rounded-xl overflow-hidden flex flex-col md:flex-row">
                <div className="p-8 bg-[#e7e7e7] md:w-[35%]">
                    <h4 className="font-semibold mb-1">Get the news first</h4>
                    <p className="text-sm text-gray-700 mb-4">
                        How often is preventive health check-up necessary? When
                        is the time to get a flu shot? Subscribe to the
                        newsletter so that the most important reminders arrive
                        in your mailbox on time. You will receive not only
                        useful information on how to take care of your health,
                        but also the best offers and promotions.
                    </p>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="text-sm"
                    >
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
                <div className="p-8 bg-[#ececec] md:w-[30%]">
                    <h4 className="font-semibold mb-1">Customer service</h4>
                    <p className="text-primary">
                        Tel: <span className="font-semibold">8 700 55 511</span>
                    </p>
                    <p className="text-primary mb-4">
                        Tel: (from abroad){" "}
                        <span className="font-semibold">00-370-37-245330</span>
                    </p>

                    <p className="text-gray-700 mb-3 text-sm">
                        Calls to the customer service center number are charged
                        according to the tariff applied by your communication
                        operator.
                    </p>

                    <p className="text-primary mb-1.5 text-sm sm:text-base">
                        Email:{" "}
                        <span className="font-medium">pagalba@anteja.lt</span>
                    </p>

                    <p className="mb-1.5 text-sm sm:text-base">
                        Working hours:
                    </p>
                    <p className="text-gray-700 mb-1.5 text-sm sm:text-base">
                        1. 7:00 - 19:00
                    </p>
                    <p className="text-gray-700 mb-1.5 text-sm sm:text-base">
                        2. 10:00 - 14:00
                    </p>
                </div>

                <div className="p-8 bg-[#f3f3f3] md:w-[35%]">
                    <h4 className="font-semibold mb-4">Reviews</h4>
                    <div
                        className="relative min-h-60 md:h-72 keen-slider"
                        ref={reviewSliderRef}
                    >
                        <div className="absolute right-3 bottom-8 text-3xl z-10">
                            <button
                                onClick={(e) =>
                                    e.stopPropagation() ||
                                    reviewInstanceRef.current?.prev()
                                }
                                className="cursor-pointer hover:text-primary"
                            >
                                <MdKeyboardArrowLeft />
                            </button>
                            <button
                                onClick={(e) =>
                                    e.stopPropagation() ||
                                    reviewInstanceRef.current?.next()
                                }
                                className="cursor-pointer hover:text-primary"
                            >
                                <MdKeyboardArrowRight />
                            </button>
                        </div>
                        <div className="keen-slider__slide">
                            <div className="flex text-primary gap-0.5 text-lg mb-5">
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                            </div>
                            <p className="text-sm mb-3">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. At suscipit iste iure ullam,
                                porro aut inventore.
                            </p>
                            <h5 className="uppercase mb-5">Jhon Deo</h5>
                        </div>
                        <div className="keen-slider__slide">
                            <div className="flex text-primary gap-0.5 text-lg mb-5">
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                            </div>
                            <p className="text-sm mb-3">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. At suscipit iste iure ullam,
                                porro aut inventore.
                            </p>
                            <h5 className="uppercase mb-5">Jhon Deo</h5>
                        </div>
                        <div className="keen-slider__slide">
                            <div className="flex text-primary gap-0.5 text-lg mb-5">
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                            </div>
                            <p className="text-sm mb-3">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. At suscipit iste iure ullam,
                                porro aut inventore.
                            </p>
                            <h5 className="uppercase mb-5">Jhon Deo</h5>
                        </div>
                    </div>
                    <Link
                        to={"#"}
                        className="flex items-center gap-1.5 text-primary text-sm hover:underline underline-offset-2"
                    >
                        All reviews <MdKeyboardArrowRight />
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Home;

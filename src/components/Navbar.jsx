import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { BsBag } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

import CustomButton from "./CustomButton";
import NavDropdownLinks from "./NavDropdownLinks";

const Navbar = () => {
    const navLinks = [
        {
            href: "/research",
            label: "Research",
            title: "Blood Tests",
            navLinks: [
                {
                    href: "/covid-19-research",
                    label: "Covid-19 Research",
                },
                {
                    href: "/hormone-tests",
                    label: "Hormone Tests",
                },
                {
                    href: "/anemia-studies",
                    label: "Anemia Studies",
                },
                {
                    href: "/infection-studies",
                    label: "Infection Studies",
                },
                {
                    href: "/allergological-tests",
                    label: "Allergological tests and allergen programs",
                },
                {
                    href: "/immunological-studies",
                    label: "Immunological Studies",
                },
            ],
        },
        {
            href: "/vaccines",
            label: "Vaccines",
            navLinks: [
                {
                    href: "/covid-19-research",
                    label: "Covid-19 Research",
                },
                {
                    href: "/hormone-tests",
                    label: "Hormone Tests",
                },
                {
                    href: "/anemia-studies",
                    label: "Anemia Studies",
                },
                {
                    href: "/infection-studies",
                    label: "Infection Studies",
                },
                {
                    href: "/allergological-tests",
                    label: "Allergological tests and allergen programs",
                },
                {
                    href: "/immunological-studies",
                    label: "Immunological Studies",
                },
            ],
        },
        {
            href: "/doctors",
            label: "Doctors",
            navLinks: [
                {
                    href: "/covid-19-research",
                    label: "Covid-19 Research",
                },
                {
                    href: "/hormone-tests",
                    label: "Hormone Tests",
                },
                {
                    href: "/anemia-studies",
                    label: "Anemia Studies",
                },
                {
                    href: "/infection-studies",
                    label: "Infection Studies",
                },
                {
                    href: "/allergological-tests",
                    label: "Allergological tests and allergen programs",
                },
                {
                    href: "/immunological-studies",
                    label: "Immunological Studies",
                },
            ],
        },
        {
            href: "/services",
            label: "Services",
            navLinks: [
                {
                    href: "/covid-19-research",
                    label: "Covid-19 Research",
                },
                {
                    href: "/hormone-tests",
                    label: "Hormone Tests",
                },
                {
                    href: "/anemia-studies",
                    label: "Anemia Studies",
                },
                {
                    href: "/infection-studies",
                    label: "Infection Studies",
                },
                {
                    href: "/allergological-tests",
                    label: "Allergological tests and allergen programs",
                },
                {
                    href: "/immunological-studies",
                    label: "Immunological Studies",
                },
            ],
        },
    ];

    return (
        <header className="border-b border-gray-400">
            <div className="max-width relative pt-5 pb-3 lg:pb-0">
                {/* Top of Header */}
                <div className="flex justify-between items-start mb-5">
                    <div className="flex items-center gap-4">
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="px-3 py-1.5 rounded-xl border border-gray-400 text-sm gap-1 items-center hidden lg:flex"
                        >
                            <input
                                type="text"
                                name="search"
                                placeholder="Search..."
                                className="outline-none border-none font-montserrat text-gray-500"
                            />
                            <button
                                type="submit"
                                className="text-xl hover:text-primary"
                            >
                                <IoIosSearch />
                            </button>
                        </form>

                        <p className="">
                            <span className="font-semibold py-0.5 pr-2.5 mr-2.5 border-r border-gray-400">
                                8 700 55511
                            </span>
                            <span>pagalba@anteja.lt</span>
                        </p>
                    </div>
                    <div className="flex items-start gap-5">
                        <div className="flex items-center gap-3">
                            <button className="text-4xl hover:text-primary">
                                <CiHeart />
                            </button>
                            <button className="text-3xl hover:text-primary">
                                <IoPersonOutline />
                            </button>
                            <button className="text-3xl hover:text-primary">
                                <BsBag />
                            </button>
                        </div>

                        <div className="flex flex-col gap-2">
                            <CustomButton>
                                Online registration + research results
                            </CustomButton>
                            <CustomButton>
                                Registration at the clinic
                            </CustomButton>
                        </div>
                    </div>
                </div>

                {/* Navbar */}
                <div className="flex gap-6 items-center lg:items-end justify-between">
                    <Link to={"/"}>
                        <img src="/logo.svg" className="w-40" />
                    </Link>

                    <nav className="hidden lg:block">
                        <ul className="flex items-center gap-3">
                            {navLinks.map((links, idx) => (
                                <li key={idx}>
                                    <NavDropdownLinks links={links} />
                                </li>
                            ))}
                            <li>
                                <Link
                                    to="/contact"
                                    className="hover:text-primary"
                                >
                                    Find Us!
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <a
                        href="mailto:pagalba@antej.lt"
                        className="hidden lg:block"
                    >
                        <CustomButton className="mb-1.5">Email Us</CustomButton>
                    </a>

                    <div className="flex-grow hidden md:block lg:hidden">
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="px-3 py-1.5 rounded-xl border border-gray-400 text-sm gap-1 items-center flex"
                        >
                            <input
                                type="text"
                                name="search"
                                placeholder="Search..."
                                className="outline-none border-none font-montserrat text-gray-500 flex-grow"
                            />
                            <button
                                type="submit"
                                className="text-xl hover:text-primary"
                            >
                                <IoIosSearch />
                            </button>
                        </form>
                    </div>

                    <div className="flex lg:hidden items-center gap-3">
                        <button className="text-4xl hover:text-primary">
                            <CiHeart />
                        </button>
                        <button className="text-3xl hover:text-primary">
                            <IoPersonOutline />
                        </button>
                        <button className="text-3xl hover:text-primary">
                            <BsBag />
                        </button>

                        <button className="text-4xl text-primary ml-2">
                            <GiHamburgerMenu />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

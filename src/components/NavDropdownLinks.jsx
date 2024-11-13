import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

const NavDropdownLinks = ({ links }) => {
    return (
        <div className="group">
            <Link
                to={links.href}
                className="uppercase group-hover:text-primary flex items-center gap-1.5 py-2"
            >
                {links.label}
                <MdKeyboardArrowDown className="text-xl group-hover:-rotate-180 transition-transform duration-500 ease-in-out" />
            </Link>
            {/* Hovers */}
            <div className="hidden z-10 group-hover:block px-10 py-8 bg-[#f0f0f0] absolute left-2 right-2 top-[100%]">
                {links.title && (
                    <h4 className="mb-2.5 uppercase text-lg font-semibold">
                        {links.title}
                    </h4>
                )}

                {/* Links */}
                <div className="text-sm lg:text-base">
                    <ul className="grid grid-cols-4 gap-x-3 gap-y-2">
                        {links.navLinks.map((link, idx) => (
                            <li
                                key={idx}
                                className={`${
                                    link.isSideLink ? "uppercase" : ""
                                }`}
                            >
                                <Link
                                    to={`${links.href}${link.href}`}
                                    className="hover:underline underline-offset-2"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavDropdownLinks;

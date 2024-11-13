import { Link } from "react-router-dom";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="max-width !px-5 py-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 pb-5 mb-5 border-b border-gray-300 text-center gap-7 sm:text-start md:gap-0">
                <div>
                    <h5 className="font-semibold mb-2 sm:mb-5">About Us</h5>
                    <ul className="space-y-0.5 sm:space-y-2 text-gray-600 text-sm">
                        <li>
                            <Link
                                to={"#"}
                                className="hover:underline underline-offset-2"
                            >
                                Administration contacts
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"#"}
                                className="hover:underline underline-offset-2"
                            >
                                Career
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"#"}
                                className="hover:underline underline-offset-2"
                            >
                                Quality assurance
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"#"}
                                className="hover:underline underline-offset-2"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-semibold mb-2 sm:mb-5">Current</h5>
                    <ul className="space-y-0.5 sm:space-y-2 text-gray-600 text-sm">
                        <li>
                            <Link
                                to={"#"}
                                className="hover:underline underline-offset-2"
                            >
                                Preparation for research
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"#"}
                                className="hover:underline underline-offset-2"
                            >
                                Buying and Selling rules
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-semibold mb-2 sm:mb-5">Related</h5>
                    <ul className="space-y-0.5 sm:space-y-2 text-gray-600 text-sm">
                        <li>
                            <Link
                                to={"#"}
                                className="hover:underline underline-offset-2"
                            >
                                How to Buy?
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"#"}
                                className="hover:underline underline-offset-2"
                            >
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"#"}
                                className="hover:underline underline-offset-2"
                            >
                                Cookie Policy
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-semibold mb-2 sm:mb-5">
                        Company Details
                    </h5>
                    <ul className="space-y-0.5 sm:space-y-2 text-gray-600 text-sm">
                        <li>UAB Diagnostic Laboratory</li>
                        <li>37 Main Road, Dhaka</li>
                        <li>Company Code: 30000033</li>

                        <li className="flex justify-center pt-2 sm:p-0 sm:justify-start gap-2">
                            <a
                                href="#"
                                className="text-4xl text-gray-400 hover:text-primary"
                            >
                                <FaFacebookSquare />
                            </a>
                            <a
                                href="#"
                                className="text-4xl text-gray-400 hover:text-primary"
                            >
                                <FaLinkedin />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <p className="flex flex-col sm:flex-row gap-1 justify-between items-center text-gray-600 text-sm">
                <span>&copy; 2024 All rights reserved. Anteja</span>
                <span>
                    Design and Programming:{" "}
                    <a
                        href="https://github.com/TheProjectsX"
                        target="_blank"
                        className="uppercase font-semibold"
                    >
                        TheProjectsX
                    </a>
                </span>
            </p>
        </footer>
    );
};

export default Footer;

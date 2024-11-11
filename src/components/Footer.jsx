import { Link } from "react-router-dom";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const ti = (
        <div>
            <h5 className="font-semibold mb-5">About Us</h5>
            <ul className="space-y-2 text-gray-600">
                <li>
                    <Link to={"#"}></Link>
                </li>
            </ul>
        </div>
    );

    return (
        <footer className="max-width !px-5 py-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 pb-5 mb-5 border-b border-gray-300 text-center gap-7 sm:text-start md:gap-0">
                <div>
                    <h5 className="font-semibold mb-5">About Us</h5>
                    <ul className="space-y-2 text-gray-600">
                        <li>
                            <Link to={"#"}>Administration contacts</Link>
                        </li>
                        <li>
                            <Link to={"#"}>Career</Link>
                        </li>
                        <li>
                            <Link to={"#"}>Quality assurance</Link>
                        </li>
                        <li>
                            <Link to={"#"}>Privacy Policy</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-semibold mb-5">Current</h5>
                    <ul className="space-y-2 text-gray-600">
                        <li>
                            <Link to={"#"}>Preparation for research</Link>
                        </li>
                        <li>
                            <Link to={"#"}>Buying and Selling rules</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-semibold mb-5">Related</h5>
                    <ul className="space-y-2 text-gray-600">
                        <li>
                            <Link to={"#"}>How to Buy?</Link>
                        </li>
                        <li>
                            <Link to={"#"}>FAQ</Link>
                        </li>
                        <li>
                            <Link to={"#"}>Cookie Policy</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-semibold mb-5">Company Details</h5>
                    <ul className="space-y-2 text-gray-600">
                        <li>UAB Diagnostic Laboratory</li>
                        <li>37 Main Road, Dhaka</li>
                        <li>Company Code: 30000033</li>

                        <li className="flex gap-2">
                            <a
                                href="#"
                                className="text-4xl text-gray-500 hover:text-primary"
                            >
                                <FaFacebookSquare />
                            </a>
                            <a
                                href="#"
                                className="text-4xl text-gray-500 hover:text-primary"
                            >
                                <FaLinkedin />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <p className="flex flex-col sm:flex-row gap-2 justify-between items-center text-gray-600 text-sm">
                <span>&copy;2024 All rights reserved. Anteja</span>
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

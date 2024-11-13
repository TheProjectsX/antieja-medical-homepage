import ReactDrawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Link } from "react-router-dom";

const navLinks = [
    {
        href: "/research",
        label: "Research",
        title: "Blood Tests",
        navLinks: [
            {
                href: "#",
                label: "Covid-19 Research",
            },
            {
                href: "#",
                label: "Hormone Tests",
            },
            {
                href: "#",
                label: "Anemia Studies",
            },
            {
                href: "#",
                label: "Infection Studies",
            },
            {
                href: "#",
                label: "Allergological tests and allergen programs",
            },
            {
                href: "#",
                label: "Immunological Studies",
            },
        ],
    },
    {
        href: "/vaccines",
        label: "Vaccines",
        navLinks: [
            {
                href: "#",
                label: "Tick-borne encephalitis vaccinations",
            },
            {
                href: "#",
                label: "Hepatitis vaccinations",
            },
            {
                href: "#",
                label: "Other vaccinations",
            },
            {
                href: "#",
                label: "HPV vaccinations",
            },
            {
                href: "#",
                label: "Pneumo vaccinations",
            },
            {
                href: "#",
                label: "Rotavirus vaccinations",
            },
            {
                href: "#",
                label: "Recommendations for vaccinations",
            },
        ],
    },
    {
        href: "/doctors",
        label: "Doctors",
        navLinks: [
            {
                href: "#",
                label: "Abdominal surgeons-proctologists",
            },
            {
                href: "#",
                label: "Acupuncturists",
            },
            {
                href: "#",
                label: "Surgeons",
            },
            {
                href: "#",
                label: "Bariatricians",
            },
            {
                href: "#",
                label: "Nutritionists",
            },
            {
                href: "#",
                label: "Geneticists",
            },
        ],
    },
    {
        href: "/services",
        label: "Services",
        navLinks: [
            {
                href: "#",
                label: "Outpatient services",
            },
            {
                href: "#",
                label: "MRI",
            },
            {
                href: "#",
                label: "Rehabilitation",
            },
            {
                href: "#",
                label: "Health checks",
            },
            {
                href: "#",
                label: "X-Ray",
            },
            {
                href: "#",
                label: "For companies",
            },
            {
                href: "#",
                label: "Doctor services",
            },
            {
                href: "#",
                label: "Endoscopy",
            },
        ],
    },
];

const Drawer = ({ drawerOpened, setDrawerOpened }) => {
    return (
        <ReactDrawer
            open={drawerOpened}
            onClose={() => setDrawerOpened((prev) => !prev)}
            direction="left"
            className="p-5 pr-0"
        >
            <div className="">
                <h4 className="uppercase mb-3 font-medium">Menu</h4>
                <ul className="flex flex-col gap-1.5">
                    {navLinks.map((item, idx) => (
                        <li key={idx} className="w-full relative group pr-5">
                            <Link
                                to={item.href}
                                className="py-2 px-4 w-full inline-block hover:bg-gray-200 rounded-xl"
                            >
                                {item.label}
                            </Link>

                            <div className="hidden group-hover:block absolute top-[calc(100%+10px)] left-0 right-5 bg-gray-100 p-5 z-10">
                                <ul className="flex flex-col gap-1.5">
                                    {item.navLinks.map((navLink, idx2) => (
                                        <li key={idx2}>
                                            <Link
                                                to={navLink.href}
                                                className="inline-block px-2 py-2 hover:bg-white w-full text-sm rounded-lg"
                                            >
                                                {navLink.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </ReactDrawer>
    );
};

export default Drawer;

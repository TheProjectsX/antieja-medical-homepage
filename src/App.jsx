import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import Drawer from "./components/Drawer";

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

const App = () => {
    const [drawerOpened, setDrawerOpened] = useState(false);

    return (
        <>
            <Drawer
                navLinks={navLinks}
                drawerOpened={drawerOpened}
                setDrawerOpened={setDrawerOpened}
            />
            <Navbar navLinks={navLinks} setDrawerOpened={setDrawerOpened} />
            <Outlet />
            <Footer />
        </>
    );
};

export default App;

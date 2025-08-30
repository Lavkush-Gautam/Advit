import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import gsap from "gsap";
import logo1 from "../assets/fcompany.jpg";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdown, setDropdown] = useState(null);
    const [mobileDropdown, setMobileDropdown] = useState(null);

    const navigate = useNavigate()

    const navLinks = [
        { name: "Home", dropdown: [] },
        { name: "About Us", dropdown: ["Our Story", "Investor Meet"] },
        {
            name: "Services",
            dropdown: [
                "Mutual Fund",
                "Tax Planning",
                "Retirement Planning",
                "Health Insurance",
                "Term Insurance",
                "Education Planning",
            ],
        },
        {
            name: "Tools",
            dropdown: [
                "Financial Calculators",
                "Financial Health",
                "Risk Profile",
                "Pay Premium Online",
                "Useful Links",
            ],
        },
        { name: "Blogs", dropdown: [] },
        { name: "Contacts", dropdown: [] },
    ];

    const navRefs = useRef([]);
    const btnRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            navRefs.current,
            { y: -30, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power3.out" }
        );

        gsap.fromTo(
            btnRef.current,
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6, delay: 0.5, ease: "back.out(1.7)" }
        );
    }, []);

    return (
        <nav className="w-full text-white fixed top-0 left-0 z-50 bg-[#F9F0D3]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}

                    <Link to={"/"} className="flex items-center space-x-2">
                        <div className="flex-shrink-0">
                            <img src={logo1} alt="Logo" className="h-16 w-auto" />
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-6 items-center relative">
                        {navLinks.map((link, index) => (
                            <div
                                key={index}
                                className="relative group"
                                onMouseEnter={() =>
                                    link.dropdown.length && setDropdown(link.name)
                                }
                                onMouseLeave={() => setDropdown(null)}
                                ref={(el) => (navRefs.current[index] = el)}
                            >
                                {/* Main link or button */}
                                {link.dropdown.length === 0 ? (
                                    <Link
                                        to={`/${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                                        className="relative z-10 px-2 py-1 text-gray-800 font-medium flex items-center hover:text-green-400 transition"
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <button
                                        type="button"
                                        className="relative z-10 px-2 py-1 text-gray-800 font-medium flex items-center hover:text-green-400 transition"
                                    >
                                        {link.name}
                                        <ChevronDown size={16} className="ml-1" />
                                    </button>
                                )}

                                {/* Hover Circle Animation */}
                                <span className="absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 bg-green-200 -z-10"></span>

                                {/* Dropdown (Desktop) */}
                                {dropdown === link.name && link.dropdown.length > 0 && (
                                    <div className="absolute top-full mt-2 w-56 bg-white shadow-lg rounded-lg p-2">
                                        {link.dropdown.map((item, i) => (
                                            <Link
                                                key={i}
                                                to={`/${link.name.toLowerCase().replace(/\s+/g, "-")}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                                className="block px-4 py-2 text-gray-700 hover:bg-green-100 rounded-md transition"
                                            >
                                                {item}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        <button
                            ref={btnRef}
                            onClick={() => navigate('/login')}
                            className="relative bg-green-500 overflow-hidden px-8 py-3 rounded-full font-semibold text-white border border-green-500 group"
                        >
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-gray-700">
                                Login
                            </span>
                            <span className="absolute inset-y-0 left-0 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>
                        </button>
                    </div>


                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center bg-gray-800 text-white">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden  shadow-md px-6 py-4 space-y-4">
                    {navLinks.map((link, index) => (
                        <div key={index} className="relative">
                            {/* If no dropdown -> link, else -> button */}
                            {link.dropdown.length === 0 ? (
                                <Link
                                    to={`/${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                                    className="block w-full text-left text-gray-600 font-medium hover:text-green-400 transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <button
                                    onClick={() =>
                                        setMobileDropdown(mobileDropdown === link.name ? null : link.name)
                                    }
                                    className="w-full flex justify-between items-center text-gray-600 font-medium hover:text-green-400 transition"
                                >
                                    {link.name}
                                    <ChevronDown
                                        size={18}
                                        className={`transition-transform duration-300 ${mobileDropdown === link.name ? "rotate-180" : "rotate-0"
                                            }`}
                                    />
                                </button>
                            )}

                            {/* Mobile Dropdown (Click-to-toggle) */}
                            {mobileDropdown === link.name && link.dropdown.length > 0 && (
                                <div className="ml-4 mt-2 space-y-1">
                                    {link.dropdown.map((item, i) => (
                                        <Link
                                            key={i}
                                            to={`/${link.name.toLowerCase().replace(/\s+/g, "-")}/${item
                                                .toLowerCase()
                                                .replace(/\s+/g, "-")}`}
                                            className="block text-gray-600 hover:text-green-400 transition"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Login Button */}
                    <button
                        onClick={() => {
                            navigate("/login");
                            setIsOpen(false);
                        }}
                        className="relative bg-green-500 overflow-hidden px-4 py-2 rounded-full font-semibold text-gray-700 border border-green-500 group"
                    >
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-gray-700">
                            Login
                        </span>
                        <span className="absolute inset-y-0 left-0 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>
                    </button>
                </div>
            )}

        </nav>
    );
};

export default Navbar;

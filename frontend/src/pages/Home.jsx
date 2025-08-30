import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import SlideStock from "../components/SlideStock";
import gsap from "gsap";
import professionalImg from "../assets/hero-img.webp"; // add your image
import Banks from "../components/Banks";
import { ArrowBigRight } from "lucide-react";
import Contacts from "./Contacts";
import About from "./About";
import Services from "./Services";
import Choose from "../components/Choose";
import Features from "./Features";
import Facts from "../components/Facts";
import Task from "../components/Task";
import Working from "../components/Working";
import Faqs from "../components/Faqs";
import Blog from "../components/Blog";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const textRef = useRef(null);
    const imgRef = useRef(null);
    const cardRef = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {
        gsap.fromTo(
            textRef.current,
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
        );
        gsap.fromTo(
            imgRef.current,
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 }
        );

        gsap.fromTo(
            cardRef.current,
            { x: -200, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "back.out(1.7)",
                delay: 1,
                onComplete: () => {
                    gsap.to(cardRef.current, {
                        x: 20,
                        duration: 1.5,
                        repeat: -1,
                        yoyo: true,
                        ease: "power1.inOut",
                    });
                },
            }
        );
    }, []);

    return (
        <>
            {/* Navbar fixed on top */}
            <Navbar />

            {/* Push content down by navbar height (h-20 = 80px) */}
            <div className="bg-[#F9F0D3] min-h-screen pt-20">
                {/* Fixed Stock Slider under Navbar */}
                <div className="relative top-0 left-0 w-full z-40">
                    <SlideStock />
                </div>

                {/* Main Content */}
                <div className="pt-10 px-6 mx-auto gap-6 w-full">
                    {/* Portfolio Hero Section */}
                    <div className="flex flex-col md:flex-row items-center justify-between relative">
                        {/* Left Text */}
                        <div ref={textRef} className="text-gray-600 max-w-lg gap-2">
                            <p className="text-lg font-bold tracking-wide">
                                WELCOME TO ADVIT CAPITAL ADVISOR
                            </p>
                            <h1 className="text-4xl md:text-6xl font-bold w-full leading-tight">
                                <span className="text-green-600">Building</span> Wealth, One Step
                                at a Time
                            </h1>
                            <p className="mt-4 text-gray-600 text-lg">
                                Guiding you with expert insights and strategic solutions to
                                achieve financial growth, stability, and long-term success.
                            </p>

                            <button
                                onClick={() => navigate("/contacts")}
                                className="mt-4 relative bg-green-500 overflow-hidden px-6 py-3 rounded-full font-semibold text-white border border-green-500 group"
                            >
                                <span className="relative z-10 transition-colors duration-300 group-hover:text-gray-700">
                                    Get Started
                                </span>
                                <span className="absolute inset-y-0 left-0 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>
                            </button>
                            <div className="mt-4 text-gray-600 flex items-center gap-2">
                                <h2 className="text-xl font-semibold">We are Working with </h2>
                                <ArrowBigRight className="fill-white" size={16} />
                                <Banks />
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="mt-10 md:mt-0 relative" ref={imgRef}>
                            <img
                                src={professionalImg}
                                alt="Finance Professional"
                                className="rounded-2xl shadow-lg w-[400px] md:w-[500px]"
                            />

                            {/* Overlapping Experience Card */}
                            <div
                                ref={cardRef}
                                className="absolute bottom-40 -left-6 overflow-hidden bg-green-600 text-white px-8 py-4 rounded-xl shadow-xl group"
                            >
                                <div className="relative z-10 transition-colors duration-500 group-hover:text-gray-700">
                                    <h2 className="text-3xl md:text-4xl font-bold">30+ Years</h2>
                                    <p className="text-lg font-medium">of Experience</p>
                                </div>
                                <span className="absolute top-0 left-0 w-full h-0 bg-white transition-all duration-500 ease-in-out group-hover:h-full z-0"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Sections */}
            <div className="mt-5">
                <About />
            </div>
            <Services />
            <Choose />
            <div>
                <Features />
            </div>
            <Facts />
            <Task />
            <Working />
            <Faqs />

            <div className="mt-40 md:mt-0 bg-[#F9F0D3]">
                <Blog />
            </div>
        </>
    );
};

export default Home;

// components/Fleet.jsx
"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Users, Sparkles } from "lucide-react";

// Import vehicle photographs as Vite static assets for bulletproof bundling
import marutiDzire from "../../public/images/maruti-dzire.jpg";
import hatchbackImg from "../../public/images/hatchback.jpg";
import suvImg from "../../public/images/suv.jpg";
import innovaCrystaImg from "../../public/images/Innova-Crysta.jpg";
import travelloImg from "../../public/images/travello.jpg";

const vehicles = [
    { 
        name: "Maruti Suzuki Dzire", 
        capacity: "4 Seater", 
        rate: "₹12/km", 
        image: marutiDzire, 
        tagline: "Elegant, cozy, and perfectly suited for outstation travel and tours." 
    },
    { 
        name: "Premium Hatchback", 
        capacity: "4 Seater", 
        rate: "₹11/km", 
        image: hatchbackImg, 
        tagline: "Economic, nimble, and highly popular for short commutes." 
    },
    { 
        name: "Utility SUV Ertiga", 
        capacity: "6–7 Seater", 
        rate: "₹15/km", 
        image: suvImg, 
        tagline: "Deep legroom, solid power, and amazing for family outstation travel." 
    },
    { 
        name: "Innova Crysta", 
        capacity: "7 Seater", 
        rate: "₹18/km", 
        image: innovaCrystaImg, 
        tagline: "Luxury touring, soft leather seats, premium suspension." 
    },
    { 
        name: "Tempo Traveller", 
        capacity: "12 Seater", 
        rate: "₹24/km", 
        image: travelloImg, 
        tagline: "Group charter, expansive luggage capacity, great for tours." 
    },
];

const Fleet = () => {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % vehicles.length);
    const prev = () => setCurrent((prev) => (prev - 1 + vehicles.length) % vehicles.length);

    return (
        <section
            id="fleet"
            className="py-24 px-6 md:px-12 bg-slate-50 scroll-mt-14 relative border-b border-slate-200"
        >
            <div className="max-w-7xl mx-auto">
                
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="text-xs uppercase tracking-[0.25em] font-extrabold text-slate-400">
                        AJAY TAXI SERVICE
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                        Our Ajay Taxi Fleet
                    </h2>
                    <div className="w-16 h-1.5 bg-taxi-yellow mx-auto rounded-full"></div>
                    <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                        Choose from a high-quality selection of premium Ajay Taxi services ranging from sleek business class sedans to heavy-duty touring vans. All maintained to pristine aesthetic and mechanical standards.
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative flex justify-center items-center overflow-hidden w-full h-[450px] sm:h-[480px] lg:h-[530px]">
                    {vehicles.map((vehicle, idx) => {
                        let offset = idx - current;
                        if (offset < -Math.floor(vehicles.length / 2)) offset += vehicles.length;
                        if (offset > Math.floor(vehicles.length / 2)) offset -= vehicles.length;

                        const isCenter = offset === 0;

                        return (
                            <motion.div
                                key={idx}
                                layout
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.2}
                                onDragEnd={(e, info) => {
                                    if (info.offset.x < -80) next();
                                    else if (info.offset.x > 80) prev();
                                }}
                                initial={{ opacity: 0.7, scale: 0.8 }}
                                animate={{
                                    x: offset * 340,
                                    scale: isCenter ? 1 : 0.82,
                                    opacity: isCenter ? 1 : 0.45,
                                    zIndex: isCenter ? 10 : 1,
                                }}
                                transition={{ type: "spring", stiffness: 130, damping: 26 }}
                                className={`absolute w-[240px] sm:w-[290px] lg:w-[350px] rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-slate-200 bg-white overflow-hidden cursor-grab`}
                            >
                                <div className="relative">
                                    <img
                                        src={vehicle.image}
                                        alt={vehicle.name}
                                        referrerPolicy="no-referrer"
                                        loading="lazy"
                                        className="w-full h-44 sm:h-56 lg:h-60 object-cover select-none transition-all duration-300 hover:scale-105"
                                    />
                                    {/* Capacity Badge */}
                                    <div className="absolute top-3 left-3 bg-slate-900/90 text-white backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 border border-slate-700">
                                        <Users className="w-3.5 h-3.5 text-taxi-yellow" />
                                        {vehicle.capacity}
                                    </div>
                                    <div className="absolute bottom-3 right-3 bg-taxi-yellow text-slate-950 font-black px-3.5 py-1 rounded-lg text-xs tracking-tight shadow">
                                        {vehicle.rate}
                                    </div>
                                </div>
                                <div className="p-5 text-left space-y-2">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                                            {vehicle.name}
                                        </h3>
                                        <Sparkles className="w-4 h-4 text-taxi-yellow invisible xs:visible" />
                                    </div>
                                    <p className="text-xs text-slate-500 leading-relaxed min-h-[32px]">
                                        {vehicle.tagline}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}

                    {/* Left Arrow */}
                    <button
                        onClick={prev}
                        className="absolute left-1 sm:left-4 top-1/2 transform -translate-y-1/2 bg-slate-900 text-white p-3 rounded-full shadow-lg hover:bg-taxi-yellow hover:text-slate-900 transition-colors duration-300 z-20 cursor-pointer border border-slate-800"
                    >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={next}
                        className="absolute right-1 sm:right-4 top-1/2 transform -translate-y-1/2 bg-slate-900 text-white p-3 rounded-full shadow-lg hover:bg-taxi-yellow hover:text-slate-900 transition-colors duration-300 z-20 cursor-pointer border border-slate-800"
                    >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                </div>

                {/* Foot indicators and overview of pricing bar */}
                <div className="mt-8 bg-slate-100 border border-slate-200 rounded-xl max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-around p-4 overflow-x-auto gap-4">
                    <span className="text-xs uppercase font-extrabold text-slate-500 tracking-wider shrink-0">Quick Rates (Min. 300km/Day):</span>
                    <div className="flex items-center gap-6 divide-x divide-slate-200 overflow-x-auto text-xs shrink-0 font-semibold text-slate-700">
                        <span className="pl-4">Sedan: <strong className="text-slate-900 font-bold">₹12/km</strong></span>
                        <span className="pl-4">Hatchback: <strong className="text-slate-900 font-bold">₹11/km</strong></span>
                        <span className="pl-4">SUV Class: <strong className="text-slate-900 font-bold">₹15/km</strong></span>
                        <span className="pl-4">Innova: <strong className="text-slate-900 font-bold">₹18/km</strong></span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Fleet;

// components/About.jsx
"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, Navigation, Send } from "lucide-react";

const About = () => {
    const [readMore, setReadMore] = useState(false);
    const [formStatus, setFormStatus] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handlePrefill = (e) => {
            const { pickup, drop, vehicle } = e.detail || {};
            const form = document.querySelector("#about form");
            if (form) {
                if (pickup) {
                    const pickupInput = form.querySelector('input[name="pickup"]');
                    if (pickupInput) pickupInput.value = pickup;
                }
                if (drop) {
                    const dropInput = form.querySelector('input[name="drop"]');
                    if (dropInput) dropInput.value = drop;
                }
                if (vehicle) {
                    const vehicleSelect = form.querySelector('select[name="vehicle"]');
                    if (vehicleSelect) vehicleSelect.value = vehicle;
                }
                
                // Focus on Name input to invite user action
                const nameInput = form.querySelector('input[name="name"]');
                if (nameInput) {
                    nameInput.focus();
                }
            }
        };

        window.addEventListener("prefillBooking", handlePrefill);
        return () => window.removeEventListener("prefillBooking", handlePrefill);
    }, []);

    const handleReadMore = () => setReadMore(!readMore);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setFormStatus("");

        const form = e.target;

        const data = {
            name: form.name.value,
            phone: form.phone.value,
            pickup: form.pickup.value,
            drop: form.drop.value,
            date: form.date.value,
            time: form.time.value,
            vehicle: form.vehicle.value,
        };

        try {
            // Pre-process the vehicle class label for WhatsApp
            const mapVehicleKeyToName = (key) => {
                switch(key) {
                    case "maruti-dzire": return "Maruti Suzuki Dzire (Comfort Sedan)";
                    case "hatchback": return "Hatchback (Budget Commute)";
                    case "suv": return "Ertiga / Bolero (Family SUV)";
                    case "innova-crysta": return "Innova Crysta (Premium Touring)";
                    case "tempo-traveller": return "Tempo Traveller (Group Charter)";
                    default: return key;
                }
            };
            const vehicleName = mapVehicleKeyToName(data.vehicle);

            // Build a structured WhatsApp booking text card
            const whatsappMessage = `*🚖 NEW TAXI RESERVATION - AJAY TAXI SERVICES*
---------------------------------------
👤 *Passenger:* ${data.name}
📞 *Contact Number:* ${data.phone}
📍 *Pick-Up From:* ${data.pickup}
🏁 *Drop-Off To:* ${data.drop}
📅 *Journey Date:* ${data.date}
⏰ *Pick-Up Time:* ${data.time}
🚗 *Vehicle Class:* ${vehicleName}
---------------------------------------
✅ _Sent via Ajay Taxi Web Card Reservation._`;

            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappUrl = `https://wa.me/917878329410?text=${encodedMessage}`;

            // Try to send the details to the background server for email notification
            let backendSucceeded = false;
            try {
                const res = await fetch("/api/booking", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                });
                if (res.ok) {
                    backendSucceeded = true;
                }
            } catch (backendErr) {
                console.warn("Backend logging skipped/failed:", backendErr);
            }

            if (backendSucceeded) {
                setFormStatus("✅ Booking saved and email notified! Redirecting to WhatsApp to send your card...");
            } else {
                setFormStatus("⚠️ Booking registered locally! Redirecting to WhatsApp as primary confirmation channel...");
            }

            // Redirect to WhatsApp message with prefilled card format
            setTimeout(() => {
                window.open(whatsappUrl, "_blank", "noopener,noreferrer");
            }, 1000);

            form.reset();
        } catch (err) {
            setFormStatus("❌ Booking error. Please call +91 78783 29410 directly.");
        } finally {
            setLoading(false);
        }

        setTimeout(() => setFormStatus(""), 7000);
    };

    const bulletPoints = [
        "Premium Local, Airport, and Outstation rides",
        "Clean, comfortable cabs, and reliable drivers",
        "Transparent billing with absolute zero hidden costs",
        "Instant Whatsapp response & 24/7 dedicated telephone support",
        "Worry-free flat-rates for regular travelers & corporate clients"
    ];

    return (
        <section id="about" className="py-24 px-6 md:px-12 bg-slate-50 scroll-mt-14 border-y border-slate-200">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
                
                {/* Left Column - Sophisticated Brand Info */}
                <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-2 text-taxi-navy font-bold text-sm uppercase tracking-widest text-slate-500">
                        <span className="w-8 h-0.5 bg-taxi-yellow"></span> The Premier Cab Network
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        Elevating Everyday Travel across <span className="text-taxi-yellow bg-slate-950 px-2 py-0.5 rounded">Rajasthan</span>
                    </h2>

                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                        Welcome to <span className="font-bold text-slate-900">Ajay Taxi Services</span>, Sikar's highly commended local and outstation taxi operator. Built on integrity, punctuality, and excellent hospitality, we connect Sikar, Jaipur, and the surrounding regions with flat rates and experienced professional chauffeurs.
                    </p>

                    <p className="text-slate-600 text-base leading-relaxed">
                        Whether you are catching an early morning flight, organizing a multi-day heritage tour, or navigating busy business schedules, we pledge a stress-free and luxurious journey tailored exactly to your preferences.
                    </p>

                    {/* Bullet Points */}
                    <div className="space-y-3 pt-2">
                        {bulletPoints.map((point, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-taxi-yellow mt-0.5 shrink-0" />
                                <span className="text-slate-700 text-sm sm:text-base font-medium">{point}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-xs text-slate-400 italic">
                        * All vehicles are strictly sanitized and run with live GPS tracking for your maximum peace of mind.
                    </p>
                </div>

                {/* Right Column - Luxury Ticket / Booking Card */}
                <div className="w-full lg:w-[440px] transform lg:hover:scale-[1.01] transition-all duration-300">
                    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-slate-200 overflow-hidden">
                        
                        {/* Booking Header */}
                        <div className="bg-slate-900 text-white p-6 border-b-4 border-taxi-yellow flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-bold tracking-tight uppercase">Quick Ride Booking</h3>
                                <p className="text-xs text-slate-400 mt-0.5">Response within 5 minutes</p>
                            </div>
                            <Navigation className="w-7 h-7 text-taxi-yellow animate-pulse" />
                        </div>

                        {/* Booking Form Layout */}
                        <form className="p-6 space-y-4" onSubmit={handleSubmit}>
                            
                            {/* Passenger Details */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Passenger Name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="Full name"
                                        required
                                        className="w-full px-3.5 py-2.5 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-taxi-yellow focus:border-transparent text-sm font-medium transition-all"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Contact Number</label>
                                    <input
                                        name="phone"
                                        type="tel"
                                        placeholder="Phone details"
                                        required
                                        className="w-full px-3.5 py-2.5 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-taxi-yellow focus:border-transparent text-sm font-medium transition-all"
                                    />
                                </div>
                            </div>

                            {/* Addresses */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Pick-Up Location</label>
                                    <input
                                        name="pickup"
                                        type="text"
                                        placeholder="e.g. Sikar Station"
                                        required
                                        className="w-full px-3.5 py-2.5 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-taxi-yellow focus:border-transparent text-sm font-medium transition-all"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Drop-Off Destination</label>
                                    <input
                                        name="drop"
                                        type="text"
                                        placeholder="e.g. Jaipur Airport"
                                        required
                                        className="w-full px-3.5 py-2.5 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-taxi-yellow focus:border-transparent text-sm font-medium transition-all"
                                    />
                                </div>
                            </div>

                            {/* Date, Time */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Ride Date</label>
                                    <input
                                        name="date"
                                        type="date"
                                        required
                                        className="w-full px-3.5 py-2.5 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-taxi-yellow focus:border-transparent text-sm font-medium transition-all text-slate-700"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Ride Time</label>
                                    <input
                                        name="time"
                                        type="time"
                                        required
                                        className="w-full px-3.5 py-2.5 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-taxi-yellow focus:border-transparent text-sm font-medium transition-all text-slate-700"
                                    />
                                </div>
                            </div>

                            {/* Vehicle Preference */}
                            <div className="space-y-1">
                                <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Select Preferred Vehicle Class</label>
                                <select
                                    name="vehicle"
                                    required
                                    className="w-full px-3.5 py-2.5 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-taxi-yellow focus:border-transparent text-sm font-medium transition-all text-slate-700 bg-white"
                                >
                                    <option value="">Choose vehicle...</option>
                                    <option value="maruti-dzire">Maruti Suzuki Dzire (Comfort Sedan, 4 seats)</option>
                                    <option value="hatchback">Hatchback (Budget Commute, 4 seats)</option>
                                    <option value="suv">Ertiga / Bolero (Family SUV, 6-7 seats)</option>
                                    <option value="innova-crysta">Innova Crysta (Premium Touring, 7 seats)</option>
                                    <option value="tempo-traveller">Tempo Traveller (Group Charter, 12 seats)</option>
                                </select>
                            </div>

                            {/* Submit booking */}
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full py-4 rounded-xl font-extrabold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 ${
                                    loading
                                        ? "bg-slate-300 text-slate-500 cursor-not-allowed"
                                        : "bg-slate-900 text-white hover:bg-slate-800 active:scale-98 shadow-md"
                                }`}
                            >
                                <Send className="w-4.5 h-4.5" />
                                {loading ? "Locking Seat..." : "Confirm Instant Reservation"}
                            </button>

                            {/* Form feedback status message */}
                            {formStatus && (
                                <div className="text-center p-3 rounded-xl bg-slate-50 border border-slate-100 font-bold text-xs text-slate-800 animate-fade-in">
                                    {formStatus}
                                </div>
                            )}

                        </form>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;

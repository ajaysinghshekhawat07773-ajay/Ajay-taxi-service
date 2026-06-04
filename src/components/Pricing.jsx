// components/Pricing.jsx
import { Check, ShieldAlert } from "lucide-react";

const Pricing = () => {
    return (
        <section
            id="pricing"
            className="py-12 px-6 md:px-12 bg-white scroll-mt-14 border-b border-slate-200"
        >
            {/* Section Header */}
            <div className="max-w-7xl mx-auto text-center mb-16 space-y-4">
                <div className="text-xs uppercase tracking-[0.25em] font-extrabold text-slate-400">
                    TRANSPARENT TARIFF LIST
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    Fair Fares with Zero Hidden Fees
                </h3>
                <div className="w-16 h-1.5 bg-taxi-yellow mx-auto rounded-full"></div>
                <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                    Choose the ideal ride format suited to your schedule and budget. We provide certified regional rates backed by digital billing and complete breakdown reports.
                </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {[
                    {
                        title: "Prime Sedan (Dzire / Etios)",
                        price: "₹12",
                        unit: "per kilometer",
                        note: "Min. outstation run: 300 km/day",
                        description:
                            "The perfect balance of efficiency and premium comfort. Highly reliable and recommended sedan for families or dynamic executive trips.",
                        features: [
                            "Minimum billing: ₹3,600 per day",
                            "All-inclusive clean AC passenger cabin",
                            "Double baggage trunk storage capacity",
                            "Expert long-distance highway drivers"
                        ]
                    },
                    {
                        title: "Utility SUV (Ertiga / Bolero)",
                        price: "₹15",
                        unit: "per kilometer",
                        note: "Min. outstation run: 300 km/day",
                        description:
                            "Provides expansive headroom, heavy-duty road performance, and excellent suspension. Best suited for medium families and group getaways.",
                        features: [
                            "Minimum billing: ₹4,500 per day",
                            "6 to 7 passengers comfortable seating",
                            "Superb air conditioning for hot days",
                            "Hassle-free multi-stop itinerary support"
                        ]
                    },
                    {
                        title: "Premium SUV (Innova Crysta)",
                        price: "₹18",
                        unit: "per kilometer",
                        note: "Min. outstation run: 300 km/day",
                        description:
                            "Experience elite luxury on wheels. Enjoy superior plush leather captain seats, supreme safety, and pristine dual-zone cooling systems.",
                        features: [
                            "Minimum billing: ₹5,400 per day",
                            "7 seater premium executive workspace",
                            "State-of-the-art shock absorber ride",
                            "VIP priority traveler safety standard"
                        ]
                    },
                ].map((plan, idx) => (
                    <div
                        key={idx}
                        className="bg-slate-50 p-8 rounded-2xl border-2 border-slate-100 hover:border-taxi-yellow transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl hover:bg-white"
                    >
                        <div className="space-y-6">
                            {/* Card badge */}
                            <div className="text-left">
                                <h4 className="text-lg font-black text-slate-900">
                                    {plan.title}
                                </h4>
                                <span className="inline-block bg-zinc-200/60 text-taxi-navy text-[11px] font-bold px-2.5 py-1 rounded-md mt-2">
                                    {plan.note}
                                </span>
                            </div>

                            {/* Large Price display */}
                            <div className="text-left bg-slate-900 text-white rounded-xl p-5 border-l-4 border-taxi-yellow shadow-inner">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-black text-taxi-yellow">
                                        {plan.price}
                                    </span>
                                </div>
                                <div className="text-[10px] text-slate-300 uppercase tracking-widest font-bold mt-1">
                                    {plan.unit}
                                </div>
                            </div>

                            <p className="text-slate-500 text-sm leading-relaxed text-left font-medium">
                                {plan.description}
                            </p>

                            {/* Features list */}
                            <div className="space-y-2.5 pt-2 text-left">
                                {plan.features.map((feat, fIdx) => (
                                    <div key={fIdx} className="flex items-center gap-2 text-slate-700 text-xs font-semibold">
                                        <Check className="w-4 h-4 text-taxi-yellow shrink-0" />
                                        <span>{feat}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Booking CTA */}
                        <div className="pt-8">
                            <a
                                href="#about"
                                className="w-full text-center py-3.5 bg-slate-900 text-white font-extrabold uppercase tracking-widest text-[11px] rounded-xl hover:bg-slate-800 transition-all shadow active:scale-98 inline-block select-none"
                            >
                                Book This Vehicle
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quality disclosure */}
            <div className="max-w-4xl mx-auto mt-12 p-5 bg-taxi-navy text-white rounded-xl flex flex-col sm:flex-row items-center gap-4 border border-slate-800">
                <div className="text-taxi-yellow shrink-0 text-3xl font-black bg-taxi-yellow/10 p-3 rounded-full">🚖</div>
                <div className="text-left space-y-1">
                    <h5 className="text-sm font-extrabold text-taxi-yellow">Important Profitability &amp; Billing Rule</h5>
                    <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                        To maintain sustainable operations for our background-verified professional drivers, outstation journeys are subject to a **minimum average running requirement of 300 kilometers per calendar day** (e.g. for a Sedan, billing starts from 300km × ₹12 = ₹3,600 per day). Toll taxes, border state entrance taxes, and local parking fees are charged extra as per actual receipts.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;

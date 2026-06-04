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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {[
                    {
                        title: "City Rides",
                        price: "₹11–14",
                        unit: "per kilometer",
                        note: "Minimum base fare applies",
                        description:
                            "Perfect for rapid inner-city navigation, restaurant transfers, and quick office meetings inside Sikar.",
                        features: [
                            "Zero peak-hour multiplier",
                            "Free luggage containment",
                            "Trained and courteous handlers"
                        ]
                    },
                    {
                        title: "Outstation Trips",
                        price: "₹12–18",
                        unit: "per kilometer",
                        note: "Tolls & parking extra",
                        description:
                            "Relaxed long-distance tours across Rajasthan. Pristine cabins equipped with cooling and comfortable seats.",
                        features: [
                            "All Rajasthan destinations",
                            "Overnight travel allowed",
                            "Flexible multi-stop itineraries"
                        ]
                    },
                    {
                        title: "Airport Transfers",
                        price: "Fixed",
                        unit: "custom flat rates",
                        note: "Enquire via WhatsApp",
                        description:
                            "Fully synchronized meet & greet terminal coverage which tracks actual flight arrival coordinates.",
                        features: [
                            "Free delay standby checks",
                            "Assistance handling baggage",
                            "Guaranteed schedule safety"
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
                                <h4 className="text-lg font-bold text-slate-900">
                                    {plan.title}
                                </h4>
                                <p className="text-xs text-slate-400 font-medium mt-1">{plan.note}</p>
                            </div>

                            {/* Large Price display */}
                            <div className="text-left bg-slate-900 text-white rounded-xl p-5 border-l-4 border-taxi-yellow shadow-inner">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-black text-taxi-yellow">
                                        {plan.price}
                                    </span>
                                </div>
                                <div className="text-[10px] text-slate-300 uppercase tracking-widest font-bold mt-1">
                                    {plan.unit}
                                </div>
                            </div>

                            <p className="text-slate-500 text-sm leading-relaxed text-left">
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
                                className="w-full text-center py-3.5 bg-slate-900 text-white font-extrabold uppercase tracking-widest text-[11px] rounded-xl hover:bg-slate-800 transition-colors inline-block select-none"
                            >
                                Reserve This Ride
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quality disclosure */}
            <div className="max-w-4xl mx-auto mt-12 p-4 bg-yellow-50 border border-yellow-200 rounded-xl flex items-center gap-3">
                <ShieldAlert className="w-5 h-5 text-taxi-yellow shrink-0" />
                <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                    Important Passenger Note: Booking rates represent general pricing brackets. Flat flight schedules and major cultural tourist tours may involve specific seasonal travel packages. Please connect with our WhatsApp helpline for exact estimates.
                </p>
            </div>
        </section>
    );
};

export default Pricing;

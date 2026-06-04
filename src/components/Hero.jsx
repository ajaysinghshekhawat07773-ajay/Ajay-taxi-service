// components/Hero.jsx
import { Shield, Clock, Award, Star } from "lucide-react";

const Hero = () => {
    const phoneNumber = "+917878329410";

    const handleCall = (number) => {
        window.location.href = `tel:${number}`;
    };

    return (
        <section className="relative min-h-screen pt-24 pb-12 flex items-center bg-slate-900 overflow-hidden" id="home">
            {/* Background Image with Dark Professional Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1920&q=82"
                    alt="Scenic Rajasthan Heritage Fort dusk"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center opacity-[0.24] scale-102 filter brightness-75 bg-slate-950"
                />
                {/* Visual grid pattern */}
                <div 
                    className="absolute inset-0 opacity-15"
                    style={{
                        backgroundImage: "radial-gradient(#fbbf24 0.6px, transparent 0.6px)",
                        backgroundSize: "20px 20px"
                    }}
                ></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
                {/* Left Side Content Column */}
                <div className="lg:col-span-7 space-y-8 text-left">
                    <div className="inline-flex items-center gap-2 bg-taxi-yellow/10 border border-taxi-yellow/30 text-taxi-yellow px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                        <Star className="w-4.5 h-4.5 fill-taxi-yellow" /> Best Taxi Services in Sikar & Jaipur
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
                        Premium Travel for <span className="text-taxi-yellow underline decoration-taxi-yellow/40">Reliable</span> People.
                    </h1>
                    
                    <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                        Book professional city tours, outstation round-trips, and safe airport transfers across Rajasthan. Clean, sanitized cabs with verified on-time drivers. Keep peace of mind with upfront, transparent rates.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                          href="https://wa.me/917878329410"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2.5 px-7 py-4.5 bg-[#1DB954] text-white hover:bg-[#22C55E] font-bold rounded-xl text-sm uppercase tracking-wider shadow-lg shadow-green-950/20 active:scale-95 transition-all cursor-pointer"
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.864.001-2.641-1.026-5.118-2.894-6.991C16.576 1.878 14.102.85 11.474.85c-5.443 0-9.863 4.414-9.866 9.865-.001 1.802.493 3.551 1.433 5.101L1.962 21.5l5.952-1.562z"/>
                            </svg>
                            Book on WhatsApp
                        </a>
                        <button
                          onClick={() => handleCall(phoneNumber)}
                          className="inline-flex items-center justify-center gap-2 px-7 py-4.5 bg-transparent border-2 border-taxi-yellow text-taxi-yellow hover:bg-taxi-yellow hover:text-black font-bold rounded-xl text-sm uppercase tracking-wider active:scale-95 transition-all cursor-pointer"
                        >
                            📞 Connect Instantly
                        </button>
                    </div>

                    {/* Features Quick List */}
                    <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-400 pt-3">
                        <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-taxi-yellow" /> 24/7 Helpline</span>
                        <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-taxi-yellow" /> Verified Fleet</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-taxi-yellow" /> Timely Pickup</span>
                    </div>
                </div>

                {/* Right Side Stats & Values Grid */}
                <div className="lg:col-span-5 space-y-6">
                    {/* Compact stats overview card */}
                    <div className="bg-slate-900/80 border border-slate-800 backdrop-blur-md p-6 rounded-2xl relative shadow-2xl">
                        <h3 className="text-lg font-bold text-white mb-4">Our Service Highlights</h3>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div className="border-r border-slate-800 pr-2">
                                <div className="text-3xl font-black text-taxi-yellow">120+</div>
                                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mt-1">Active Cabs</div>
                            </div>
                            <div className="border-r border-slate-800 px-2">
                                <div className="text-3xl font-black text-taxi-yellow">15m</div>
                                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mt-1">Avg Response</div>
                            </div>
                            <div className="pl-2">
                                <div className="text-3xl font-black text-taxi-yellow">4.9/5</div>
                                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mt-1">Client Reviews</div>
                            </div>
                        </div>
                    </div>

                    {/* Core benefit cards in a tight stack */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-slate-950/80 border border-slate-800 p-5 rounded-xl shadow-sm">
                            <div className="w-10 h-10 bg-taxi-yellow/10 border border-taxi-yellow/20 rounded-lg flex items-center justify-center mb-3">
                                <Shield className="w-5 h-5 text-taxi-yellow" />
                            </div>
                            <h4 className="font-bold text-white text-base">Safety Guaranteed</h4>
                            <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                                GPS tracked Ajay Taxis. Experienced background-checked chauffeurs. Safe journeys.
                            </p>
                        </div>

                        <div className="bg-slate-950/80 border border-slate-800 p-5 rounded-xl shadow-sm">
                            <div className="w-10 h-10 bg-taxi-yellow/10 border border-taxi-yellow/20 rounded-lg flex items-center justify-center mb-3">
                                <Clock className="w-5 h-5 text-taxi-yellow" />
                            </div>
                            <h4 className="font-bold text-white text-base">24/7 Availability</h4>
                            <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                                Midnight flights or early departures. Reliable scheduled pickups anytime.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

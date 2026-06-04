// components/Services.jsx
const services = [
    {
        title: "City Rides",
        description:
            "Quick and convenient point-to-point rides within the city. Safe, responsive, and ideal for daily business or leisure trips.",
        icon: "🚖",
    },
    {
        title: "Airport Transfers",
        description:
            "Highly punctual pickup & drop service at Sikar or Jaipur airports. Advanced route planning protects your schedule.",
        icon: "✈️",
    },
    {
        title: "Outstation Trips",
        description:
            "Comfortable intercity expeditions across Rajasthan. Relax in premium sedans accompanied by experienced navigators.",
        icon: "🛣️",
    },
    {
        title: "Bike Taxi",
        description:
            "Fast, budget-friendly and dynamic single-passenger motor services. Perfect for swift travel and bypassing rush-hour grids.",
        icon: "🏍️",
    },
    {
        title: "Auto Rickshaw",
        description:
            "Highly affordable regional auto bookings. Quick, ventilated, and excellent for short-range commutes.",
        icon: "🛺",
    },
    {
        title: "Package Express",
        description:
            "Secure, immediate delivery for small parcels, priority luggage, and confidential documents via trusted drivers.",
        icon: "📦",
    },
];

const Services = () => {
    return (
        <section
            id="services"
            className="py-24 px-6 md:px-12 bg-white scroll-mt-14"
        >
            {/* Section Heading */}
            <div className="max-w-7xl mx-auto text-center mb-16 space-y-4">
                <div className="text-xs uppercase tracking-[0.25em] font-extrabold text-slate-400">
                    SERVICE PORTFOLIO
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                    Premium Transportation Packages
                </h2>
                <div className="w-16 h-1.5 bg-taxi-yellow mx-auto rounded-full"></div>
                <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                    Ajay Taxi Services powers transportation across Rajasthan. We combine diverse vehicles and high-tech tracking with old-school hospitality to ensure reliable, clean rides.
                </p>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group bg-slate-50 p-8 rounded-2xl transition-all duration-300 border-2 border-slate-100 hover:border-taxi-yellow hover:bg-white hover:shadow-xl flex flex-col justify-between"
                    >
                        <div>
                            {/* Icon bubble */}
                            <div className="w-16 h-16 rounded-2xl bg-slate-900 border-b-4 border-taxi-yellow flex items-center justify-center text-3xl group-hover:bg-taxi-yellow group-hover:border-slate-900 transition-all shadow-md mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-bold text-[#0f172a] mb-3 group-hover:text-taxi-navy transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.description}</p>
                        </div>
                        <div className="w-8 h-1 bg-slate-200 group-hover:w-full group-hover:bg-taxi-yellow transition-all duration-300 rounded"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;

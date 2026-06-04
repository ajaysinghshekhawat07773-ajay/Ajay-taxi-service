// components/Footer.jsx
const Footer = () => {
    return (
        <footer className="bg-slate-950 text-white pt-16 pb-8 border-t-4 border-taxi-yellow">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Brand / About */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-black tracking-tight text-white">
                        AJAY <span className="text-taxi-yellow">TAXI SERVICES</span>
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Rajasthan's leading executive transport service, providing reliable local and outstation taxi bookings centered on comfort, integrity, and safety.
                    </p>
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider font-mono">
                        📍 Devipura, Sikar, Rajasthan - 332001
                    </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Navigation</h3>
                    <ul className="space-y-2.5 text-slate-300 text-sm">
                        {[
                            { name: "Home", href: "#home" },
                            { name: "Services Portfolio", href: "#services" },
                            { name: "Our Fleet", href: "#fleet" },
                            { name: "About Us", href: "#about" },
                            { name: "Contact & Support", href: "#contact" }
                        ].map((link, i) => (
                            <li key={i}>
                                <a href={link.href} className="hover:text-taxi-yellow hover:underline transition-all duration-300">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Dispatch Helpline</h3>
                    <ul className="space-y-2.5 text-slate-300 text-sm">
                        <li>
                            Phone: <a href="tel:+917878329410" className="text-taxi-yellow hover:underline font-mono font-bold">+91 78783 29410</a>
                        </li>
                        <li>
                            Email: <a href="mailto:info@ajaytaxiservice.com" className="hover:text-taxi-yellow hover:underline">ajjubannaofficial@gmail.com</a>
                        </li>
                        <li>
                            Dispatch Hours: <span className="text-emerald-400 font-bold">24×7 Available</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 border-t border-slate-900 pt-6 text-center text-slate-500 text-xs max-w-7xl mx-auto px-6">
                © {new Date().getFullYear()} Ajay Taxi Services. Luxury travel carefully managed inside Sikar & Jaipur. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;

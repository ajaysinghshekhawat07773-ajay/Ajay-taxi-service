// components/Contactus.jsx
"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send, Compass } from "lucide-react";

const ContactUs = () => {
    const [formStatus, setFormStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setFormStatus("");

        const form = e.target;

        const data = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value,
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (res.ok) {
                setFormStatus("✅ Your message has been sent. We’ll reply soon!");
                form.reset();
            } else {
                setFormStatus(`❌ ${result.error}`);
            }
        } catch (err) {
            setFormStatus("❌ Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }

        setTimeout(() => setFormStatus(""), 5000);
    };

    return (
        <section id="contact" className="py-24 px-6 md:px-12 bg-slate-50 scroll-mt-14 border-b border-slate-200">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                
                {/* Left Column - Info + Map */}
                <div className="lg:col-span-5 bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl border border-slate-200 flex flex-col justify-between transition-all duration-300">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-extrabold text-slate-400">
                            <Compass className="w-4.5 h-4.5 text-taxi-yellow animate-spin-slow" /> CONNECT WITH US
                        </div>
                        
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
                            We Are Here <span className="text-taxi-yellow bg-slate-950 px-2 py-0.5 rounded">24/7</span> to Assist You
                        </h3>
                        
                        <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                            Have query about long-term outstation tourist packages, customized corporate taxi rental budgets, or looking for receipt invoice reports? Drop us a line or call us directly!
                        </p>

                        <div className="space-y-4 pt-2">
                            {/* Office location */}
                            <div className="flex items-center gap-3.5 text-slate-600 text-sm">
                                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 shadow-sm">
                                    <MapPin className="w-4.5 h-4.5 text-taxi-yellow" />
                                </div>
                                <p><span className="font-bold text-slate-900">Office address:</span> Sikar, Rajasthan, India</p>
                            </div>

                            {/* Telephone code */}
                            <div className="flex items-center gap-3.5 text-slate-600 text-sm">
                                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 shadow-sm">
                                    <Phone className="w-4.5 h-4.5 text-taxi-yellow" />
                                </div>
                                <p>
                                    <span className="font-bold text-slate-900">Direct dial:</span>
                                    <a href="tel:+917878329410" className="text-slate-700 hover:text-taxi-yellow transition-colors font-semibold font-mono"> +91 78783 29410</a>
                                </p>
                            </div>

                            {/* Email index */}
                            <div className="flex items-center gap-3.5 text-slate-600 text-sm">
                                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 shadow-sm">
                                    <Mail className="w-4.5 h-4.5 text-taxi-yellow" />
                                </div>
                                <p>
                                    <span className="font-bold text-slate-900">Dispatch queries:</span>
                                    <a href="mailto:info@ajaytaxiservice.com" className="text-slate-700 hover:text-taxi-yellow transition-colors font-semibold"> info@ajaytaxiservice.com</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Interactive maps placeholder */}
                    <div className="mt-8 rounded-xl overflow-hidden shadow-inner border border-slate-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.596923936278!2d75.1435!3d27.6094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db63d4a80b0a7%3A0xb4c2364f85a6f3c2!2sSikar%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1699999999999"
                            width="100%"
                            height="180"
                            className="grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-300"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* Right Column - Contact Form */}
                <div className="lg:col-span-7 bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl border border-slate-200 flex flex-col justify-between transition-all duration-300">
                    <div>
                        <div className="border-b border-slate-100 pb-4 mb-6">
                            <h4 className="text-xl font-bold text-slate-900">Send an Enquiry Message</h4>
                            <p className="text-xs text-slate-400 mt-1">Our customer experience agents reply within brief intervals</p>
                        </div>
                        
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            {/* Name Input */}
                            <div className="space-y-1">
                                <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Your Full Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-taxi-yellow focus:border-transparent text-sm font-medium transition-all"
                                />
                            </div>

                            {/* Email Input */}
                            <div className="space-y-1">
                                <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Corporate Email Address</label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="you@company.com"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-taxi-yellow focus:border-transparent text-sm font-medium transition-all"
                                />
                            </div>

                            {/* Message Input */}
                            <div className="space-y-1">
                                <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Describe your transport requirement</label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    required
                                    placeholder="Please outline pick-up spots, number of travellers, luggage loads, or schedule preferences..."
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-taxi-yellow focus:border-transparent text-sm font-medium resize-none transition-all"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2">
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
                                    {loading ? "Transmitting..." : "Send Secure Message"}
                                </button>
                            </div>

                            {/* Form Status Banner */}
                            {formStatus && (
                                <div className="text-center p-3 rounded-xl bg-slate-50 border border-slate-100 font-bold text-xs text-slate-800 animate-fade-in mt-4">
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

export default ContactUs;

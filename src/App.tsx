/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Fleet from "./components/Fleet";
import Pricing from "./components/Pricing";
import Contact from "./components/Contactus";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] font-sans antialiased text-[#2E2E2E]">
      <Header />
      <main id="home">
        <Hero />
        <About />
        <Services />
        <Fleet />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

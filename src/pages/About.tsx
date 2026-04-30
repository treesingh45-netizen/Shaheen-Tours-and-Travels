import { ShieldCheck, Target, HeartHandshake, History } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-slate-900 py-20 px-4 mt-[-72px] pt-[152px]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">About Us</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Discover the story behind Shaheen Tours and Travels and our commitment to making your journeys unforgettable.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Your Premier Travel Partner in Karachi</h2>
            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
              Located in the heart of Bahria Town Karachi, Shaheen Tours and Travels was founded with a singular vision: to provide seamless, affordable, and exceptional travel experiences for Pakistanis and international tourists alike.
            </p>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Whether you are planning a corporate retreat, a spiritual journey for Umrah, or a family vacation to the breathtaking northern landscapes of Pakistan, our dedicated team ensures every detail is handled with precision.
            </p>
            <Link to="/contact" className="inline-block bg-brand text-white px-8 py-4 rounded-full font-bold hover:bg-brand-dark transition-all">
              Start Your Journey With Us
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="rounded-2xl w-full h-[300px] object-cover" alt="Travelers planning" />
            <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="rounded-2xl w-full h-[300px] object-cover mt-8" alt="Airplane" />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
            <Target size={40} className="text-brand mb-6" />
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              To deliver outstanding travel solutions by offering customized packages, transparent pricing, and unparalleled customer service. We aim to take the stress out of travel planning so you can focus on making memories.
            </p>
          </div>
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
            <ShieldCheck size={40} className="text-brand mb-6" />
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              To be the most trusted and preferred travel agency in Pakistan, recognized globally for our commitment to excellence, integrity, and relentless focus on customer satisfaction.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-12 text-center">Why Customers Trust Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand">
                <History size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Experienced Team</h3>
              <p className="text-slate-600">Our agents have deep industry knowledge and personal travel experience to guide you right.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand">
                <HeartHandshake size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Personalized Service</h3>
              <p className="text-slate-600">We don't believe in one-size-fits-all. Every itinerary is crafted around your unique needs.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Secure & Reliable</h3>
              <p className="text-slate-600">From safe transactions to reliable on-ground partners, your security is our priority.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

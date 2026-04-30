import { ArrowRight, Star, CheckCircle2, MapPin, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center pt-32 pb-16 mt-[-72px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            className="w-full h-full object-cover" 
            alt="Beautiful travel destination"
          />
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="max-w-3xl mx-auto md:mx-0">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-[1.1]"
            >
              Explore the World <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-sky-200">Without Limits</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed mx-auto md:mx-0"
            >
              Your gateway to unforgettable journeys. From the scenic northern areas of Pakistan to exotic international destinations, we handle every detail of your trip.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Link 
                to="/packages" 
                className="bg-brand text-white px-8 py-4 rounded-full font-bold hover:bg-brand-dark transition-all hover:-translate-y-1 text-center"
              >
                Book Your Trip Today
              </Link>
              <a 
                href="https://wa.me/923144164507" 
                target="_blank" rel="noreferrer"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white hover:text-slate-900 transition-all text-center flex items-center justify-center gap-2"
              >
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Builders Section */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "1,000+", label: "Happy Travelers" },
              { value: "50+", label: "Destinations" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className={`p-4 ${idx > 0 ? "pt-8 md:pt-4" : ""}`}
              >
                <h3 className="text-4xl font-display font-bold text-slate-900 mb-2">{stat.value}</h3>
                <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-2xl">
              <h2 className="text-brand font-bold tracking-widest uppercase text-sm mb-2">Popular Destinations</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Featured Tour Packages</h3>
            </div>
            <Link to="/packages" className="hidden md:flex items-center gap-2 text-brand font-semibold hover:text-brand-dark group">
              View All Packages
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Package Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
              <div className="relative h-60 overflow-hidden">
                <img src="https://images.pexels.com/photos/36711005/pexels-photo-36711005.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Hunza Valley" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-slate-900">
                  from Rs. 35,000
                </div>
              </div>
              <div className="p-6 text-left">
                <h4 className="text-xl font-display font-bold text-slate-900 mb-2">Majestic Hunza Valley</h4>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <span className="flex items-center gap-1.5"><Calendar size={16} /> 5 Days</span>
                  <span className="flex items-center gap-1.5"><MapPin size={16} /> Pakistan</span>
                </div>
                <p className="text-slate-600 text-sm mb-6 line-clamp-2">Explore the breathtaking scenery of Hunza Valley, Attabad Lake, and Khunjerab Pass with our premium guided tour.</p>
                <Link to="/contact" className="block text-center w-full bg-slate-50 text-slate-900 border border-slate-200 py-3 rounded-xl font-semibold hover:bg-brand hover:text-white hover:border-brand transition-colors">
                  Book Now
                </Link>
              </div>
            </div>

            {/* Package Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
              <div className="relative h-60 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Paris, France" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-slate-900">
                  Contact for Price
                </div>
              </div>
              <div className="p-6 text-left">
                <h4 className="text-xl font-display font-bold text-slate-900 mb-2">Europe Highlights Tour</h4>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <span className="flex items-center gap-1.5"><Calendar size={16} /> 10 Days</span>
                  <span className="flex items-center gap-1.5"><MapPin size={16} /> Multi-City</span>
                </div>
                <p className="text-slate-600 text-sm mb-6 line-clamp-2">A majestic tour across Europe's finest cities including Paris, Rome, and Amsterdam with complete visa assistance.</p>
                <Link to="/contact" className="block text-center w-full bg-slate-50 text-slate-900 border border-slate-200 py-3 rounded-xl font-semibold hover:bg-brand hover:text-white hover:border-brand transition-colors">
                  Book Now
                </Link>
              </div>
            </div>

            {/* Package Card 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
              <div className="relative h-60 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Skardu Valley" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-slate-900">
                  from Rs. 45,000
                </div>
              </div>
              <div className="p-6 text-left">
                <h4 className="text-xl font-display font-bold text-slate-900 mb-2">Discover Skardu</h4>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <span className="flex items-center gap-1.5"><Calendar size={16} /> 7 Days</span>
                  <span className="flex items-center gap-1.5"><MapPin size={16} /> Pakistan</span>
                </div>
                <p className="text-slate-600 text-sm mb-6 line-clamp-2">Experience the cold desert of Skardu, upper Kachura lake, Deosai plains, and Shangrila resorts.</p>
                <Link to="/contact" className="block text-center w-full bg-slate-50 text-slate-900 border border-slate-200 py-3 rounded-xl font-semibold hover:bg-brand hover:text-white hover:border-brand transition-colors">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Link to="/packages" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-bold">
              View All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-brand font-bold tracking-widest uppercase text-sm mb-2">Why Choose Us</h2>
              <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">We Make Professional Travel Easy</h3>
              <p className="text-slate-600 mb-8 text-lg">
                At Shaheen Tours and Travels, we don't just book tickets; we craft experiences. Based in Bahria Town Karachi, our expert team provides personalized travel solutions for families, corporate groups, and solo adventurers.
              </p>
              
              <div className="space-y-6">
                {[
                  "Affordable & Transparent Pricing",
                  "Expert Visa Assistance",
                  "24/7 Support via WhatsApp",
                  "Customizable Itineraries"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="text-brand shrink-0 mt-1" size={24} />
                    <p className="text-slate-800 font-medium text-lg">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link to="/about" className="text-brand font-semibold hover:text-brand-dark flex items-center gap-2 group">
                  Learn More About Us
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-brand/10 rounded-3xl transform translate-x-4 translate-y-4"></div>
              <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Travel airplane" className="relative z-10 rounded-3xl object-cover h-[500px] w-full shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-24 bg-brand text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=2000&q=80" alt="pattern" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Need a Free Consultation?</h2>
          <p className="text-sky-100 text-lg md:text-xl mb-10">Our travel experts are ready to assist you with flight bookings, visa procedures, and customized tour plans.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:03144164507" className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold shadow-lg hover:bg-slate-50 transition-all text-lg">
              Call Us: 0314 4164507
            </a>
            <Link to="/contact" className="bg-transparent text-white border border-white hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-all text-lg">
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

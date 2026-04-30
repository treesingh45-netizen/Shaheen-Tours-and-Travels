import { Plane, Map, Building, FileText, Compass, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      icon: <Map size={32} />,
      title: "Local Tour Packages",
      description: "Explore the untouched beauty of Pakistan. We offer guided tours to Hunza, Skardu, Swat, Naran Kaghan, and Gilgit.",
    },
    {
      icon: <Globe size={32} />,
      title: "International Tours",
      description: "Travel the globe with our customized international packages covering Europe, Middle East, Southeast Asia, and more.",
    },
    {
      icon: <Plane size={32} />,
      title: "Airline Ticket Booking",
      description: "Get the best competitive fares for all domestic and international flights. We handle reservations, modifications, and cancellations.",
    },
    {
      icon: <FileText size={32} />,
      title: "Visa Assistance",
      description: "Navigating visa requirements can be complex. We provide comprehensive assistance for visit, tourist, and business visas.",
    },
    {
      icon: <Briefcase size={32} />,
      title: "Umrah / Hajj Services",
      description: "Perform your spiritual journey with peace of mind. We offer economy to 5-star Umrah packages tailored to your budget.",
    },
    {
      icon: <Building size={32} />,
      title: "Hotel Reservations",
      description: "Access our global network of partner hotels. We secure the best rates for all accommodations ranging from budget to luxury resorts.",
    }
  ];

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-slate-900 py-20 px-4 mt-[-72px] pt-[152px]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Our Services</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Comprehensive travel solutions tailored to your needs. From flights to accommodations, we've got you covered.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
              <div className="w-16 h-16 bg-brand/10 text-brand rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
              <Link to="/contact" className="text-brand font-semibold hover:text-brand-dark inline-flex items-center gap-2">
                Inquire Now <Compass size={16} />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-brand rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Don't see what you're looking for?</h2>
            <p className="text-lg text-sky-100 max-w-2xl mx-auto mb-10">
              We offer highly customizable travel solutions. Contact our consultants to create a personalized itinerary just for you.
            </p>
            <Link to="/contact" className="inline-block bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-colors shadow-lg">
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add Globe icon since it wasn't imported from lucide-react in the top.
// Creating a tiny wrapper just for the icon here or I can add it to lucide-react imports. Let me just fix the import:
import { Globe } from "lucide-react";

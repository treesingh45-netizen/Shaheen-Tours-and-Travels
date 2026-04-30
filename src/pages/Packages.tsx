import { Calendar, MapPin, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Packages() {
  const [filter, setFilter] = useState("All");

  const packages = [
    {
      id: 1,
      title: "Majestic Hunza Valley",
      type: "Local",
      duration: "5 Days",
      location: "Pakistan",
      price: "from Rs. 35,000",
      image: "https://images.pexels.com/photos/36711005/pexels-photo-36711005.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Explore the breathtaking scenery of Hunza Valley, Attabad Lake, and Khunjerab Pass with our premium guided tour."
    },
    {
      id: 2,
      title: "Discover Skardu",
      type: "Local",
      duration: "7 Days",
      location: "Pakistan",
      price: "from Rs. 45,000",
      image: "https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Experience the cold desert of Skardu, upper Kachura lake, Deosai plains, and Shangrila resorts."
    },
    {
      id: 3,
      title: "Europe Highlights Tour",
      type: "International",
      duration: "10 Days",
      location: "Multi-City",
      price: "Contact for Price",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A majestic tour across Europe's finest cities including Paris, Rome, and Amsterdam with complete visa assistance."
    },
    {
      id: 4,
      title: "Dubai Desert Safari & City Tour",
      type: "International",
      duration: "4 Days",
      location: "UAE",
      price: "Contact for Price",
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Experience the luxury of Dubai. Includes desert safari, Burj Khalifa visit, and exclusive shopping tours."
    },
    {
      id: 5,
      title: "Swat Valley Retreat",
      type: "Local",
      duration: "4 Days",
      location: "Pakistan",
      price: "from Rs. 28,000",
      image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Often called the Switzerland of the East. Visit Malam Jabba, Kalam, and Mahodand Lake."
    },
    {
      id: 6,
      title: "14-Day Premium Umrah Package",
      type: "Religious",
      duration: "14 Days",
      location: "Saudi Arabia",
      price: "Custom Quotes",
      image: "https://images.pexels.com/photos/28209449/pexels-photo-28209449.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete Umrah services including visa, flights, and 5-star hotel accommodations near Haramain."
    }
  ];

  const filteredPackages = filter === "All" ? packages : packages.filter(p => p.type === filter);

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-slate-900 py-20 px-4 mt-[-72px] pt-[152px]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Tour Packages</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Browse our hand-picked selection of local and international travel packages. Book your next adventure today.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {["All", "Local", "International", "Religious"].map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-colors ${
                filter === category 
                ? "bg-brand text-white shadow-md shadow-brand/20" 
                : "bg-white text-slate-600 border border-slate-200 hover:border-brand hover:text-brand"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map(pkg => (
            <div key={pkg.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-slate-900">
                  {pkg.price}
                </div>
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {pkg.type}
                </div>
              </div>
              <div className="p-6 text-left flex flex-col flex-1">
                <h4 className="text-xl font-display font-bold text-slate-900 mb-2">{pkg.title}</h4>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <span className="flex items-center gap-1.5"><Calendar size={16} /> {pkg.duration}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={16} /> {pkg.location}</span>
                </div>
                <p className="text-slate-600 text-sm mb-8 line-clamp-3 flex-1">{pkg.description}</p>
                <Link to="/contact" className="block text-center w-full bg-slate-50 text-slate-900 border border-slate-200 py-3 rounded-xl font-semibold hover:bg-brand hover:text-white hover:border-brand transition-colors mt-auto">
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-100">
            <Search size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">No packages found</h3>
            <p className="text-slate-500">Try changing your filters or contact us for a custom quote.</p>
          </div>
        )}
      </div>
    </div>
  );
}

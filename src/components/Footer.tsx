import { Link } from "react-router-dom";
import { Plane, MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex bg-white p-2 rounded-xl text-center">
              <img 
                src="https://shaheengroup.com.pk/shaheen%20png%20logo.png" 
                alt="Shaheen Tours and Travels" 
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-400 mt-4 max-w-xs">
              Your trusted partner for local and international travel, visa assistance, and customized tour packages from Pakistan.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-brand transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="hover:text-brand transition-colors text-sm">Our Services</Link></li>
              <li><Link to="/packages" className="hover:text-brand transition-colors text-sm">Tour Packages</Link></li>
              <li><Link to="/contact" className="hover:text-brand transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand shrink-0 mt-0.5" />
                <span className="text-sm">28G3+RM7, Bahria Town Karachi, Karachi, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand shrink-0" />
                <a href="tel:03144164507" className="text-sm hover:text-white transition-colors">0314 4164507</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand shrink-0" />
                <a href="mailto:info@shaheentours.pk" className="text-sm hover:text-white transition-colors">info@shaheentours.pk</a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-6">Business Hours</h3>
            <ul className="space-y-3">
              <li className="flex justify-between text-sm">
                <span>Monday - Saturday:</span>
                <span className="text-white">9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between text-sm">
                <span>Sunday:</span>
                <span className="text-white">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Shaheen Tours and Travels. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

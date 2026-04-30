import { Link, useLocation } from "react-router-dom";
import { Plane, Menu, Phone, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Tour Packages", path: "/packages" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-gray-100 shadow-sm py-3"
          : "bg-white border-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="https://shaheengroup.com.pk/shaheen%20png%20logo.png" 
              alt="Shaheen Tours and Travels" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "font-medium text-sm transition-colors hover:text-brand",
                    location.pathname === link.path
                      ? "text-brand"
                      : "text-slate-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <a
              href="tel:03144164507"
              className="hidden lg:flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              <Phone size={16} />
              <span>0314 4164507</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 py-4 px-4 shadow-lg flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "font-medium text-lg p-2 rounded-lg transition-colors",
                location.pathname === link.path
                  ? "bg-brand/10 text-brand"
                  : "text-slate-600 hover:bg-slate-50"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:03144164507"
            className="flex items-center justify-center gap-2 bg-brand text-white p-3 rounded-lg font-medium mt-2"
          >
            <Phone size={20} />
            <span>Call Now: 0314 4164507</span>
          </a>
        </div>
      )}
    </header>
  );
}

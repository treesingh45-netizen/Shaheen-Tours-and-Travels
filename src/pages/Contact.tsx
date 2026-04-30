import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-slate-900 py-20 px-4 mt-[-72px] pt-[152px]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Contact Us</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Ready to plan your next adventure? Reach out to us for bookings, inquiries, and visa assistance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand/10 p-3 rounded-full text-brand mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">Phone & WhatsApp</h3>
                  <p className="text-slate-600 mt-1">Chat or text us for immediate assistance.</p>
                  <div className="mt-2 flex gap-4">
                    <a href="tel:03144164507" className="text-brand font-semibold hover:underline">0314 4164507</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand/10 p-3 rounded-full text-brand mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">Email Address</h3>
                  <p className="text-slate-600 mt-1">Drop us an email anytime.</p>
                  <a href="mailto:info@shaheentours.pk" className="mt-2 inline-block text-brand font-semibold hover:underline">
                    info@shaheentours.pk
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand/10 p-3 rounded-full text-brand mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">Office Location</h3>
                  <p className="text-slate-600 mt-1 leading-relaxed">
                    28G3+RM7, Bahria Town Karachi,<br />
                    Karachi, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand/10 p-3 rounded-full text-brand mt-1">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">Business Hours</h3>
                  <p className="text-slate-600 mt-1">Mon-Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-slate-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://wa.me/923144164507" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#20bd5a] transition-all hover:-translate-y-1"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Send us a message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all" placeholder="John Doe" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all" placeholder="0314 4164507" required />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-2">Interested In</label>
                <select id="interest" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all bg-white">
                  <option>Local Tour Packages</option>
                  <option>International Tours</option>
                  <option>Visa Assistance</option>
                  <option>Umrah / Hajj</option>
                  <option>Airline Ticket Booking</option>
                  <option>Other Information</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Your Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all resize-none" placeholder="Tell us about your travel plans..." required></textarea>
              </div>
              <button type="submit" className="w-full bg-brand text-white py-4 rounded-lg font-bold hover:bg-brand-dark transition-colors flex items-center justify-center gap-2">
                <Send size={18} />
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 h-[400px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14466.86234033604!2d67.33644460596395!3d25.045431602166567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb34ae2f232fa89%3A0xff9dd6de2fcb7c89!2sBahria%20Town%20Karachi%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2sPK!4v1714571746200!5m2!1sen!2sPK" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

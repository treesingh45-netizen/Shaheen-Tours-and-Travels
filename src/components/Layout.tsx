import { Outlet, ScrollRestoration } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[72px]">
        {/* pt-[72px] offsets the fixed navbar height */}
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollRestoration />
    </div>
  );
}

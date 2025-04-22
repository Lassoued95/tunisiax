"use client";
import Link from "next/link";

export default function Footer({className = ""}) {
  return (
    <footer className={`bg-[#5D4FE1] text-white py-10 px-6 ${className}`}>

    
      <div className="max-w-6xl mx-auto text-center">
        {/* Top Message */}
        <h2 className="text-2xl font-semibold mb-2 tracking-tight">
          Stay in the loop ✨
        </h2>
        <p className="text-sm text-white/80 mb-6">
          Join our journey and discover new experiences with MyApp.
        </p>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-6">
          <Link href="/about" className="hover:underline hover:text-white">
            About Us
          </Link>
          <Link href="/privacy" className="hover:underline hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline hover:text-white">
            Terms & Conditions
          </Link>
          <Link href="/contact" className="hover:underline hover:text-white">
            Contact
          </Link>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/20 my-4 w-full max-w-[400px] mx-auto" />

        {/* Bottom */}
        <div className="text-xs text-white/60 mt-4">
          © {new Date().getFullYear()} <span className="font-medium">MyApp</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

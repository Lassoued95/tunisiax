import Link from 'next/link';

export default function Navbar({ className = "" }) {
  return (
    <nav className={`flex items-center justify-between px-6 py-4 shadow-lg border-b border-gray-200 bg-gradient-to-r from-[#5D4FE1] to-[#4a3fd1] text-white ${className}`}>
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <h1 className="text-3xl font-extrabold tracking-tight select-none">
          <span className="text-white">Tunisia</span>
          <span className="text-black">X</span>
        </h1>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        {[{ href: "/profile", label: "Profile" }, { href: "/community", label: "Community" }, { href: "/login", label: "Login" }].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="relative text-white font-medium transition-all duration-300 hover:text-[#F1F1F1] before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:bg-[#F1F1F1] hover:before:w-full before:transition-all before:duration-300"
          >
            {label}
          </Link>
        ))}

        <Link
          href="/signup"
          className="bg-[#F1F1F1] hover:bg-[#E2E2E2] text-[#4a3fd1] px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 transform hover:scale-105"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

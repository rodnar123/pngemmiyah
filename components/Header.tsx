"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <nav className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link href="#home">
            <Image
              src="/images/image3.jpg"
              alt="Logo"
              width={50}
              height={20}
              className="rounded-md"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <div className=" hidden md:flex space-x-8">
          <a href="#home" className="hover:text-blue-600 hover:font-bold">
            Home
          </a>
          <a href="#services" className="hover:text-blue-600 hover:font-bold">
            Services
          </a>
          <a href="#portfolio" className="hover:text-blue-600 hover:font-bold">
            Portfolio
          </a>
          <a
            href="#testimonials"
            className="hover:text-blue-600 hover:font-bold"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="hover:text-blue-600 hover:font-bold hover:underline"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <a href="#home" className="block hover:text-blue-600">
            Home
          </a>
          <a href="#services" className="block hover:text-blue-600">
            Services
          </a>
          <a href="#portfolio" className="block hover:text-blue-600">
            Portfolio
          </a>
          <a href="#testimonials" className="block hover:text-blue-600">
            Testimonials
          </a>
          <a href="#contact" className="block hover:text-blue-600">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;

import React from "react";
import { Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Hero from "@/components/Hero";
import Header from "@/components/Header";

// Custom LinkedIn SVG icon component
const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 hover:text-blue-400 cursor-pointer"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const LandingPage = () => {
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];
  return (
    <div className="min-h-screen  text-white">
      {/* Header/Navbar */}
      <header className=" fixed top-0 w-full text-white bg-gray-900 shadow-md z-50">
        <Header />
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-12 md:pt-32 md:pb-24 bg-gradient-to-r from-gray-600 to-gray-900"
      >
        <Hero />
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-16  bg-gradient-to-r from-gray-600 to-gray-900"
      >
        <Services />
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-16  bg-gradient-to-r from-gray-600 to-gray-900"
      >
        <Portfolio />
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-16  bg-gradient-to-r from-gray-600 to-gray-900"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className=" text-white rounded-md flex flex-col antialiased bg-gradient-to-r from-gray-600 to-gray-900 items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16  bg-gradient-to-r from-gray-600 to-gray-900"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-2" />
                  <span>(675) 7000000</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-2" />
                  <span>pngemmiya@contact.com.pg</span>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-2 border rounded"
                ></textarea>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className=" bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">
                We are a passionate team dedicated to creating innovative
                digital solutions for PNG SMEs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#home" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-white">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>East Taraka</li>
                <li>Unigate Bus Stop</li>
                <li>Phone: (675)7000000</li>
                <li>Email: pngemmiya@contact.com.pg</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
                <Twitter className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
                <Instagram className="w-6 h-6 hover:text-pink-400 cursor-pointer" />
                <LinkedInIcon />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PNG EM MI YAH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

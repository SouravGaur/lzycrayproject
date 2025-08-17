import React from "react";

// This is the enhanced Footer component with a more detailed layout,
// social media links, and a professional look.
export default function Footer() {
  // SVG icons for social media links, included directly in the code for self-containment.
  const SocialMediaIcons = () => (
    <div className="flex space-x-4">
      <a
        href="https://twitter.com/OLX_India"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
        aria-label="Twitter"
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.901 1.144h3.281c-.702.433-1.423.821-2.164 1.157a8.553 8.553 0 01-.817.291c-.961.341-2.007.575-3.111.691a5.626 5.626 0 01-1.282.088c-1.393.003-2.739-.234-4.008-.682a8.704 8.704 0 01-3.522-1.993 10.14 10.14 0 01-2.613-3.23l-.113.06c.72.188 1.467.288 2.227.3.364.006.728-.003 1.092-.016 1.487-.043 2.946-.226 4.363-.553a1.455 1.455 0 01.378-.095c.571-.122 1.142-.266 1.706-.431.57-.168 1.14-.351 1.702-.559.567-.21 1.127-.433 1.679-.676zM12 21.365a1.5 1.5 0 001.5-1.5c0-.825-.675-1.5-1.5-1.5s-1.5.675-1.5 1.5c0 .825.675 1.5 1.5 1.5zM12 22.865a3 3 0 110-6 3 3 0 010 6z" />
        </svg>
      </a>
      <a
        href="https://www.facebook.com/olxindia"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
        aria-label="Facebook"
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.502 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.774-1.63 1.57v1.74h2.775l-.445 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/company/olx/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-cyan-600 transition-colors duration-300"
        aria-label="LinkedIn"
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.765s.784-1.765 1.75-1.765 1.75.79 1.75 1.765-.783 1.765-1.75 1.765zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </a>
    </div>
  );

  return (
    <footer className="bg-gray-950 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Logo and Description */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-10 border-b border-gray-800 pb-8">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl font-extrabold text-white">OLX Clone</h2>
            <p className="mt-2 text-sm text-gray-500 max-w-sm">
              Your one-stop destination for buying and selling anything. Find
              great deals and post your own for free!
            </p>
          </div>
          <SocialMediaIcons />
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
          {/* Column 1: Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline text-sm text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm text-gray-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm text-gray-400">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline text-sm text-gray-400">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm text-gray-400">
                  Safety Tips
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm text-gray-400">
                  Site Map
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline text-sm text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm text-gray-400">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm text-gray-400">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="md:col-span-3 lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <p className="text-sm text-gray-400">
              New Delhi, India
              <br />
              info@olxclone.com
              <br />
              +91-9876543210
            </p>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} OLX Clone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

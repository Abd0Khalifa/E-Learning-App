import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="mt-32 bg-card-dark/50 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-main-color mb-4">EduFlow</h3>
            <p className="text-gray-400">
              Empowering learners worldwide with quality education.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-main-color">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-main-color">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-main-color">
                  Instructors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-main-color">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-main-color">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-main-color">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-main-color">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-main-color">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-main-color">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-main-color">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-main-color">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-main-color">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-glow mt-8"></div>
        <p className="text-center text-gray-400">
          &copy; 2023 EduFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

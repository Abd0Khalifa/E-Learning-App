import React from "react";
import { useSelector } from "react-redux";
import en from "./locales/en.json";
import ar from "./locales/ar.json";
import "./Footer.css";

const Footer = () => {
  const lang = useSelector((state) => state.auth.lang);
  const translations = lang === "ar" ? ar : en;

  return (
    <footer className="mt-32 bg-card-dark/50 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-main-color mb-4">
              SkillStack
            </h3>
            <p className="text-gray-400">{translations.footer_description}</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">{translations.quick_links}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-main-color">
                  {translations.about_us}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-main-color">
                  {translations.courses}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-main-color">
                  {translations.instructors}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-main-color">
                  {translations.contact}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">{translations.support}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-main-color">
                  {translations.help_center}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-main-color">
                  {translations.terms_of_service}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-main-color">
                  {translations.privacy_policy}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-main-color">
                  {translations.faq}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">{translations.connect}</h4>
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
          &copy; 2025 SkillStack. {translations.all_rights_reserved}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

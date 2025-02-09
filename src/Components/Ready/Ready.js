import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import en from "./locales/en.json";
import ar from "./locales/ar.json";

const Ready = () => {
  const lang = useSelector((state) => state.auth.lang);
  const translations = lang === "ar" ? ar : en;

  return (
    <section className="py-32">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="bg-card-dark rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="card-glow"></div>
          <h2 className="text-4xl font-bold mb-6">
            {translations.ready_title}
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            {translations.ready_description}
          </p>
          <Link to={"/browseCourses"} className="gradient-button mx-auto">
            <i className="fas fa-rocket"></i>
            {translations.get_started}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Ready;

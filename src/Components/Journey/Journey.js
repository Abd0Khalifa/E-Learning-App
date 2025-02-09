import React from "react";
import { useSelector } from "react-redux";
import en from "./locales/en.json";
import ar from "./locales/ar.json";
import { motion } from "framer-motion";

const Journey = () => {
  const lang = useSelector((state) => state.auth.lang);
  const translations = lang === "ar" ? ar : en;

  const journeySteps = [
    {
      icon: "fa-compass",
      title: translations.step1.title,
      description: translations.step1.description,
    },
    {
      icon: "fa-book-reader",
      title: translations.step2.title,
      description: translations.step2.description,
    },
    {
      icon: "fa-users",
      title: translations.step3.title,
      description: translations.step3.description,
    },
    {
      icon: "fa-certificate",
      title: translations.step4.title,
      description: translations.step4.description,
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden" dir="ltr">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-2 rounded-full bg-main-color/10 text-main-color text-sm font-medium inline-block mb-4">
            <i className="fas fa-map-signs mr-2"></i>
            {translations.learning_path}
          </span>
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">{translations.journey_title}</span>
          </h2>
          <p className="text-gray-400">{translations.journey_description}</p>
        </div>

        <div className="timeline-container">
          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <i className={`fas ${step.icon} timeline-icon`}></i>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;

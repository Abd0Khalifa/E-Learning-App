import { useSelector } from "react-redux";
import en from "./locales/en.json";
import ar from "./locales/ar.json";

const Whyus = () => {
  const lang = useSelector((state) => state.auth.lang);
  const translations = lang === "ar" ? ar : en;

  return (
    <section id="features" className="py-32">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-2 rounded-full bg-main-color/10 text-main-color text-sm font-medium inline-block mb-4">
            <i className="fas fa-star mr-2"></i>
            {translations.why_choose_us}
          </span>
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">
              {translations.learning_made_simple}
            </span>
          </h2>
          <p className="text-gray-400">{translations.why_description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {translations.features.map((feature, index) => (
            <div className="feature-card group" key={index}>
              <lord-icon
                src={feature.icon}
                trigger="hover"
                colors="primary:#fa329c"
                style={{ width: "84px", height: "84px" }}
              ></lord-icon>
              <h3 className="text-xl font-bold mb-4 group-hover:text-main-color transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whyus;

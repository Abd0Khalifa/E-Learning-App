const Journey = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-2 rounded-full bg-main-color/10 text-main-color text-sm font-medium inline-block mb-4">
            <i className="fas fa-map-signs mr-2"></i>
            Learning Path
          </span>
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Your Learning Journey</span>
          </h2>
          <p className="text-gray-400">
            Follow our structured learning path to achieve your goals step by
            step
          </p>
        </div>

        <div className="timeline-container">
          {[
            {
              icon: "fa-compass",
              title: "1. Choose Your Path",
              description:
                "Browse our extensive catalog of courses and select the perfect learning path that aligns with your career goals and interests. Our expert-curated paths ensure comprehensive skill development.",
            },
            {
              icon: "fa-book-reader",
              title: "2. Learn & Practice",
              description:
                "Access high-quality video content, complete interactive exercises, and work on real-world projects. Get hands-on experience with practical assignments and peer feedback.",
            },
            {
              icon: "fa-users",
              title: "3. Join Community",
              description:
                "Connect with fellow learners, participate in discussion forums, and attend live Q&A sessions with instructors. Learn together and grow your professional network.",
            },
            {
              icon: "fa-certificate",
              title: "4. Get Certified",
              description:
                "Complete your courses and earn industry-recognized certificates. Showcase your achievements on LinkedIn and boost your career prospects with verified credentials.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="timeline-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <i className={`fas ${step.icon} timeline-icon`}></i>
              <h3>{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;

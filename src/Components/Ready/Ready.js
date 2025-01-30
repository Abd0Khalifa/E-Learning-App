import React from "react";

const Ready = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="bg-card-dark rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="card-glow"></div>
          <h2 className="text-4xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of students already learning on EduFlow. Start your
            journey today!
          </p>
          <button className="gradient-button mx-auto">
            <i className="fas fa-rocket"></i>
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Ready;

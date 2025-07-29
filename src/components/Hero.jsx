import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center px-6">
      {/* Left Content */}
      <div className="text-center md:text-left space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-glow">
          Mahima Chauhan
        </h1>

        <h2 className="text-2xl font-medium animate-typewriter text-yellow-400">
          Web Developer | Programmer | Learner
        </h2>

        <p className="max-w-md text-gray-300">
          Passionate about building modern web experiences and learning every day.
        </p>

        <button className="mt-4 px-6 py-2 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition duration-300">
          View My Work
        </button>
      </div>

      {/* Right: Image */}
      <div className="mt-10 md:mt-0 md:ml-12">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-64 h-64 rounded-full object-cover border-4 border-yellow-400 shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default Hero;

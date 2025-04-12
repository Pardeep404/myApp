import React from "react";

function Home() {
  const backgroundUrl =
    "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1470&q=80";

  return (
    <section
      className="relative w-full min-h-[calc(100vh-64px)] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
          Empower Your Business with Us
        </h1>

        <p className="text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-6 text-gray-200">
          From innovative ideas to powerful execution, we help brands thrive in the digital era.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Home;

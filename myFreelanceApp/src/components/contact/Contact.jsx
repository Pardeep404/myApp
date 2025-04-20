import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser } from "react-icons/fa";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault(); // Stop page refresh

    setLoading(true);
    setError(null);

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      address: form.address.value,
      message: form.message.value,
    };

    fetch(`http://localhost:5000/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.success) {
          alert("Message sent!");
          form.reset();
        } else {
          setError("Something went wrong. Please try again.");
        }
      })
      .catch((err) => {
        setError("Something went wrong. Please try again.");
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="relative container mx-auto max-w-8xl px-4 py-10 flex flex-col items-center z-10 bg-gray-900 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-zinc-100 mb-6">
        Contact Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
        {/* Contact Form */}
        <div className="bg-gray-800 dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center w-full z-10">
          <h3 className="text-xl font-semibold text-zinc-100 mb-2">
            Get in Touch
          </h3>
          <form className="space-y-4 w-full" onSubmit={handleSubmit}>
            <div className="flex items-center border border-gray-700 p-2 rounded-md">
              <FaUser className="text-zinc-300 mr-2" />
              <input
                name="name"
                type="text"
                className="w-full outline-none bg-transparent text-zinc-100"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="flex items-center border border-gray-700 p-2 rounded-md">
              <FaEnvelope className="text-zinc-300 mr-2" />
              <input
                name="email"
                type="email"
                className="w-full outline-none bg-transparent text-zinc-100"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="flex items-center border border-gray-700 p-2 rounded-md">
              <FaPhone className="text-zinc-300 mr-2" />
              <input
                name="phone"
                type="text"
                className="w-full outline-none bg-transparent text-zinc-100"
                placeholder="Your Phone"
                required
              />
            </div>
            <div className="flex items-center border border-gray-700 p-2 rounded-md">
              <FaMapMarkerAlt className="text-zinc-300 mr-2" />
              <input
                name="address"
                type="text"
                className="w-full outline-none bg-transparent text-zinc-100"
                placeholder="Your Address"
                required
              />
            </div>
            <textarea
              name="message"
              className="w-full border border-gray-700 p-2 rounded-md outline-none bg-transparent text-zinc-100"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-indigo-600 text-white px-4 py-2 rounded-lg w-full"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </div>

        {/* Contact Details & Google Map */}
        <div className="flex flex-col items-center w-full z-10">
          <div className="bg-gray-800 dark:bg-gray-800 p-5 rounded-lg shadow-md text-center mb-6 w-full">
            <h3 className="text-xl font-semibold mb-4 text-zinc-100">
              Contact Information
            </h3>
            <p className="flex items-center justify-center text-zinc-300 mb-2">
              <FaMapMarkerAlt className="text-red-600 mr-2" /> 123 Street, City,
              Country
            </p>
            <p className="flex items-center justify-center text-zinc-300 mb-2">
              <FaPhone className="text-green-600 mr-2" /> +123 456 7890
            </p>
            <p className="flex items-center justify-center text-zinc-300">
              <FaEnvelope className="text-blue-600 mr-2" /> contact@company.com
            </p>
          </div>
          {/* Google Map */}
          <div className="rounded-lg overflow-hidden shadow-md w-full h-72 z-10">
            <iframe
              title="Google Map"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086163!2d144.95592831550453!3d-37.81720974202167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5775bb9cd7a4a99!2sYour%20Business%20Location!5e0!3m2!1sen!2us!4v1641234567890!5m2!1sen!2us"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

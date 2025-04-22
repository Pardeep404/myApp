import React, { useState, useEffect } from "react";
import { countries } from "country-codes-flags-phone-codes";

function Popup() {
  const [isVisible, setIsVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "IN",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const selectedCountry = countries.find((c) => c.code === formData.country);

  useEffect(() => {
    const hasSubmitted = localStorage.getItem("formSubmitted");
    if (hasSubmitted) return;

    const showPopup = () => {
      const closedTime = localStorage.getItem("popupClosedAt");
      const now = Date.now();
      if (!closedTime || now - Number(closedTime) > 30000) {
        setIsVisible(true);
      }
    };

    const firstTimer = setTimeout(showPopup, 15000);
    const interval = setInterval(showPopup, 30000);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("popupClosedAt", Date.now().toString());
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!formData.service) newErrors.service = "Please select a service";

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/popup-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        localStorage.setItem("formSubmitted", "true");

        setTimeout(() => {
          setIsVisible(false);
          setSubmitted(false);
        }, 3000);

        setFormData({
          name: "",
          email: "",
          country: "IN",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 relative">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900">
          Contact Us
        </h2>

        {submitted ? (
          <div className="text-center text-green-600 font-medium text-lg">
            Thank you! We'll be in touch soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div className="flex gap-2">
              <div className="flex items-center gap-1 bg-white border border-gray-300 rounded-lg px-2 py-1 w-40">
                {selectedCountry?.code ? (
                  <img
                    src={`https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png`}
                    alt={selectedCountry.name}
                    className="w-6 h-4 object-cover rounded-sm border border-gray-300"
                  />
                ) : (
                  <div className="w-6 h-4 bg-gray-200 rounded-sm" />
                )}

                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="text-sm bg-transparent focus:outline-none w-full"
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={selectedCountry?.dialCode || "Phone"}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}

            <div>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm bg-white"
              >
                <option value="">Select a service</option>
                <option value="SEO">SEO</option>
                <option value="Web Design & Development">
                  Web Design & Development
                </option>
                <option value="Social Media Marketing">
                  Social Media Marketing
                </option>
                <option value="PPC Advertising">PPC Advertising</option>
                <option value="Content Marketing">Content Marketing</option>
              </select>
              {errors.service && (
                <p className="text-red-500 text-xs mt-1">{errors.service}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none text-sm"
                placeholder="Your message"
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-indigo-600 text-white font-semibold py-2 rounded-lg transition-all duration-300 text-sm"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Popup;

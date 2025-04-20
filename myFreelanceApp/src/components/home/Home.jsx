import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import BannerImg1 from "../../assets/BannerImg1.jpg";
import imgOne from "../../assets/Data-Backed-Strategies.png";
import imgTwo from "../../assets/Expert-Analysts.png";
import imgThree from "../../assets/Custom-CRM-Solutions.png";
import imgFour from "../../assets/DAaaS1.png";
import imgFive from "../../assets/CRMSync1.png";
import imgSix from "../../assets/InsightOps1.png";
import ProfileImg1 from "../../assets/ProfileImg1.jpg";
import ProfileImg2 from "../../assets/ProfileImg2.jpg";
import ProfileImg3 from "../../assets/ProfileImg3.jpeg";

// Icons
import {
  CheckCircle,
  BarChart3,
  Settings,
  TrendingUp,
  Target,
  UserCheck,
  Mail,
  Calendar,
  Smartphone,
  Activity,
  AlertCircle,
} from "lucide-react";

// Data
const testimonials = [
  {
    name: "John Doe",
    text: "Working with this team was a pleasure. They delivered beyond expectations!",
    img: ProfileImg1,
  },
  {
    name: "Jane Smith",
    text: "Absolutely amazing service! I highly recommend them.",
    img: ProfileImg2,
  },
  {
    name: "Alex Johnson",
    text: "Professional and creative — loved the final product!",
    img: ProfileImg3,
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 1 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeInOut" },
};

function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-[Poppins]">
      {/* Hero */}
      <motion.section
        {...fadeUp}
        className="relative w-full min-h-[calc(100vh-64px)] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${BannerImg1})` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-xs dark:bg-black/70"></div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
          >
            Empower Your Business with Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
            className="text-lg md:text-xl max-w-xl mx-auto mb-6 text-gray-200"
          >
            Your trusted partner in structured data analytics and seamless CRM
            management.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            Get Started
          </motion.button>
        </div>
      </motion.section>

      {/* Why Choose Datalyst */}
      <motion.section
        {...fadeUp}
        className="py-16 bg-gradient-to-r from-blue-50 to-teal-100 dark:from-gray-800 dark:to-gray-700 px-4 sm:px-6 lg:px-8"
      >
        <motion.h2 className="text-4xl font-extrabold text-center mb-6">
          Why Choose Datalyst?
        </motion.h2>
        <motion.p className="text-lg text-center max-w-3xl mx-auto mb-12">
          We empower businesses with tailored data solutions, strategic
          insights, and expert guidance.
        </motion.p>

        {[
          {
            img: imgOne,
            title: "Data-Backed Strategies",
            desc: "Make smarter business decisions using deep data analysis...",
            points: [
              "Interactive dashboards for on-the-fly decision-making",
              "Predictive analytics to forecast trends",
              "Real-time performance tracking",
              "Custom data pipelines for consistent insights",
            ],
          },
          {
            img: imgTwo,
            title: "Expert Analysts",
            desc: "Our team consists of seasoned analysts with business acumen...",
            reverse: true,
            points: [
              "Domain experts across industries",
              "Certified professionals and statisticians",
              "In-depth competitor benchmarking",
              "Workshops to help you act on data",
            ],
          },
          {
            img: imgThree,
            title: "Custom CRM Solutions",
            desc: "Our CRM solutions are custom-built to enhance productivity...",
            points: [
              "Modules for lead tracking, invoicing, and client history",
              "Automation for follow-ups and reminders",
              "Integrations with WhatsApp, email, calendars",
              "Access from desktop, mobile, and cloud",
            ],
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            {...fadeUp}
            className={`flex flex-col ${
              feature.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-8 mb-16 max-w-6xl mx-auto hover:scale-[1.02] transition-transform duration-300`}
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="w-full md:w-1/2 max-h-[350px] rounded-xl shadow-lg object-cover"
            />
            <div className="md:w-1/2 text-start">
              <h3 className="text-3xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-lg mb-5">{feature.desc}</p>
              <ul className="space-y-3">
                {feature.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-base">
                    <CheckCircle className="text-teal-600 w-5 h-5 mt-1" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Core Offerings */}
      <motion.section
        {...fadeUp}
        className="py-16 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-4xl font-bold mb-12">Our Core Offerings</h2>
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "DAaaS",
              img: imgFour,
              desc: "Deploy expert analysts for business growth.",
              bullets: [
                [BarChart3, "Real-time dashboards and insights"],
                [Settings, "Custom KPIs and reporting structures"],
                [TrendingUp, "Trend forecasting & opportunity discovery"],
                [Target, "End-to-end data strategy consultation"],
              ],
            },
            {
              title: "CRMSync",
              img: imgFive,
              desc: "Optimize your CRM for better customer tracking.",
              bullets: [
                [UserCheck, "Custom dashboard and role-based access"],
                [Mail, "Automation of follow-ups, reports, and tasks"],
                [Calendar, "Third-party integrations"],
                [Smartphone, "Cloud-first design with mobile access"],
              ],
            },
            {
              title: "InsightOps",
              img: imgSix,
              desc: "Actionable insights for optimized operations.",
              bullets: [
                [Activity, "Operational analytics for real-time decisions"],
                [BarChart3, "Multi-department performance insights"],
                [AlertCircle, "Alerts for anomalies and KPI deviations"],
                [Target, "Business health monitoring dashboards"],
              ],
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all w-full lg:w-1/3 p-6 text-left"
            >
              <img
                src={card.img}
                alt={card.title}
                className="rounded-xl w-full h-56 object-contain mb-5"
              />
              <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
              <p className="mb-5 text-lg">{card.desc}</p>
              <ul className="space-y-4">
                {card.bullets.map(([Icon, label], i) => (
                  <li key={i} className="flex items-start gap-3 text-base">
                    <Icon className="text-teal-600 w-5 h-5 mt-1 shrink-0" />
                    {label}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        {...fadeUp}
        className="py-16 bg-gradient-to-r from-blue-100 to-teal-50 dark:from-gray-800 dark:to-gray-700 px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="px-4"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 text-center max-w-md mx-auto">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-gray-700 dark:text-gray-200 italic mb-3">
                  "{testimonial.text}"
                </p>
                <h4 className="text-lg font-semibold">{testimonial.name}</h4>
              </div>
            </motion.div>
          ))}
        </Slider>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        {...fadeUp}
        className="bg-gray-900 text-white py-16 text-center px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl font-bold mb-4">
          Ready to Elevate Your Business?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Connect with our experts today and unlock the full potential of your
          data and CRM systems.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-indigo-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
        >
          Schedule a Free Consultation
        </motion.button>
      </motion.section>
      <hr />
    </div>
  );
}

export default Home;

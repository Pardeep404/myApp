import React from "react";
import { motion } from "framer-motion";
import { FaDatabase, FaCog } from "react-icons/fa";

function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative container mx-auto max-w-8xl px-4 py-10 flex flex-col items-center bg-white dark:bg-gray-900 font-[Poppins]"
    >
      <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-7">
        Services
      </h2>
      {/* Services Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl gap-8 w-full">
        {/* DAaaS Service */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-colors"
        >
          <FaDatabase className="text-5xl text-blue-600 dark:text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Data Analyst as a Service (DAaaS)
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We deploy expert data analysts to study your business, conduct
            market research, analyze operations, and provide actionable
            insights.
          </p>
          <div className="text-gray-700 dark:text-gray-300 space-y-2">
            <p>📊 Market research & competitor analysis</p>
            <p>📈 Custom dashboards & reports</p>
            <p>⚙️ Scalable and flexible solutions</p>
          </div>
        </motion.div>

        {/* CRMSync Service */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-colors"
        >
          <FaCog className="text-5xl text-green-600 dark:text-green-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            CRMSync - CRM Setup & Optimization
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Our team helps businesses set up, organize, and optimize CRM systems
            for better client data management and streamlined operations.
          </p>
          <div className="text-gray-700 dark:text-gray-300 space-y-2">
            <p>🛠️ CRM setup for startups & businesses</p>
            <p>🔗 Automated sales pipelines & lead tracking</p>
            <p>🔄 Seamless integration with existing tools</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Services;

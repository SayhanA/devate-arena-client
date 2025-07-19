import ActiveDebatesSvg from "@/assets/svgs/ActiveDebatesSvg";
import ClockSvg from "@/assets/svgs/ClockSvg";
import UsersSvg from "@/assets/svgs/UsersSvg";
import React from "react";

const StatsSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center">
            <ActiveDebatesSvg />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              1,247
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Active Debates</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center">
            <UsersSvg />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              15,892
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Community Members
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center">
            <ClockSvg />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              89,456
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Arguments Posted</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

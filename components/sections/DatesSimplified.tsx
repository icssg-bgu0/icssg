import React from "react";

export function DatesSimplified() {
  return (
    <section id="dates" className="py-16 bg-gray-50 border-t border-b border-gray-200">
      <div className="container-custom">
        <h2 className="section-title text-center mb-12">Tentative Important Dates</h2>
        
        <div className="max-w-2xl mx-auto pmec-card bg-white">
          <ul className="space-y-4 text-gray-700">
            <li className="flex flex-col sm:flex-row sm:justify-between pb-3 border-b border-gray-100">
              <span className="font-medium">Call for Papers Close:</span>
              <span className="font-bold text-[#337ab7]">02.11.2026</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:justify-between pb-3 border-b border-gray-100">
              <span className="font-medium">Notification of Acceptance:</span>
              <span className="font-bold text-[#337ab7]">09.01.2027</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:justify-between pb-3 border-b border-gray-100">
              <span className="font-medium">Registration and Submission of Revised Paper Deadline:</span>
              <span className="font-bold text-[#337ab7]">13.02.2027</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:justify-between pt-2">
              <span className="font-medium">Conference Dates:</span>
              <span className="font-bold text-lg text-[#337ab7]">12th and 13th March 2027</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

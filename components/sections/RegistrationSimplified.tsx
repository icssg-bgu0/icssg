import React from "react";

export function RegistrationSimplified() {
  return (
    <section id="registration" className="py-16 bg-white border-b border-gray-200">
      <div className="container-custom">
        <h2 className="section-title text-center mb-12">Registration</h2>
        
        <div className="max-w-4xl mx-auto mb-12 text-center bg-blue-50 p-6 rounded-lg border-l-4 border-[#337ab7]">
          <p className="text-lg font-semibold text-[#337ab7]">
            Registration link will be Provided later
          </p>
        </div>

        <div className="max-w-4xl mx-auto pmec-card overflow-x-auto bg-white">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-[#f5f5f5] text-[#337ab7]">
                <th className="p-4 border-b border-gray-200 font-bold whitespace-nowrap">Participant Category</th>
                <th className="p-4 border-b border-gray-200 font-bold text-right whitespace-nowrap">Indian (INR ₹)</th>
                <th className="p-4 border-b border-gray-200 font-bold text-right whitespace-nowrap">International (USD $)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-800">Industry</td>
                <td className="p-4 text-right text-gray-600">₹10,000</td>
                <td className="p-4 text-right text-gray-600">$120</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-800">Academician / Scientist</td>
                <td className="p-4 text-right text-gray-600">₹6,000</td>
                <td className="p-4 text-right text-gray-600">$100</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-800">Scholar / Student</td>
                <td className="p-4 text-right text-gray-600">₹5,000</td>
                <td className="p-4 text-right text-gray-600">$80</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-800">Listeners</td>
                <td className="p-4 text-right text-gray-600">₹1,000</td>
                <td className="p-4 text-right text-gray-600">$20</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

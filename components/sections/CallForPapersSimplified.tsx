import React from "react";

export function CallForPapersSimplified() {
  return (
    <section id="call-for-papers" className="py-16 bg-gray-50 border-t border-b border-gray-200">
      <div className="container-custom">
        <h2 className="section-title text-center mb-12">Call for Papers</h2>
        
        <div className="max-w-4xl mx-auto text-gray-700 bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200">
          
          <h3 className="text-xl font-bold text-[#337ab7] mb-4 border-b pb-2">Guidelines to Follow for Submission</h3>
          <ul className="list-disc pl-5 space-y-2 mb-8">
            <li>All manuscripts must adhere to the standard Springer conference template (template available at <a href="https://www.springernature.com/gp/authors/publish-a-book/step-by-step-conference-proceedings" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Template Link</a>) and be formatted according to Springer style. Full papers are limited to a maximum of 15 pages, including references, using this template.</li>
            <li>Author information must be excluded from the submitted manuscript to ensure a DOUBLE-BLIND review process; however, author details must be provided in the CMT submission form.</li>
            <li>Submissions are accepted exclusively via the Microsoft CMT portal. At this stage, the submission file must be in PDF format either from LaTeX or Word</li>
            <li>The similarity index must be below 15%. AI-generated content is not allowed. All references must be cited within the text, and unnecessary self-citations must be avoided. A minimum of five keywords must be included in the manuscript.</li>
            <li>Papers not conforming to the publisher’s guidelines will be rejected.</li>
            <li>Papers will be evaluated based on originality and technical depth.</li>
            <li>Acceptance decisions will be communicated via email.</li>
            <li>Camera-ready papers must strictly follow reviewer comments. No addition, removal, or modification of author information will be permitted at the camera-ready stage.</li>
            <li>A Paper Presentation Certificate will be awarded in each session. The best paper in each session will be recognized.</li>
            <li>Some authors may be invited to serve as reviewers for other submissions, provided they meet the reviewer eligibility criteria and have no conflict of interest with those submissions.</li>
          </ul>

          <div className="bg-blue-50 p-4 rounded-md border-l-4 border-[#337ab7] mb-8 space-y-2">
            <p className="font-medium text-gray-800">
              CMT Paper Submission Link: <span className="font-bold text-[#337ab7]">To be Updated Soon</span>
            </p>
          </div>

          <p className="mb-6">
            If you encounter any issues during paper submission, feel free to contact us at: <a href="mailto:icssg.ai@bgu.ac.in" className="text-blue-600 hover:underline">icssg.ai@bgu.ac.in</a>
          </p>


        </div>
      </div>
    </section>
  );
}

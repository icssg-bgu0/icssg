import React from "react";

const tracks = [
  {
    title: "1. AI & Big Data: Intelligent Systems and Data-Driven Innovation",
    points: [
      "Machine learning, deep learning, and neural networks",
      "Explainable, interpretable, and trustworthy AI",
      "Big data analytics, data mining, and visualization",
      "Large-scale and real-time data processing",
      "Data governance, privacy, and security",
      "Bias, fairness, and responsible data use",
      "AI applications in healthcare, finance, education, and governance",
      "Decision support systems and intelligent automation"
    ]
  },
  {
    title: "2. Smart Systems: Intelligent Technologies for a Smart Future",
    points: [
      "Smart cities and intelligent infrastructure",
      "Internet of Things (IoT) and sensor networks",
      "Cyber-physical systems and embedded intelligence",
      "Edge, fog, and cloud computing",
      "Robotics and autonomous systems",
      "Digital twins and simulation models",
      "Energy-efficient and resilient system design",
      "Human-in-the-loop and adaptive systems"
    ]
  },
  {
    title: "3. Sustainability: Technology for Long-Term Environmental and Social Impact",
    points: [
      "AI for climate change modeling and mitigation",
      "Environmental monitoring and resource optimization",
      "Renewable energy and smart energy systems",
      "Sustainable supply chains and circular economy",
      "Impact assessment and sustainability metrics",
      "Green computing and energy-aware AI",
      "Social sustainability and inclusive development",
      "Technology for achieving Sustainable Development Goals (SDGs)"
    ]
  },
  {
    title: "4. Governance & Policy: Ethics, Regulation, and Responsible Innovation",
    points: [
      "Ethical AI and responsible innovation frameworks",
      "Algorithmic transparency and accountability",
      "AI regulation, standards, and compliance",
      "Data protection, privacy, and cybersecurity laws",
      "Risk assessment and governance models",
      "Public policy and digital governance",
      "Legal challenges of AI and emerging technologies",
      "Trust, explainability, and public acceptance of AI"
    ]
  },
  {
    title: "5. Multidisciplinary & Societal Applications",
    points: [
      "AI and digital transformation in business and management",
      "Intelligent systems in commerce and economics",
      "AI applications in law, justice, and public administration",
      "Social, cultural, and behavioral impacts of technology",
      "Human-centric design and user experience",
      "Education, skill development, and future workforce",
      "Technology, ethics, and philosophy",
      "Interdisciplinary case studies and best practices"
    ]
  }
];

export function TracksSimplified() {
  return (
    <section id="tracks" className="py-16 bg-gray-50 border-t border-b border-gray-200">
      <div className="container-custom">
        <h2 className="section-title">Conference Tracks</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tracks.map((track, idx) => (
            <div key={idx} className="pmec-card hover:border-[#337ab7]/30 transition-colors">
              <h3 className="font-bold text-[#337ab7] text-xl mb-4">{track.title}</h3>
              <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
                {track.points.map((point, pIdx) => (
                  <li key={pIdx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

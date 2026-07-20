import React from "react";
import { ChevronRight } from "lucide-react";

type Member = { name: string; desc: string };
type Category = { title: string; members: Member[] };

const committeeData: Category[] = [
  {
    title: "Patron",
    members: [
      { name: "Prof. Kulbhusan Balooni", desc: "Vice Chancellor, Birla Global University, Bhubaneswar" }
    ]
  },
  {
    title: "General Chair",
    members: [
      { name: "Prof. Bibhudatta Sahoo", desc: "Professor, Computer Science and Engineering, NIT Rourkela, Odisha, India" }
    ]
  },
  {
    title: "Program Chair",
    members: [
      { name: "Prof. Srinivas Sethi", desc: "Professor, Indira Gandhi Institute of Technology, Sarang, Odisha, India" },
      { name: "Prof. Mufti Mahmud", desc: "Professor, King Fahd University of Petroleum and Minerals, Saudi Arabia, NTU, UK" },
      { name: "Dr. Sanjay Kumar Kuanar", desc: "Dean, School of Engineering & Technology, Birla Global University, Bhubaneswar, Odisha, India" }
    ]
  },
  {
    title: "Conveners",
    members: [
      { name: "Dr. Ramesh Kumar Sahoo", desc: "School of Engineering and Technology, BGU, Bhubaneswar" },
      { name: "Dr. Indrajeet Kumar", desc: "School of Engineering and Technology, BGU Bhubaneswar" },
      { name: "Dr. Bandita Sahu", desc: "School of Engineering & Technology, BGU, Bhubaneswar" }
    ]
  },
  {
    title: "Tutorial Chair",
    members: [
      { name: "Dr. Alok Kumar Pani", desc: "School of Engineering & Technology, BGU, Bhubaneswar" },
      { name: "Dr. Manaswini Jena", desc: "School of Engineering and Technology, BGU Bhubaneswar" },
      { name: "Dr. Arun Kumar", desc: "NIT Rourkela" }
    ]
  },
  {
    title: "Publicity Chairs",
    members: [
      { name: "Prof. Archana Chaudhary", desc: "School of Management, BGU Bhubaneswar" },
      { name: "Prof. Ashima Rout", desc: "IGIT Sarang" },
      { name: "Dr. Rajendra Prasad Nayak", desc: "GCE, Kalahandi" },
      { name: "Dr. Satvik Vats", desc: "Madan Mohan Malaviya University of Technology, Gorakhpur" },
      { name: "Dr. Piyush Gupta", desc: "School of Management, BGU Bhubaneswar" },
      { name: "Dr. Brojo Kishore Mishra", desc: "NIST Berhampur" },
      { name: "Dr. Raghvendra Kumar", desc: "GIET University Gunupur" },
      { name: "Dr. Suvendu Ku Pratihari", desc: "School of Management, BGU Bhubaneswar" },
      { name: "Dr. Gyanaranjan Mishra", desc: "School of Communication, BGU Bhubaneswar" }
    ]
  },
  {
    title: "Finance Chairs",
    members: [
      { name: "Dr. Bichitrananda Behera", desc: "School of Engineering & Technology, BGU, Bhubaneswar" },
      { name: "Dr. Parimal Kumar", desc: "School of Management, BGU Bhubaneswar" },
      { name: "Dr. Nandita Bhattacharjee", desc: "School of Commerce, BGU, Bhubaneswar" },
      { name: "Prof. Prithivi Raj", desc: "School of Law, BGU, Bhubaneswar" }
    ]
  },
  {
    title: "Hospitality Chairs",
    members: [
      { name: "Dr. Manaswini Jena", desc: "School of Engineering & Technology, BGU Bhubaneswar" },
      { name: "Dr. Pruthiranjan Dwibedi", desc: "School of Commerce, BGU Bhubaneswar" },
      { name: "Dr. Mehul Agarwal", desc: "School of Communication, BGU Bhubaneswar" },
      { name: "Dr. Saswati Tripathy", desc: "School of Management, BGU Bhubaneswar" },
      { name: "Mr. Swagat Dash", desc: "School of Law, BGU Bhubaneswar" }
    ]
  },
  {
    title: "Logistic Chairs",
    members: [
      { name: "Dr. Snigdha Mohapatra", desc: "School of Management, BGU Bhubaneswar" },
      { name: "Dr. Aswini Kumar Bhuyan", desc: "School of Commerce, BGU Bhubaneswar" },
      { name: "Ms. Lopamudra Nayak", desc: "School of Commerce, BGU Bhubaneswar" },
      { name: "Dr. Bichitrananda Behera", desc: "School of Engineering & Technology, BGU, Bhubaneswar" },
      { name: "Mr. Bhabanisankar Nayak", desc: "School of Engineering & Technology, BGU, Bhubaneswar" },
      { name: "Mr. Abhinash Ray", desc: "School of Engineering & Technology, BGU, Bhubaneswar" }
    ]
  },
  {
    title: "Accommodation Chairs",
    members: [
      { name: "Dr. Alok Kumar Pani", desc: "School of Engineering & Technology, BGU, Bhubaneswar" },
      { name: "Dr. Purnendu Kumar Patra", desc: "School of Management, BGU Bhubaneswar" },
      { name: "Dr. Ricky Mohanty", desc: "School of Management, BGU, Bhubaneswar" },
      { name: "Dr. Barsha Nibedita", desc: "School of Economics, BGU, Bhubaneswar" },
      { name: "Dr. Vivek Mishra", desc: "School of Management, BGU, Bhubaneswar" }
    ]
  },
  {
    title: "Organizing Committee",
    members: [
      { name: "Prof. Parameswar Nayak", desc: "Dean, School of Management, BGU Bhubaneswar" },
      { name: "Prof. Pradipta Kumar Sanyal", desc: "Dean, School of Commerce, BGU Bhubaneswar" },
      { name: "Prof. Sukanta Kumar Nanda", desc: "Dean, School of Law, BGU Bhubaneswar" },
      { name: "Dr. Shiv Shankar Das", desc: "Dean, Birla School of Communication, BGU Bhubaneswar" },
      { name: "Dr. Ajit Kumar Dash", desc: "Dean, School of Economics, BGU Bhubaneswar" },
      { name: "Prof. Anubha Ray", desc: "Dean, Alumni & Student Affairs, BGU Bhubaneswar" },
      { name: "Prof. Archana Choudhary", desc: "Dean, Research & Development, BGU Bhubaneswar" },
      { name: "Dr. Satyakama Mishra", desc: "Dean, Outreach & International Affairs, BGU Bhubaneswar" },
      { name: "Dr. Manas Kumar Pal", desc: "Controller of Examination, BGU Bhubaneswar" },
      { name: "Dr. Alok Kumar Pani", desc: "School of Engineering & Technology, BGU, Bhubaneswar" },
      { name: "Dr. Bichitrananda Behera", desc: "School of Engineering and Technology, BGU, Bhubaneswar" },
      { name: "Dr. Manaswini Jena", desc: "School of Engineering and Technology, BGU Bhubaneswar" },
      { name: "Dr. Manidatta Ray", desc: "School of Management, BGU Bhubaneswar" },
      { name: "Dr. Mitashree Tripathy", desc: "School of Law, BGU Bhubaneswar" },
      { name: "Dr. Radha Krishna Mishra", desc: "School of Commerce, BGU Bhubaneswar" }
    ]
  },
  {
    title: "Technical Program Committee",
    members: [
      { name: "Prof. Gheorghita (George) Ghinea", desc: "Brunel University" },
      { name: "Prof. Kumar Padmanabh", desc: "EBTIC (a research lab of British Telecom)" },
      { name: "Prof. Deepak Tosh", desc: "University of Texas at El Paso" },
      { name: "Prof. Haesik Kim", desc: "VTT Technical Research Centre, Finland" },
      { name: "Prof. Soroj Meher", desc: "ISI, Bangalore, India" },
      { name: "Prof. Manas Ranjan Patra", desc: "NIST University, Berhampur, India" },
      { name: "Prof. Siba Kumar Udgata", desc: "University of Hyderabad, India" },
      { name: "Prof. O B V Ramanaiah", desc: "JNTU Hyderabad, India" },
      { name: "Prof. G. Suvarna Kumar", desc: "MVGRCE, Vijayanagaram, India" },
      { name: "Prof. G. Sandhya", desc: "MVGRCE, Vijayanagaram, India" },
      { name: "Prof. R Hemalatha", desc: "University College of Engineering, Osmania University, India" },
      { name: "Prof. Amit Kumar Mishra", desc: "University of Capetown , South Africa" },
      { name: "Prof. R. Thangarajan", desc: "Kongu Engineering College, Tamilnadu, India" },
      { name: "Prof. Birendra Biswal", desc: "Gayatri Vidya Parishad College of Engineering, Vishakhapatnam, India" },
      { name: "Prof. Somanath Tripathy", desc: "IIT Patna, India" },
      { name: "Prof. A. K. Turuk", desc: "NIT Rourkela, India" },
      { name: "Prof. D. P. Mohapatra", desc: "NIT, Rourkela, India" },
      { name: "Prof. P. M. Khilar", desc: "NIT, Rourkela, India" },
      { name: "Prof. P G Sapna", desc: "CIT, Coimbatore, India" },
      { name: "Prof. R K Dash", desc: "NIC, Mizoram, India" },
      { name: "Prof. B K Tripathy", desc: "VIT, Vellore, India" },
      { name: "Prof. Moumita Patra", desc: "IIT, Guwahati, India" },
      { name: "Prof. Ram Kumar Dhurkari", desc: "IIM, Sirmaur, Himachal Pradesh, India" },
      { name: "Prof. Chitta Ranja Hota", desc: "BITS Pilani,Hyderabad, India" },
      { name: "Prof. A. Kavitha", desc: "JNTU, Hyderabad, India" },
      { name: "Prof. Subasish Mohapatra", desc: "CET, Bhubaneswar, India" },
      { name: "Prof. Sanjaya Kumar Panda", desc: "NIT, Warangal, India" },
      { name: "Prof. S. Mini", desc: "NIT, Goa, India" },
      { name: "Prof. S. Nagender Kumar", desc: "University of Hyderabad, India" },
      { name: "Prof. Lalit Garg", desc: "University of Malta, Malta" },
      { name: "Prof. Lalitha Krishna", desc: "Kongu Engineering College, Tamilnadu, India" },
      { name: "Prof. C. Poongodi", desc: "Kongu Engineering College, Tamilnadu, India" },
      { name: "Prof. Sumanth Yenduri", desc: "Kennesaw University, USA" },
      { name: "Prof. Shaik Shakeel Ahamad", desc: "Majmaah University, Saudi Arabia" },
      { name: "Prof. K. Srujan Raju", desc: "CMR Technical Campus, Hyderabad, India" },
      { name: "Prof. R. Hemalatha", desc: "University College of Engineering, Osmania University, Hyderabad, India" },
      { name: "Prof. P. Sakthivel", desc: "Anna University, India" },
      { name: "Prof. Pavan Kumar Mishra", desc: "NIT, Raipur, India" },
      { name: "Prof. Tapan Kumar Gandhi", desc: "Dept. of Electrical Engineering, IIT, Delhi, India" },
      { name: "Prof. Annappa B.", desc: "NIT, Surathkal, India" },
      { name: "Prof. Prafulla Kumar Behera", desc: "Utkal University, Bhubaneswar, Odisa, India" },
      { name: "Prof. Nekuri Naveen", desc: "School of Computer and Information Sciences, University of Hyderabad, India" },
      { name: "Prof. Ch. Venkaiah", desc: "School of Computer and Information Sciences, University of Hyderabad, India" },
      { name: "Prof. Rajendra Lal", desc: "School of Computer and Information Sciences, University of Hyderabad, India" },
      { name: "Prof. Dillip Singh Sisodia", desc: "Department of Computer Science and Engineering,NIT, Raipur, India" },
      { name: "Prof. Pradeep Singh", desc: "Department of Computer Science and Engineering, NIT, Raipur, India" },
      { name: "Prof. Jay Bagga", desc: "Ball State University, USA" },
      { name: "Prof. Sumagna Patnaik", desc: "JB Institute of Engineering and Technology, Hyderabad, India" },
      { name: "Prof. Ajit K Sahoo", desc: "University of Hyderabad, India" },
      { name: "Prof. Atluri Rahul", desc: "Neurolus Systems, Hyderabad, India" },
      { name: "Prof. Samrat L Sabat", desc: "Center for Advanced Studies in Electronic Science and Technology (CASEST), University of Hyderabad, India" },
      { name: "Prof. Nihar Satapathy", desc: "Sambalpur University, India" },
      { name: "Prof. Susil Kumar Mohanty", desc: "Computer Science and Enginering, IIT, Patna, India" },
      { name: "Prof. Kagita Venkat", desc: "NIT, Warangal, India" },
      { name: "Prof. Sanjay Kuanar", desc: "Birla Global University, Bhubaneswar, India" },
      { name: "Prof. Bhabendra Biswal", desc: "College of Engineering, Bhubaneswar, India" },
      { name: "Prof. Padmalaya Nayak", desc: "GR Institute of Engineering and Technology, Hyderabad, India" },
      { name: "Prof. Bhibudendu Pati", desc: "R.D Womens University, Bhubaneswar, India" },
      { name: "Prof. Chabi Rani Panigrahi", desc: "R.D Womens University, Bhubaneswar, India" },
      { name: "Prof. Rajesh Verma", desc: "Infosys Ltd, Hyderabad, India" },
      { name: "Prof. Arun Avinash Chauhan", desc: "School of Computer and Information Sciences, University of Hyderabad, India" },
      { name: "Prof. Khusbu Pahwa", desc: "Delhi Technological University, New Delhi, India" },
      { name: "Prof. Soumen Roy", desc: "DRDL, Hyderabad, India" },
      { name: "Prof. Satyajit Acharya", desc: "Tech Mahindra, Hyderabad, India" },
      { name: "Prof. Subhrakanta Panda", desc: "BITs Pilani, Hyderabad, India" },
      { name: "Prof. Vineet P Nair", desc: "School of Computer and Information Sciences, University of Hyderabad, India" },
      { name: "Prof. Subash Yadav", desc: "Department of Computer Science,Central University of Jharkhand, Ranchi, India" },
      { name: "Prof. Layak Ali", desc: "Central University Karnataka, Gulbarga, India" },
      { name: "Prof. Deepak Kumar", desc: "NIT, Meghalaya, India" },
      { name: "Prof. Bunil Balabantaray", desc: "NIT, Meghalaya, India" },
      { name: "Prof. Sumanta pyne", desc: "NIT, rourkela, India" },
      { name: "Prof. Asis Tripathy", desc: "VIT, Vellore, India" },
      { name: "Prof. Mousumi Saha", desc: "NIT, Durgapur, India" },
      { name: "Prof. Abhijit Sharma", desc: "NIT, Durgapur, India" },
      { name: "Prof. Mayukh Sarkar", desc: "MNNIT, Allahabad, India" },
      { name: "Prof. Oishila Bandyopadhyay", desc: "IIIT, Kalayani, India" },
      { name: "Prof. Subrat kumar Mohanty", desc: "IIIT, Bhubaneswar, India" },
      { name: "Prof. Ramesh Chandra Mishra", desc: "IIIT, Manipur, India" },
      { name: "Prof. Hirak Maity", desc: "Kolaghat Engineering College, India" },
      { name: "Prof. Sandeep kumar panda", desc: "ICFAI, Hyderabad, India" },
      { name: "Prof. Ashim Rout", desc: "IGIT, Sarang, India" },
      { name: "Dr. Tarun Kumar Sharma", desc: "Shobhit University" },
      { name: "Prof. Srinivas Sethi", desc: "IGIT, Sarang, India" },
      { name: "Prof. S. N. Mishra", desc: "IGIT, Sarang, India" },
      { name: "Dr. Piyush Gupta", desc: "School of Management, BGU, Bhubaneswar" },
      { name: "Dr. Sruthi Rajan", desc: "School of Communication, BGU, Bhubaneswar" },
      { name: "Dr. Mitashree Tripathy", desc: "School of Law, BGU, Bhubaneswar" },
      { name: "Prof. Sanjaya Patra", desc: "IGIT, Sarang, India" },
      { name: "Prof. Biswanath Sethi", desc: "IGIT, Sarang, India" },
      { name: "Prof. Niroj Pani", desc: "IGIT, Sarang, India" },
      { name: "Prof. Dillip Kumar Swain", desc: "IGIT, Sarang, India" },
      { name: "Prof. B. P. Panigrahy", desc: "IGIT, Sarang, India" },
      { name: "Prof. Rabindra Behera", desc: "IGIT, Sarang, India" },
      { name: "Prof. L. N. Tripathy", desc: "OUTR, Bhubaneswar, India" },
      { name: "Prof. B. B. Choudhary", desc: "IGIT, Sarang, India" },
      { name: "Prof. Dhiren Behera", desc: "IGIT, Sarang, India" },
      { name: "Prof. Anand Gupta", desc: "IGIT, Sarang, India" },
      { name: "Prof. Ayaskanta Swain", desc: "NIT, Rourkela, India" },
      { name: "Prof. Debasis Mohapatra", desc: "PMEC, Berhampur, India" },
      { name: "Prof. S. K.Tripathy", desc: "IGIT, Sarang, India" },
      { name: "Prof. Devi Acharya", desc: "VIT, vellore, India" },
      { name: "Prof. Sourav Kumar Bhoi", desc: "PMEC, Berhampur, India" },
      { name: "Prof. Kalyan Kumar Jena", desc: "PMEC, Berhampur, India" },
      { name: "Prof. Alok Ranjan Prusty", desc: "Skill Development, Delhi, India" },
      { name: "Prof. Babita Majhi", desc: "GGU, Chatisgarh, India" },
      { name: "Prof. Subhrashu Das", desc: "GCE, Keunjhar, India" },
      { name: "Prof. Manoj Kumar Sahu", desc: "Associate Professor, CUPGS, BPUT, Odisha, Rourkela" },
      { name: "Prof. Puspalata Pujahari", desc: "GGU, Chatisgarh, India" },
      { name: "Prof. Tirimula Rao", desc: "JNTU, Kakinada, India" },
      { name: "Prof. Kshirsagar Sahoo", desc: "VIT, AP, India" },
      { name: "Prof. Niranjan Panigrahi", desc: "PMEC, Berhampur, India" },
      { name: "Prof. Trilochan Rout", desc: "PMEC, Berhampur, India" },
      { name: "Prof. P K Panigrahy", desc: "GIET, Gunupur, India" },
      { name: "Prof. Mihir Kumar Sutar", desc: "VSSUT, Burla, India" },
      { name: "Prof. Gopal Behera", desc: "GCE, Kalahandi, India" },
      { name: "Prof. Rajendra Prasad Nayak", desc: "GCE, Kalahandi, India" },
      { name: "Prof. Kaliprasan Sethi", desc: "GCE, Kalahandi, India" },
      { name: "Prof. Debabrata Dansana", desc: "Rajendra University, Balangir, India" },
      { name: "Prof. SGK Patro", desc: "Woxsen University, India" },
      { name: "Prof. Saroj Kumar Panigrahi", desc: "VIT, AP, India" },
      { name: "Prof. Manoj Kumar Muni", desc: "IGIT, Sarang, India" },
      { name: "Prof. Jitendra Kumar Rout", desc: "NIT, Raipur, India" },
      { name: "Prof. Rashmi Ranjan Sahoo", desc: "PMEC, Berhampur, India" },
      { name: "Prof. Suryalok Dash", desc: "PMEC, Berhampur, India" },
      { name: "Prof. Saroj Padhan", desc: "PMEC, Berhampur, India" },
      { name: "Prof. Suvendra Kumar Jayasingh", desc: "IMIT, Cuttack, India" },
      { name: "Dr. Arun Kumar", desc: "NIT Rourkela" }
    ]
  }
];

export function CommitteeSimplified() {
  return (
    <section id="committee" className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center mb-12">COMMITTEE Members</h2>
        
        <div className="space-y-12">
          {committeeData.map((category, idx) => (
            <div key={idx} className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-2 mb-6">
                {category.title}
              </h3>
              
              <ul className="ekit-stylish-list grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.members.map((member, mIdx) => (
                  <li key={mIdx} className="ekit-stylish-list-content-wrapper shadow-sm">
                    <div className="ekit-stylish-list-content-icon">
                      <ChevronRight size={20} />
                    </div>
                    <div className="ekit-stylish-list-content-text">
                      <span className="ekit-stylish-list-content-title">{member.name}</span>
                      <span className="ekit-stylish-list-content-description">{member.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

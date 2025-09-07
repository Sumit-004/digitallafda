import React from 'react'

const Team = () => {
  const team = [
    { name: "John Doe", role: "Developer", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Jane Smith", role: "Designer", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Michael Lee", role: "Project Manager", img: "https://randomuser.me/api/portraits/men/75.jpg" },
    { name: "Sophia Brown", role: "UI/UX", img: "https://randomuser.me/api/portraits/women/65.jpg" },
    { name: "Chris Evans", role: "Backend Dev", img: "https://randomuser.me/api/portraits/men/12.jpg" },
    { name: "Emily Davis", role: "Frontend Dev", img: "https://randomuser.me/api/portraits/women/22.jpg" },
    { name: "Daniel Wilson", role: "Tester", img: "https://randomuser.me/api/portraits/men/5.jpg" },
    { name: "Olivia Johnson", role: "Marketing", img: "https://randomuser.me/api/portraits/women/10.jpg" },
    { name: "Robert Miller", role: "DevOps", img: "https://randomuser.me/api/portraits/men/47.jpg" },
    { name: "Emma Taylor", role: "Content Lead", img: "https://randomuser.me/api/portraits/women/29.jpg" },
  ]

  return (
    <div className="w-full md:mt-27 mt-25">
      {/* Header */}
      <div className="px-6 md:px-40 py-10 md:py-16 flex flex-col md:flex-row items-center gap-8 md:gap-10">
        <div className="md:w-1/2 text-center md:text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Our Team</h1>
        </div>
        <div className="md:w-1/2 text-gray-700 text-base md:text-lg leading-relaxed text-center md:text-left px-2 md:px-0">
          <p>
            The visionaries behind our work thrive on bold ideas and late-night
            brainstorming over endless cups of coffee. For us, every project is
            more than a task—it’s an opportunity to craft experiences that leave a
            lasting mark.
          </p>
        </div>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-10 px-6 md:px-40 pb-10 md:pb-20">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-64 md:h-72 overflow-hidden">
              <img
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                src={member.img}
                alt={member.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-xl md:text-2xl font-bold">{member.name}</h2>
                <p className="text-xs md:text-sm text-gray-200">{member.role}</p>
              </div>
            </div>

            {/* Info */}
            <div className="p-4 md:p-5 text-gray-700 text-sm md:text-base">
              <p>
                Blood Group: Selling, Customer Delight, Entrepreneurship, Old
                Bollywood Songs, Cycling and Talking.  
                Weapons: Phone, Client Emails, Sense of Humour, Killer Beard,
                Bollywood Movie Situations, etc.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team

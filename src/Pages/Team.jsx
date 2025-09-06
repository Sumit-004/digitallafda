// import React from 'react'
// import img from '../assets/company1.jpeg'

// const Team = () => {

//   const team = [
//   { name: "John Doe", role: "Developer", img: "https://randomuser.me/api/portraits/men/32.jpg" },
//   { name: "Jane Smith", role: "Designer", img: "https://randomuser.me/api/portraits/women/44.jpg" },
//   { name: "Michael Lee", role: "Project Manager", img: "https://randomuser.me/api/portraits/men/75.jpg" },
//   { name: "Sophia Brown", role: "UI/UX", img: "https://randomuser.me/api/portraits/women/65.jpg" },
//   { name: "Chris Evans", role: "Backend Dev", img: "https://randomuser.me/api/portraits/men/12.jpg" },
//   { name: "Emily Davis", role: "Frontend Dev", img: "https://randomuser.me/api/portraits/women/22.jpg" },
//   { name: "Daniel Wilson", role: "Tester", img: "https://randomuser.me/api/portraits/men/5.jpg" },
//   { name: "Olivia Johnson", role: "Marketing", img: "https://randomuser.me/api/portraits/women/10.jpg" },
//   { name: "Robert Miller", role: "DevOps", img: "https://randomuser.me/api/portraits/men/47.jpg" },
//   { name: "Emma Taylor", role: "Content Lead", img: "https://randomuser.me/api/portraits/women/29.jpg" },
// ];


//   return (
//     <div className='w-full mt-35'>
//       <div className='px-40 py-20 flex '>
//         <div className='w-[50%] flex justify-center'>
//           <h1 className='text-6xl font-bold'>Our Team</h1>
//         </div>
//         <div className='w-[50%] '>
//           <p className='text-xl'>The visionaries behind our work thrive on bold ideas and late-night brainstorming over endless cups of coffee. For us, every project is more than a task—it’s an opportunity to craft experiences that leave a lasting mark. With passion as our fuel and innovation as our compass, we’ve turned ambitious goals into proud milestones, always raising the bar of creativity and client delight.</p>
//         </div>
//       </div>

//       {/* Team  */}
//       <div className='flex flex-wrap px-20 justify-center gap-10 mb-20'>
//         {team.map((team) => (<div className='h-[80vh] w-90 overflow-hidden border'>
//           <div className='w-full h-75'>
//             <img className='w-full h-full' src={team.img} alt="" />
//           </div>
//           <div className='flex flex-col gap-3 px-3'>
//             <div className='flex flex-col gap-2 py-3'>
//               <span className='text-3xl font-bold'>{team.name}</span>
//               <p className='text-xl text-gray-600'>{team.role}</p>
//             </div>
//             <div className=''>
//               <p>Blood Group: Selling, Customer Delight, Entrepreneurship, Old Bollywood Songs, Cycling and Talking.Weapons: Phone, Client Emails, Sense of Humour, Killer Beard, Bollywood Movie Situations, etc.</p>
//             </div>
//           </div>
//         </div>))}
//       </div>
//     </div>
//   )
// }

// export default Team
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
    <div className="w-full mt-20">
      {/* Header */}
      <div className="px-40 py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">Our Team</h1>
        </div>
        <div className="md:w-1/2 text-gray-700 text-lg leading-relaxed">
          <p>
            The visionaries behind our work thrive on bold ideas and late-night
            brainstorming over endless cups of coffee. For us, every project is
            more than a task—it’s an opportunity to craft experiences that leave a
            lasting mark.
          </p>
        </div>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 px-40 pb-20">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-72 overflow-hidden">
              <img
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                src={member.img}
                alt={member.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-2xl font-bold">{member.name}</h2>
                <p className="text-sm text-gray-200">{member.role}</p>
              </div>
            </div>

            {/* Info */}
            <div className="p-5 text-gray-700">
              <p className="text-sm">
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

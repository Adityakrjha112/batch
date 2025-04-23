import React from 'react';

const TeamMember = ({ name, title, imageSrc }) => (
  <div className="flex flex-col items-center">
    <div>
    <img src={imageSrc} alt={name} className="w-full h-full object-cover object-center" />
    </div>
    <div className='bg-black w-full p-2 text-center'>
    <h3 className="font-bold text-sm text-white">{name}</h3>
    <p className="text-xs text-gray-300">{title}</p>
    </div>
  </div>
);

export default function TeamPage() {
  const teamMembers = [
    { 
      name: "Manoj Srinivasan", 
      title: "Founder / CEO", 
      imageSrc: "https://res.cloudinary.com/dcwq74lfg/image/upload/fl_lossy,f_auto/v1745415654/brand/Big%20Oil/test/logos/c1e8a898d42ac92193efd726bd47ce88.png" 
    },
    { 
      name: "Partner", 
      title: "President Retail & Creative", 
      imageSrc: "https://res.cloudinary.com/dcwq74lfg/image/upload/fl_lossy,f_auto/v1745426755/brand/Big%20Oil/test/logos/386f1ecdda5731622223fc05d469413a.png" 
    },
    { 
      name: "Gary Bookman", 
      title: "Head Operations", 
      imageSrc: "https://res.cloudinary.com/dcwq74lfg/image/upload/fl_lossy,f_auto/v1745426802/brand/Big%20Oil/test/logos/e9f92076d8e4851a6eb1c1b0dc9d06b5.png" 
    },
    { 
      name: "Vic Gelfon", 
      title: "GOP Manager", 
      imageSrc: "https://res.cloudinary.com/dcwq74lfg/image/upload/fl_lossy,f_auto/v1745426845/brand/Big%20Oil/test/logos/3b50e9af35cb292a048ebef5d5a78421.png" 
    },
    { 
      name: "Alex Bara", 
      title: "Account Manager", 
      imageSrc: "https://res.cloudinary.com/dcwq74lfg/image/upload/fl_lossy,f_auto/v1745415654/brand/Big%20Oil/test/logos/c1e8a898d42ac92193efd726bd47ce88.png" 
    },
    { 
      name: "Nevaeh Armiijo", 
      title: "Human Resources", 
      imageSrc: "https://res.cloudinary.com/dcwq74lfg/image/upload/fl_lossy,f_auto/v1745426802/brand/Big%20Oil/test/logos/e9f92076d8e4851a6eb1c1b0dc9d06b5.png" 
    },
    { 
      name: "Gary Liu", 
      title: "Creative Development", 
      imageSrc: "https://res.cloudinary.com/dcwq74lfg/image/upload/fl_lossy,f_auto/v1745415654/brand/Big%20Oil/test/logos/c1e8a898d42ac92193efd726bd47ce88.png" 
    },
    { 
      name: "David Minasyan", 
      title: "UI/UX Specialist", 
      imageSrc: "https://res.cloudinary.com/dcwq74lfg/image/upload/fl_lossy,f_auto/v1745415654/brand/Big%20Oil/test/logos/c1e8a898d42ac92193efd726bd47ce88.png" 
    },
    { 
      name: "Ashwin Yadav", 
      title: "Full Stack Developer", 
      imageSrc: "https://res.cloudinary.com/dcwq74lfg/image/upload/fl_lossy,f_auto/v1745426802/brand/Big%20Oil/test/logos/e9f92076d8e4851a6eb1c1b0dc9d06b5.png" 
    },
    { 
      name: "Shawn Mhara", 
      title: "Software Engineer", 
      imageSrc: "https://res.cloudinary.com/dcwq74lfg/image/upload/fl_lossy,f_auto/v1745415654/brand/Big%20Oil/test/logos/c1e8a898d42ac92193efd726bd47ce88.png" 
    },
  ];

  return (
    <div className="min-h-screen p-0">
      <div className="max-w-[100%] mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12">Meet Our Team</h1>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={index}
              name={member.name}
              title={member.title}
              imageSrc={member.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
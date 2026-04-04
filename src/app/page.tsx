"use client";
import Image from "next/image";
import { useState, useEffect } from "react"; //cycle through cad images

const myProjects = [
  {
    title: "Down The Hill | Systems Programming Project",
    description: "2D monochrome game for the Atari ST interfacing directly with Motorola 68000 hardware. Features a custom C raster library and a double-buffering system synchronized to 70Hz VSYNC for flicker-free performance.",
    link: "https://github.com/dggzlz/DownTheHill",
    tech: ["C", "SDLC", "Hardware", "Game Development", "Data structures"],
    category: "Low Level C",
    videoURL:"/videos/DowntheHillPortfoliovid.mp4",
    codeveloper: "co-developer: Diego Gonzalez",
  },
  {
    title: "Custom Linux Shell",
    description: "Functional command-line interface handling process forking, piping, and I/O redirection using Unix system calls. Click image for technical specifications.",
    link: "https://github.com/Suya678/shell_project",
    docLink: "https://docs.google.com/presentation/d/10sXj1SD9lZNe7cTYnI5XsFnlZFKj-uPddnN-AA5ic-g/edit?usp=sharing",
    tech: ["C", "Unix", "Linux", "OS Architecture"],
    category: "Low Level C",
    imageURL : ["/ShellDocPic/MruPresentation.png"],
    codeveloper: "co-developer: Depanshu Suyal",
  },
  {
    title: "Multi Threaded Chat Application",
    description: "Real-time server-client architecture supporting concurrent users via multi-threading and socket programming. Click image for technical specifications.",
    link: "https://github.com/Suya678/Chat_Application",
    docLink: "https://docs.google.com/presentation/d/1tIlFKNOVan_bxdCYJINWNwKpZxLhXXw0XGMH9nmh99M/edit?usp=sharing",
    tech: ["C", "Unix", "Linux", "OS Architecture"],
    category: "Low Level C",
    imageURL: ["/ChatroomPic/chatroom.png"],
    codeveloper: "co-developer: Depanshu Suyal",
  },
  {
    title: "AI Powered Insurance Portfolio Optimizer",
    description: "Supervised learning model to predict insurance risk and uses search algorithms to select an optimal set of clients to maximize profit within a fixed startup budget.",
    link: "https://github.com/jdserrato/AI-Powered-Insurance-Portfolio-Optimizer",
    tech: ["Python"],
    category: "AI",
    codeveloper: "co-developers: Shoun Shajan, Kieran Randall",
  },
  {
    title: "Evolutionary Reinforcement Learning Agents",
    description: "A research simulation investigating the Baldwin Effect by evolving a population of Reinforcement Learning agents (Hunter vs. Prey) using a custom Genetic Algorithm and Function Approximation.",
    link: "https://github.com/jdserrato/Evolutionary-RL-Hunter-Prey",
    tech: ["Python"],
    category: "AI",
    codeveloper: "co-developers: Shoun Shajan, Kieran Randall",
  },


    {
    title: "v1: Microsevices and Socket Programming",
    description: "Developed a crossword puzzle game using a Microservices architectural style. Engineered a custom TCP/UDP communication protocol to coordinate game logic with a standalone Word Repository service.",
    link: "https://github.com/tpell114/word_puzzle",
    tech: ["Java", "TCP/UDP SocketAddress", "Multithreading", "Microservices"],
    category: "Distributed Systems",
  },
      {
    title: "v2: Distributed Objects (RMI)",
    description: "Re-architected the system to utilize Java RMI, replacing manual socket handling with Distributed Objects. Implemented a stateful server capable of managing concurrent sessions and multi-player game stems through synchronized remote methods.",
    link: "https://github.com/tpell114/word_puzzle_v2",
    tech: ["Java", "RMI"],
    category: "Distributed Systems",
  },
      {
    title: "v3: Fault Tolerance and At-Most-Once Semantics",
    description: "Augmented the RMI infrastructure with a Failure Detector using heartbeat monitoring to track ALIVE, SUSPECTED, and FAILED client states. Engineered At-Most-Once semantics through request deduplication and sequence numbering to ensure idempotent server behavior.",
    link: "https://github.com/tpell114/word_puzzle_v3",
    tech: ["Java", "RMI", "Fault Tolerance", "Heartbeat Protocols", "Idempotent API Design"],
    category: "Distributed Systems",
  },
      {
    title: "v4 Peer-to-Peer and Consensus",
    description: "Transitioned to a Peer-to-Peer (P2P) architecture using a Replicated State Machine model. Implemented FIFO-Total Order Broadcast powered by Lamport Logical Clocks and priority queues to maintain absolute consistency across all player replicas.",
    link: "https://github.com/tpell114/word_puzzle_v4",
    tech: ["Java", "P2P", "Distributed Consensus", "Lamport Clocks", "Total Order Broadcast", "Priority Queues"],
    category: "Distributed Systems",
  },



    {
    title: "Engineering Portfolio",
    description: (
    <>
      A minimalist web application built to showcase multi-disciplinary engineering projects: <br /> <br />
    </>
  ),
    tech: ["Next.js", "TypeScript", "React", "Node.js", "Tailwind CSS", "Vercel", "Linux"],
    category: "Fullstack",
    isLive: true,
  },
      {
    title: "Coming soon: Job Tracker Application",
    description: (
    <>
      A full-stack web app for tracking job applications through every stage of the hiring process. Log applications, update statuses, and view stats on your job search progress — all in one place. <br /> <br />
    </>
  ),
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Next.Auth.js", "React", "Node.js", "Tailwind CSS", "Docker", "Vercel", "Linux"],
    category: "Fullstack",
  },
  {
    title: "Gallery of Models",
    description: "A gallery of the various CAD models I have created over the years.",
    tech: ["SOLIDWORKS", "AUTODESK INVENTOR", "CAD"],
    category: "CAD",
    imageURL: [
      "/Cadpics/plantHolder.PNG",
      "/Cadpics/plantholder2.jpg",
      "/Cadpics/weddingTray2.PNG",
      "/Cadpics/weddingTray.jpeg",
      "/Cadpics/woodboard1.png",
      "/Cadpics/ParquesBoard.jpeg",
      "/Cadpics/Remote Holder.PNG",
      "/Cadpics/remoteHolder2.jpg",
      "/Cadpics/romanGift.jpeg",
      "/Cadpics/CorysCave.PNG",
      "/Cadpics/apple1.jpeg",
      "/Cadpics/apple2.jpeg",
      "/Cadpics/apple3.jpeg",
      "/Cadpics/apple4.jpeg",
      "/Cadpics/ringTray.jpeg"

    
    ],
  },
  {
    title: "Drill Animation",
    description: "Modeled and animated a drill in SOLIDWORKS, based on the designs of a third party.",
    tech: ["SOLIDWORKS"],
    category: "Animations",
    videoURL:"/videos/Drill_Animation.mp4",
  },
  {
    title: "Unreal Engine Animation",
    description: "Using premade models I created a living room environment and rendered an animation.",
    tech: ["Unreal Engine 5", "Blender"],
    category: "Animations",
    videoURL:"/videos/livingroomrender.mp4", 
  },
];

interface ProjectProps {
  title: string;
  description: React.ReactNode; //allow better formatting for blockey text in description
  link?: string; // Optional field for project link
  docLink?: string; // Optional field for documentation link
  tech: string[];
  category: string;
  videoURL?: string; // Optional field for video URL
  imageURL?: string[]; // Optional field for image URL array so to cycle through images
  isLive?: boolean; // cherry ontop
  codeveloper?: string; // Optional field for co-developer name
}

function ProjectCard({ title, description, link, docLink, tech, category, videoURL, imageURL, isLive, codeveloper }: ProjectProps) {
  const isAnimation = category === "Animations";

  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to track the current image index for CAD projects
  const [isHovered, setIsHovered] = useState(false); // State to track hover status for CAD projects


  useEffect(() => {
  let interval: NodeJS.Timeout;
  if (isHovered && imageURL && imageURL.length > 0) {
  interval = setInterval(() => {
  setCurrentImageIndex((prev) => (prev + 1) % imageURL.length);
  }, 1200); // Change image every 1.2 seconds
  }
  return () => clearInterval(interval);
  }, [isHovered, imageURL]);


  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentImageIndex(0); // Reset to first image when mouse leaves
      }}
      className="group p-3 rounded-xl border-2 border-[#FFD77B] bg-[#E5E0D5] hover:border-[#FFDDAA] transition-all duration-300 flex flex-col h-full relative" 
    >
      <h3 className="text-xl font-bold mb-2 text-black">{title}</h3> 


     {link && (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="mb-4 inline-flex items-center text-[10px] uppercase tracking-[0.2em] font-bold opacity-40 hover:opacity-100 hover:text-[#A59D84] transition-all duration-300"
      >
        View Source Code 
      </a>
    )}


      {/* IMAGE CYCLER LOGIC (CAD Gallery) */}
        {imageURL && imageURL.length > 0 && !videoURL && (
          <div className="mb-6 overflow-hidden rounded-sm bg-[#E5E0D5] aspect-video border border-[#2D2D2A]/5 relative">

            {docLink ? (
              <a href={docLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
                <img 
                  src={imageURL[0]} 
                  className="w-full h-full object-contain transition-all duration-500"
                />
                {/* Overlay "Read Specs" on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/media:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <span className="text-[10px] text-white font-bold uppercase tracking-widest">Read Technical Specs ↗</span>
                </div>
              </a>
            ) : (
                   <>

            {imageURL.map((img, idx) => (
         
              <img 
                key={img}
                src={img}
                alt={`${title} - ${idx}`}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 
                  ${idx === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
              />
            ))}
            
            <div className="absolute bottom-2 right-2 bg-black/20 backdrop-blur-md px-2 py-1 rounded text-[8px] text-white font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              {currentImageIndex + 1} / {imageURL.length}
            </div>
            </>
            )}
        </div>
      )}

      



      {videoURL && (
        <div className="mb-6 overflow-hidden rounded-sm bg-[#E5E0D5] aspect-video border border-[#2D2D2A]/5 relative">
          <video 
            src={videoURL} 
            autoPlay ={!isAnimation}
            muted
            loop
            playsInline
            controls={isAnimation}
            className={`w-full transition-all duration-700
              ${isAnimation 
                ? 'h-full object-contain' // No cropping for CAD/Unreal renders
                : 'absolute h-[157%] object-fill top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' //custom Atari crop
              }`}
          />

        </div>
      )}

      <p className="text-sm opacity-70 mb-4 leading-relaxed flex-grow whitespace-pre-line">{description}</p>
              {/* LIVE INDICATOR */}
          {isLive && (
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] uppercase tracking-tighter font-bold opacity-40">Live System</span>
            </div>
          )}
              <p className="text-sm opacity-20 mb-1 leading-relaxed flex-fill whitespace-pre-line">{codeveloper}</p>


          
      <div className="flex flex-wrap gap-3">
        {tech.map((item) => (
          <span key={item} className="text-[10px] uppercase tracking-widest font-bold opacity-40">
            {item}
          </span>
        ))}
        
      </div>
    </div>
  );
}


export default function Home() {
  // A helper function to render a specific category
  const renderCategory = (categoryName: string) => {
    return (
      <div className="mb-20">
        <h2 className="text-xs uppercase tracking-[0.3em] font-bold opacity-70 mb-8 border-b border-[#2D2D2A]/10 pb-2">
          {categoryName}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-25">
          {myProjects
            .filter((p) => p.category === categoryName)
            .map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-[#FFF1E0] p-8 md:p-24 text-[#2D2D2A]">
      <header className="mb-20">
        <h1 className="text-5xl font-bold tracking-tighter mb-4">Juan Diego Serrato</h1>
        <p className="text-[#A59D84] font-medium italic text-lg">Software Engineer | BSc Computer Science | Minor in Business | Mechanical Engineering Technology </p>
      </header>

      {/* RENDER EACH SECTION */}
      {renderCategory("Low Level C")}
      {renderCategory("AI")}
      {renderCategory("Distributed Systems")}
      {renderCategory("Fullstack")}
      {renderCategory("CAD")}
      {renderCategory("Animations")}


      <footer className="mt-40 mb-20 border-t border-[#2D2D2A]/10 pt-12">
  <div className="flex flex-col md:flex-row justify-between items-start gap-12">
    <div>
      <h2 className="text-xs uppercase tracking-[0.3em] font-bold opacity-40 mb-6">
        Contact & Network
      </h2>
      <div className="flex flex-col gap-4">
        <a 
          href="mailto:serrato.juand@gmail.com?subject= Portfolio Inquiry" 
          className="text-2xl font-bold tracking-tighter hover:text-[#A59D84] transition-colors"
        >
          Let’s build something.
        </a>
        <p className="text-sm opacity-50 max-w-xs leading-relaxed">
          Software Engineer based in Calgary, AB. Focused on building high-performance systems, scalable backend services, and AI-driven optimizations.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap gap-x-12 gap-y-6">
      <div className="flex flex-col gap-3">
        <span className="text-[10px] uppercase tracking-widest font-bold opacity-30">Social</span>
        <a href="https://github.com/jdserrato" target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:opacity-50 transition-opacity">GitHub</a>
        <a href="https://www.linkedin.com/in/juan-diego-serrato-1870b2241/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:opacity-50 transition-opacity">LinkedIn</a>
      </div>
      
      <div className="flex flex-col gap-3">
        <span className="text-[10px] uppercase tracking-widest font-bold opacity-30">Documents</span>
        <a href="/Serrato_Juan_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:opacity-50 transition-opacity flex items-center gap-2">
          Download Resume 
          <span className="text-[10px] opacity-40">↓</span>
        </a>
      </div>
    </div>
  </div>
  
  <div className="mt-20 text-[10px] uppercase tracking-widest font-bold opacity-20">
    © 2026 Juan Diego Serrato // Software Engineer
  </div>
</footer>
    </main>
  );
}


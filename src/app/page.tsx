import { link } from "fs";
import Image from "next/image";

const myProjects = [
  {
    title: "Down The Hill | Systems Programming Project",
    description: (
      <>
      Developed a 2D monochrome interactive game for the Atari ST, focusing on low-level hardware interaction and memory management <br /> <br />
      <b> Custom Raster Library:</b> Built a standalone C library for plotting pixels, lines, and bitmapped sprites directly to the frame buffer. <br />
      <b>Manual Hardware Interfacing:</b> Programmed the YM2149 PSG (Programmable Sound Generator) and the MMU video registers by bypassing the operating system. <br />
      <b>Real-Time Rendering:</b> Implemented Double Buffering and synchronized frame rates with the 70 Hz monitor refresh rate to eliminate flickering. <br />
      <b>System Architecture:</b> Designed a modular engine featuring an event-driven game loop that handled synchronous clock ticks and asynchronous keyboard input.,
      </>
    ),
    link: "https://github.com/dggzlz/DownTheHill",
    tech: ["C", "SDLC", "Hardware", "Game Development", "Data structures"],
    category: "Low Level C",
    videoURL:"/videos/DowntheHillPortfoliovid.mp4",
    codeveloper: "co-developer: Diego Gonzalez",
  },
  {
    title: "Custom Linux Shell",
    description: (
      <>
      Quantum Shell is a basic shell made in C. It has the following functionalities: <br /> <br />
      <b>N-stage pipelining:</b> Supports chaining multiple commands using pipes<br />
      <b>I/O redirection:</b> Supports Input and Output redirection<br />
      <b>Command search pathways:</b> Searches system paths for commands, but arguments like file paths still need to be fully specified<br />
      <b>Built in cd command:</b> Allows changing of directories<br />
      <b>Basic Signal handling:</b> Ctrl C is ignored for the current shell process. SIGCHLD for proper background process and cleanup.,
      </>
    ),
    link: "https://github.com/Suya678/shell_project",
    tech: ["C", "Unix", "OS Architecture"],
    category: "Low Level C",
    codeveloper: "co-developer: Depanshu Suyal",
  },
  {
    title: "Multi Threaded Chat Application",
    description: "A real-time chat application supporting multiple concurrent users through multi-threading. The application consists of a server component handling multiple client connections and a client interface for users to communicate.",
    link: "https://github.com/Suya678/Chat_Application",
    tech: ["C", "Unix", "OS Architecture"],
    category: "Low Level C",
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
    title: "Systems-First Engineering Portfolio",
    description: (
    <>
      A high-performance, minimalist web application built to showcase multi-disciplinary engineering projects: <br /> <br />
      <b>Type-Safe Architecture:</b> Implemented with TypeScript and Next.js for robust component logic and data handling. <br />
      <b>Responsive Systems:</b> Engineered a custom CSS grid that adapts layouts (3:2 vs 16:9) based on project category. <br />
      <b>Automated Deployment:</b> Integrated a CI/CD pipeline via GitHub and Vercel for instant, version-controlled production updates. <br />
      <b>Japandi UX:</b> Designed with a focus on "Ma" (negative space) and a 2700K warm-neutral aesthetic to reduce user cognitive load.
    </>
  ),
    tech: ["Next.js", "TypeScript", "React", "Node.js", "Tailwind CSS", "Vercel", "Linux"],
    category: "Fullstack",
    isLive: true,
  },
  {
    title: "Gallery of Models",
    description: "A gallery of the various CAD models I have created over the years.",
    tech: ["SOLIDWORKS", "AUTODESK INVENTOR", "CAD"],
    category: "CAD",
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
  tech: string[];
  category: string;
  videoURL?: string; // Optional field for video URL
  imageURL?: string; // Optional field for image URL
  isLive?: boolean; // cherry ontop
  codeveloper?: string; // Optional field for co-developer name
}

function ProjectCard({ title, description, link, tech, category, videoURL, imageURL, isLive, codeveloper }: ProjectProps) {
  const isAnimation = category === "Animations";
  return (
    <div className="group p-3 rounded-xl border-2 border-[#FFD77B] bg-[#E5E0D5] hover:border-[#FFDDAA] transition-all duration-300 flex flex-col h-full relative">
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

      <p className="text-sm opacity-30 mb-1 leading-relaxed flex-grow whitespace-pre-line">{codeveloper}</p>


      {videoURL && (
        <div className="mb-6 overflow-hidden rounded-sm bg-[#E5E0D5] aspect-video border border-[#2D2D2A]/5 relative">
          <video 
            src={videoURL} 
            autoPlay ={!isAnimation}
            muted
            loop
            playsInline
            controls={isAnimation}
            className={`w-full grayscale group-hover:grayscale-0 transition-all duration-700
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-25">
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
        <p className="text-[#A59D84] font-medium italic text-lg">Software Engineer | Fullstack | CS + Minor in Business | Mechanical Engineering Technology </p>
      </header>

      {/* RENDER EACH SECTION */}
      {renderCategory("Low Level C")}
      {renderCategory("AI")}
      {renderCategory("Distributed")}
      {renderCategory("Fullstack")}
      {renderCategory("CAD")}
      {renderCategory("Animations")}
    </main>
  );
}


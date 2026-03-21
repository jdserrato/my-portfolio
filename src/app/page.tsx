import Image from "next/image";

const myProjects = [
  {
    title: "Down The Hill | Systems Programming Project",
    description: (
      <>
      Developed a 2D monochrome interactive game for the Atari ST, focusing on low-level hardware interaction and memory management: <br /> <br />
      <b> Custom Raster Library:</b> Built a standalone C library for plotting pixels, lines, and bitmapped sprites directly to the frame buffer. <br />
      <b>Manual Hardware Interfacing:</b> Programmed the YM2149 PSG (Programmable Sound Generator) and the MMU video registers by bypassing the operating system. <br />
      <b>Real-Time Rendering:</b> Implemented Double Buffering and synchronized frame rates with the 70 Hz monitor refresh rate to eliminate flickering. <br />
      <b>System Architecture:</b> Designed a modular engine featuring an event-driven game loop that handled synchronous clock ticks and asynchronous keyboard input.,
      </>
    ),
    tech: ["C", "SDLC", "Hardware", "Game Development", "Data structures"],
    category: "Low Level C",
  },
  {
    title: "Custom Linux Shell",
    description: "A functional command-line interface handling process forking, piping, and I/O redirection.",
    tech: ["C", "Unix", "OS Architecture"],
    category: "Low Level C",
  },
  {
    title: "AI Powered Insurance Portfolio Optimizer",
    description: "Supervised learning model to predict insurance risk and uses search algorithms to select an optimal set of clients to maximize profit within a fixed startup budget.",
    tech: ["Python"],
    category: "AI",
  },
  {
    title: "Evolutionary Reinforcement Learning Agents",
    description: "A research simulation investigating the Baldwin Effect by evolving a population of Reinforcement Learning agents (Hunter vs. Prey) using a custom Genetic Algorithm and Function Approximation.",
    tech: ["Python"],
    category: "AI",
  },
    {
    title: "Fullstack Portfolio Website",
    description: "Insert desc here",
    tech: ["Node.js", "React", "Next.js", "Tailwind CSS", "TypeScript", "Vercel", "Linux"],
    category: "Fullstack",
  },
  {
    title: "Gallery of Models",
    description: "A gallery of the various CAD models I have created over the years.",
    tech: ["SOLIDWORKS", "AUTODESK INVENTOR", "CAD"],
    category: "CAD",
  },
];

interface ProjectProps {
  title: string;
  description: React.ReactNode; //allow better formatting for blockey text in description
  tech: string[];
  category: string;
}

function ProjectCard({ title, description, tech, category }: ProjectProps) {
  return (
   // <div className="group p-6 border border-[#E6E4DD] bg-white hover:border-[#A59D84] transition-all duration-300">
    <div className="group p-3 rounded-xl border-2 border-[#FFD77B] bg-[#E5E0D5] hover:border-[#FFDDAA] transition-all duration-300 flex flex-col h-full">
      <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
      <p className="text-sm opacity-70 mb-4 leading-relaxed flex-grow whitespace-pre-line">{description}</p>
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
        <p className="text-[#A59D84] font-medium italic text-lg">Software Engineer | Fullstack | Computer Science Graduate - Minor in Business | Mechanical Engineering Technology Graduate | Systems Enthusiast </p>
      </header>

      {/* RENDER EACH SECTION */}
      {renderCategory("Low Level C")}
      {renderCategory("AI")}
      {renderCategory("Distributed")}
      {renderCategory("Fullstack")}
      {renderCategory("CAD")}
    </main>
  );
}


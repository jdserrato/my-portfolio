import Image from "next/image";

const myProjects = [
  {
    title: "Atari 2D Game",
    description: "Insert DOWN THE HILL description here",
    tech: ["C"],
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
    description: "Insert desc here",
    tech: ["Python"],
    category: "AI",
  },
  {
    title: "Evolutionary Reinforcement Learning Hunter/Prey Agents",
    description: "Insert description here",
    tech: ["Python"],
    category: "AI",
  },
];

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  category: string;
}

function ProjectCard({ title, description, tech, category }: ProjectProps) {
  return (
   // <div className="group p-6 border border-[#E6E4DD] bg-white hover:border-[#A59D84] transition-all duration-300">
    <div className="group p-6 border-2 border-[#FFD77B] bg-[#E5E0D5] hover:border-[#FFDDAA] transition-all duration-300">
      <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
      <p className="text-sm opacity-70 mb-4 leading-relaxed">{description}</p>
      <div className="flex gap-3">
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
        <h2 className="text-xs uppercase tracking-[0.3em] font-bold opacity-30 mb-8 border-b border-[#2D2D2A]/10 pb-2">
          {categoryName}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        <p className="text-[#A59D84] font-medium italic text-lg">CS Graduate | Systems Enthusiast</p>
      </header>

      {/* RENDER EACH SECTION */}
      {renderCategory("Low Level C")}
      {renderCategory("AI")}
      {renderCategory("Distributed")}
    </main>
  );
}


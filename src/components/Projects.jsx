import ProjectCard from './ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: "Pac-Man CTF",
      image: "/images/pacman_ctf.png",
      description: "The contest organized by UPF from Barcelona challenges participants to design intelligent agents that compete in a team-based, capture-the-flag variant of Pacman, where agents must balance offensive and defensive strategies. We used an A* algorithm for offensive and defensive with a unique defensive heuristic. Achieved Top 10 position in the final ranking.",
      team: "only-pacmans",
      links: [
        { url: "https://pacman-contest.upf.edu/final_UL_24-25/results_0.html", icon: "bi-table", label: "Check scores", color: "text-purple-600 hover:text-purple-800" },
        { url: "https://github.com/EnriqueF97/EMAI-AS-Labs", icon: "bi-github", label: "GitHub", color: "text-gray-600 hover:text-gray-800" }
      ]
    },
    {
      title: "Lunar Lander",
      image: "/images/lunar_lander.png",
      description: "Train a RL agent to land a rocket on a platform using OpenAI's Gymnasium. This project showcases the learning capabilities of a Double Deep Q-Network (DDQN) agent, which learns to navigate and land the rocket through trial and error, optimizing its actions based on rewards received from the environment.",
      links: [
        { url: "https://youtu.be/l5ZGZeFIHQU", icon: "bi-play-btn-fill", label: "Check", color: "text-red-600 hover:text-red-800" },
        { url: "https://github.com/EnriqueF97/ReinforcementLearningProjects", icon: "bi-github", label: "GitHub", color: "text-gray-600 hover:text-gray-800" }
      ]
    },
    {
      title: "Asteroid Killer",
      image: "/images/asteroid-killer.png",
      description: "A Three.js game where you blast incoming asteroids. Built from scratch with visuals, UI, and logic fully customized. Normal texture maps, dynamic lightning, bullet dispersion, increasing difficulty overtime are combined for a challenging experience.",
      links: [
        { url: "https://main.d32ijrgwva29aa.amplifyapp.com/", icon: "bi-joystick", label: "Play", color: "text-purple-600 hover:text-purple-800" },
        { url: "https://youtu.be/SzoTNIJ9cV4", icon: "bi-play-btn-fill", label: "Check", color: "text-red-600 hover:text-red-800" },
        { url: "https://github.com/EnriqueF97/asteroid-killer", icon: "bi-github", label: "GitHub", color: "text-gray-600 hover:text-gray-800" }
      ]
    },
    {
      title: "Share Prompts",
      image: "/images/share_prompts.png",
      description: "Discover and share useful AI prompts with other users, just as easy as that. This project demonstrates NextJS capabilities to quickly build a full stack application in React using directory paths. Google API integration is used to log in and MongoDB to store both user profile info and prompts. Work in progress...",
      links: [
        { url: "#", icon: "bi-cursor-fill", label: "Visit", color: "text-stone-300 hover:text-blue-800 pointer-events-none" },
        { url: "https://github.com/EnriqueF97/share_prompts", icon: "bi-github", label: "GitHub", color: "text-gray-600 hover:text-gray-800" }
      ]
    }
  ]

  return (
    <section id="projects" className="scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-semibold mb-4 lg:text-left text-center text-white">Projects</h2>
        </div>
        <div className="lg:col-span-9">
          <div className="grid sm:grid-cols-2 gap-4">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
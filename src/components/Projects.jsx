import ProjectCard from './ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: "News Driven Liquidity Modelling",
      image: "/images/liquidity-modelling.png",
      description: "Working Thesis Project at Hammer Market Intelligence. Developed a Temporal Fusion Transformer (TFT) model to analyze the impact of geopolitical and sentiment-driven news on WTI crude oil liquidity dynamics and lag behavior. Found that news generate peak trading volume 6 hours after a news impact the market.",
      links: [
        { url: "https://github.com/EnriqueF97/hammer-market-intelligence-internship", icon: "bi-github", label: "GitHub", color: "text-gray-600 hover:text-gray-800 pointer-events-none" }
      ]
    },
    {
      title: "LLM Social Listening",
      image: "/images/llm-social-listening.png",
      description: "Sub project developed at Hammer Market Intelligence. Extracting and classifying social sentiment of AI Providers using LLM. Built an NLP pipeline processing 100k+ Reddit comments to classify LLM-provider mentions, extract sentiment, and identify aspect-level user feedback across major AI providers.",
      links: [
        { url: "https://github.com/freek1/llm-social-listening", icon: "bi-github", label: "GitHub", color: "text-gray-600 hover:text-gray-800 pointer-events-none" }
      ]
    },
    {
      title: "Maybe Obstacle",
      image: "/images/maybe-obstacle.png",
      description: "Unknown road obstacle detection using computer vision. Co-developed an uncertainty-aware computer vision framework for anomaly-based road obstacle detection using semantic segmentation outputs.",
      links: [
        { url: "https://github.com/edgarcancinoe/maybe-obstacle/tree/main", icon: "bi-github", label: "GitHub", color: "text-gray-600 hover:text-gray-800 pointer-events-none" }
      ]
    },
    {
      title: "Pac-Man CTF",
      image: "/images/pacman_ctf.png",
      description: "The contest organized by UPF from Barcelona challenges participants to design intelligent agents that compete in a team-based, capture-the-flag variant of Pacman, where agents must balance offensive and defensive strategies. We used an A* algorithm for offensive and defensive with a unique defensive heuristic. Achieved Top 10 position in the final ranking.",
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
    }
  ]

  return (
    <section id="projects" className="scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-semibold mb-4 text-white">Projects</h2>
        </div>
        <div className="lg:col-span-9">
          <div className="grid grid-cols-1 gap-4">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
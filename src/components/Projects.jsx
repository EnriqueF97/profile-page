import ProjectCard from './ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: "Evaluation-First RAG",
      image: "/images/evaluation-first-rag.svg",
      status: "In progress",
      description: "Retrieval-augmented QA over a self-built corpus of 25k+ public football news articles, built to be measured, not demoed. A hand-written golden set labels the relevant documents for every question, so retrieval (recall@k) and generation (groundedness, abstention) are scored separately. Planned: hybrid BM25 + dense retrieval with cross-encoder reranking, an ablation table, and a LangGraph agent that decides when to retrieve and when to abstain.",
      tags: ["Python", "RAG", "LangChain", "LangGraph", "Hybrid Retrieval", "Reranking", "LLM Evaluation"],
      links: [
        { url: "https://github.com/EnriqueF97/football-rag", icon: "bi-github", label: "GitHub", color: "text-gray-600 hover:text-gray-800" }
      ]
    },
    {
      title: "News-Driven Liquidity Modelling",
      image: "/images/liquidity-modelling.png",
      description: "Master's thesis at Hammer Market Intelligence. An LLM extraction pipeline using Anthropic's API converts thousands of news articles into structured signals (sentiment, supply, risk, price) that feed a Temporal Fusion Transformer modelling their impact on WTI crude oil liquidity. Outputs are evaluated against a held-out reference set. The liquidity response to news peaks about 6 hours after publication, and the TFT cuts log-volume forecast error over a persistence baseline by 46 to 71%.",
      tags: ["Python", "PyTorch", "Batch API", "Prompt Engineering", "LLM Evaluation", "TFT", "Time-Series", "NLP"],
      links: [
        { url: "https://github.com/EnriqueF97/news-driven-liquidity", icon: "bi-github", label: "GitHub", color: "text-gray-600 hover:text-gray-800" }
      ]
    },
    {
      title: "LLM Social Listening",
      image: "/images/llm-social-listening.png",
      description: "Side project at Hammer Market Intelligence. NLP pipeline classifying LLM-provider mentions and aspect-level sentiment across 100k+ Reddit discussions, surfacing provider-level user feedback across major AI platforms.",
      tags: ["Python", "NLP", "Sentiment Analysis", "Reddit API", "Data Pipelines"],
      links: [
        { private: true }
      ]
    },
    {
      title: "Maybe Obstacle",
      image: "/images/maybe-obstacle.png",
      description: "Unknown road obstacle detection using computer vision. Co-developed an uncertainty-aware computer vision framework for anomaly-based road obstacle detection using semantic segmentation outputs. Presented as a poster at University College London.",
      tags: ["Python", "Computer Vision", "Semantic Segmentation", "Deep Learning"],
      links: [
        { url: "https://github.com/edgarcancinoe/maybe-obstacle/tree/main", icon: "bi-github", label: "GitHub", color: "text-gray-600 hover:text-gray-800" }
      ]
    },
    {
      title: "Pac-Man CTF",
      image: "/images/pacman_ctf.png",
      description: "The contest organized by UPF from Barcelona challenges participants to design intelligent agents that compete in a team-based, capture-the-flag variant of Pacman, where agents must balance offensive and defensive strategies. We used an A* algorithm for offensive and defensive with a unique defensive heuristic. Achieved Top 10 position in the final ranking.",
      tags: ["Python", "A* Search", "Multi-Agent"],
      links: [
        { url: "https://pacman-contest.upf.edu/final_UL_24-25/results_0.html", icon: "bi-table", label: "Check scores", color: "text-purple-600 hover:text-purple-800" },
        { url: "https://github.com/EnriqueF97/EMAI-AS-Labs", icon: "bi-github", label: "GitHub", color: "text-gray-600 hover:text-gray-800" }
      ]
    },
    {
      title: "Lunar Lander",
      image: "/images/lunar_lander.png",
      description: "Train a RL agent to land a rocket on a platform using OpenAI's Gymnasium. This project showcases the learning capabilities of a Double Deep Q-Network (DDQN) agent, which learns to navigate and land the rocket through trial and error, optimizing its actions based on rewards received from the environment.",
      tags: ["Python", "Reinforcement Learning", "DDQN", "Gymnasium"],
      links: [
        { url: "https://youtu.be/l5ZGZeFIHQU", icon: "bi-play-btn-fill", label: "Check", color: "text-red-600 hover:text-red-800" },
        { url: "https://github.com/EnriqueF97/ReinforcementLearningProjects", icon: "bi-github", label: "GitHub", color: "text-gray-600 hover:text-gray-800" }
      ]
    },
    {
      title: "Asteroid Killer",
      image: "/images/asteroid-killer.png",
      description: "A Three.js game where you blast incoming asteroids. Built from scratch with visuals, UI, and logic fully customized. Normal texture maps, dynamic lightning, bullet dispersion, increasing difficulty overtime are combined for a challenging experience.",
      tags: ["JavaScript", "Three.js"],
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
import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Plated App",
    description: (
      <>
        Collaborated as part of a team to design and develop <em>Plated</em>, a
        mobile app that helps users discover and share recipes tailored to their
        preferences and pantry inventory. Contributed to features like an AI
        chef assistant, pantry management, and recipe uploading, fostering
        creativity, organization, and inclusivity in the kitchen while making
        cooking more accessible and enjoyable.
      </>
    ),
    technologies: ["React Native", "JavaScript"],
    image: "/portfolio/plated.png",
    github: "https://github.com/ashleyvincent10/platedapp52",
    demo: "https://www.youtube.com/watch?v=j9SXlw8Pwrk",
    report:
      "https://docs.google.com/document/d/15xH0gE8ECTH-mK6WxRXLL6-WFBDb-P6N/export?format=pdf",
  },
  {
    title: "Chat Bot",
    description:
      "Built a Python-based chatbot that recommends movies using natural language processing, sentiment analysis, and collaborative filtering. Leveraged the MovieLens dataset (9,000+ movies) and integrated a Large Language Model interface for advanced conversational interactions. Ensured robust functionality through rigorous testing and debugging.",
    technologies: ["Python", "LLM"],
    image: "/portfolio/chatbot.png",
    github: "https://github.com/e2morris33/CS124chatbot/blob/main/chatbot.py",
  },
  {
    title: "Spotify Top Tracks",
    description:
      "Utilizing the Spotify API, I developed an app that allows users to connect their Spotify accounts and explore their listening patterns by browsing their top tracks or tracks from a specific album in an intuitive and user-friendly interface.",
    technologies: ["React Native"],
    image: "/portfolio/spotify.png",
    github: "https://github.com/cs147L-24au/e2morris/blob/main/A3-main/App.js",
  },
  {
    title: "Chiefs Success Visualization",
    description:
      "Developed an interactive data visualization website analyzing the success of the Kansas City Chiefs, showcasing their performance metrics and strategic strengths. Leveraged web development tools to create engaging, interactive visualizations, including dynamic charts and infographics.",
    technologies: ["React", "CSS", "HTML"],
    image: "/portfolio/chiefs.png",
    github: "https://github.com/e2morris33/448bfinal/blob/main/src/App.js",
    demo: "https://www.youtube.com/watch?v=PcaUBIecQ2c",
  },
  {
    title: "Bay Area Finder",
    description:
      "Developed an interactive data visualization tool using d3.js and a Yelp dataset to map restaurants near the Bay Area. Implemented filters for price, ratings, and location radius, enabling users to explore shops that meet specific criteria within overlapping regions of interest.",
    technologies: ["JavaScript"],
    image: "/portfolio/bay.png",
    github: "https://github.com/e2morris33/bayAreaFinder",
  },
  {
    title: (
      <>
        <em>Tend</em> App
      </>
    ),
    description: (
      <>
        <em>Tend</em> is a conceptual mobile app designed to help recent college
        graduates stay connected with friends through gentle, intentional
        prompts. As part of a three-month design sprint, I conducted user
        research through interviews and diary studies with 11 post-grads to
        uncover common struggles in maintaining friendships after college. Based
        on our insights, I led the design of a plant-based friendship widget
        using parallel prototyping methods to explore creative solutions. We
        refined our Figma prototypes through usability testing, translating
        feedback into clearer visuals, smoother interactions, and stronger
        emotional resonance.
      </>
    ),
    technologies: ["Figma", "User Research", "Prototyping"],
    image: "/portfolio/Tend.png",
    github: "https://highercommonsense.com/cs247b/16794/",
    isReport: true,
  },
];

function Projects() {
  return (
    <div className="space-y-12">
      <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="flex justify-center p-4">
            <img
              src={project.image}
              alt={project.title}
              className="max-h-80 w-auto rounded-md shadow-sm"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-black"
              >
                <Github size={20} className="mr-1" />
                {project.isReport ? "Final Report" : "Code"}
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-black"
                >
                  <ExternalLink size={20} className="mr-1" />
                  Live Demo
                </a>
              )}

              {project.report && (
                <a
                  href={project.report}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-black"
                >
                  <ExternalLink size={20} className="mr-1" />
                  Final Report
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;

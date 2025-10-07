import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'MindEase',
      subtitle: 'Final Year Project',
      description:
        'Cross-platform mental health app with 15+ responsive UI screens, featuring video calling, AI semantic model, geo-location, and in-app payments for professional support.',
      tech: ['Flutter', 'Node.js', 'Python', 'MongoDB'],
      category: 'Mobile App',
    },
    {
      title: 'Automated DevOps Pipeline',
      subtitle: 'Infrastructure Project',
      description:
        'Fully automated CI/CD pipeline with Docker, Jenkins, Terraform, and Ansible. Provisions Azure VM and handles sequential deployment verification.',
      tech: ['Docker', 'Jenkins', 'Terraform', 'Ansible', 'Azure'],
      category: 'DevOps',
    },
    {
      title: 'E-Commerce Store',
      subtitle: 'Hackathon Project',
      description:
        'Full-stack e-commerce platform built in 24 hours with authentication, product catalog, and shopping cart. Optimized database queries reducing load time by 25%.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Figma'],
      category: 'Web App',
    },
    {
      title: 'Dental App',
      subtitle: 'Healthcare Solution',
      description:
        'Healthcare app for diagnosis and doctor-patient matching with focus on data privacy and secure communication to improve patient access to healthcare services.',
      tech: ['Flutter', 'Dart', 'Firebase'],
      category: 'Mobile App',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400">{project.subtitle}</p>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                  <Github className="w-5 h-5" />
                  <span>Code</span>
                </button>
                <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

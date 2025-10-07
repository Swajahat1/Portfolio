import { Code2, Database, Smartphone, Server } from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'Next.js, React, HTML, CSS, Tailwind CSS',
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Node.js, Express.js, Spring Boot, REST API',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database Management',
      description: 'MySQL, PostgreSQL, MongoDB, Firebase',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Development',
      description: 'Flutter, Dart, Cross-platform Apps',
    },
  ];

  const languages = ['JavaScript', 'Python', 'Java', 'Dart'];
  const tools = ['Git', 'GitHub', 'Postman', 'Figma', 'Docker', 'Jenkins'];

  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Fresh Computer Science graduate from SZABIST University with hands-on
              experience in Flutter and full-stack development. I specialize in building
              responsive applications and integrating secure system architectures.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My passion lies in solving real-world problems through clean code and
              scalable systems. I've worked on diverse projects ranging from mental
              health apps to e-commerce platforms and DevOps automation.
            </p>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span key={lang} className="skill-tag">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span key={tool} className="skill-tag">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="card hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-cyan-400 mb-4">{skill.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

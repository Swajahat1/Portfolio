import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Flutter Developer Intern',
      company: 'CHC',
      period: 'Apr 2025 – Aug 2025',
      achievements: [
        'Designed and developed 15+ mobile app interfaces using Figma and Flutter',
        'Implemented search and dynamic doctor listings, reducing navigation time by 30%',
        'Collaborated with backend developers to integrate REST APIs for real-time data',
        'Resolved UI conflicts and performance bottlenecks for seamless cross-platform experience',
      ],
    },
    {
      title: 'Web Developer Intern',
      company: 'CodSoft – India',
      period: 'Dec 2023 – Jan 2024',
      achievements: [
        'Built 5+ responsive web pages with HTML, CSS, and JavaScript',
        'Enhanced user engagement with interactive forms and dynamic product listings',
        'Debugged cross-browser issues, improving compatibility across platforms',
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-6 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="card hover-lift"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    <Briefcase className="w-6 h-6 text-cyan-400" />
                    {exp.title}
                  </h3>
                  <p className="text-xl text-cyan-400">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                  <Calendar className="w-5 h-5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

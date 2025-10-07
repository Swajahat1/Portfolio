import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent">
            Syed Wajahat
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Full-Stack Developer & Flutter Specialist
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Fresh Computer Science graduate passionate about building responsive apps,
            integrating secure architectures, and delivering optimized user-friendly solutions.
          </p>

          <div className="flex gap-6 justify-center mb-12">
            <a
              href="mailto:swajahathussain12@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/syedwajahat-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-secondary"
            >
              View Projects
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 text-cyan-400" />
      </button>
    </section>
  );
}

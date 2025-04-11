import React from 'react';
import { Download, Github, Linkedin, Mail, Twitter, BookOpen, ArrowUpRight, Notebook as Robot, Cpu, FlaskRound as Flask } from 'lucide-react';
import BackgroundAnimation from './components/BackgroundAnimation';
import GlassCard from './components/GlassCard';
import { portfolio } from './config/portfolio';

function App() {
  const handleDownloadCV = () => {
    window.open(portfolio.cv, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <BackgroundAnimation />
      
      {/* Download CV Button */}
      <button
        onClick={handleDownloadCV}
        className="fixed top-4 right-4 bg-black/5 backdrop-blur-lg px-4 py-2 rounded-lg 
        flex items-center gap-2 hover:bg-black/10 transition-all duration-300 z-10 text-gray-700"
      >
        <Download size={20} />
        Download CV
      </button>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <GlassCard className="mb-12 text-center p-8">
          <img
            src={portfolio.avatar}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />
          <h1 className="text-4xl font-bold mb-2 text-gray-800">{portfolio.name}</h1>
          <p className="text-xl text-gray-600 mb-4">{portfolio.title}</p>
          <p className="text-gray-500 max-w-2xl mx-auto">{portfolio.bio}</p>
          
          <div className="flex justify-center gap-4 mt-6">
            <a href={portfolio.social.github} className="text-gray-600 hover:text-gray-900 transition-colors">
              <Github size={24} />
            </a>
            <a href={portfolio.social.linkedin} className="text-gray-600 hover:text-gray-900 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={portfolio.social.twitter} className="text-gray-600 hover:text-gray-900 transition-colors">
              <Twitter size={24} />
            </a>
            <a href={`mailto:${portfolio.social.email}`} className="text-gray-600 hover:text-gray-900 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </GlassCard>

        {/* Skills Section */}
        <GlassCard className="mb-12 p-8">
          <div className="flex items-center gap-2 mb-6">
            <Cpu className="text-gray-700" size={24} />
            <h2 className="text-2xl font-bold text-gray-800">Technical Expertise</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {portfolio.skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-black/5 backdrop-blur-sm text-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </GlassCard>

        {/* Research Section */}
        <GlassCard className="mb-12 p-8">
          <div className="flex items-center gap-2 mb-6">
            <Flask className="text-gray-700" size={24} />
            <h2 className="text-2xl font-bold text-gray-800">Research Publications</h2>
          </div>
          <div className="space-y-6">
            {portfolio.research.map((paper) => (
              <div key={paper.title} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{paper.title}</h3>
                  <a 
                    href={paper.link}
                    className="text-indigo-600 hover:text-indigo-500 transition-colors flex items-center gap-1"
                  >
                    View Paper
                    <ArrowUpRight size={16} />
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <span>{paper.journal}</span>
                  <span>•</span>
                  <span>{paper.year}</span>
                  <span>•</span>
                  <span>{paper.citations} citations</span>
                </div>
                <p className="text-gray-600">{paper.description}</p>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Projects Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col-span-full mb-6 flex items-center gap-2">
            <Robot className="text-gray-700" size={24} />
            <h2 className="text-2xl font-bold text-gray-800">Research Projects</h2>
          </div>
          {portfolio.projects.map((project) => (
            <GlassCard key={project.title} className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-indigo-600 hover:text-indigo-500 transition-colors"
              >
                View Project →
              </a>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import { Database, Server, Brain, BarChart3, Cloud } from 'lucide-react';

const skills = [
  {
    title: 'Backend Engineering',
    icon: Server,
    items: ['FastAPI / Django', 'RESTful APIs', 'Auth & JWT', 'Caching & Queues'],
  },
  {
    title: 'Databases & Data',
    icon: Database,
    items: ['PostgreSQL / MongoDB', 'ETL Pipelines', 'SQL Optimization', 'Data Modeling'],
  },
  {
    title: 'Analytics & ML',
    icon: Brain,
    items: ['Pandas / NumPy', 'Exploratory Analysis', 'Feature Engineering', 'Model Serving'],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    items: ['Docker', 'CI/CD', 'Monitoring', 'Serverless'],
  },
  {
    title: 'Visualization',
    icon: BarChart3,
    items: ['Dashboards', 'Storytelling with Data', 'Reporting', 'A/B Testing'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 bg-gradient-to-b from-black to-slate-950">
      {/* Parallax background grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 [background-image:radial-gradient(theme(colors.white/5)_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Core Skills</h2>
          <p className="mt-3 text-white/70">A blend of backend craftsmanship and data-driven thinking.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({ title, icon: Icon, items }) => (
            <div
              key={title}
              className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition-colors p-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-300">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-white/80 text-sm">
                {items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

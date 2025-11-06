import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'API Performance Dashboard',
    description:
      'A real-time dashboard aggregating service metrics with alerts and anomaly detection.',
    tags: ['FastAPI', 'Timeseries', 'WebSockets', 'Grafana'],
    repo: '#',
    demo: '#',
  },
  {
    title: 'Customer Churn Analysis',
    description:
      'End-to-end pipeline: feature engineering, model training, and explainability.',
    tags: ['Python', 'Pandas', 'XGBoost', 'SHAP'],
    repo: '#',
    demo: '#',
  },
  {
    title: 'ETL for Sales Analytics',
    description:
      'Robust ETL with scheduling, quality checks, and warehouse schemas.',
    tags: ['Airflow', 'DBT', 'PostgreSQL', 'S3'],
    repo: '#',
    demo: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-slate-950 to-black">
      {/* Parallax style accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 right-10 w-96 h-96 bg-fuchsia-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 -left-20 w-[30rem] h-[30rem] bg-cyan-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Projects</h2>
          <p className="mt-3 text-white/70">A snapshot of the work I enjoy building.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10 text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-6 pb-6 flex items-center gap-4">
                <a href={p.repo} className="inline-flex items-center gap-1 text-white/80 hover:text-white text-sm">
                  <Github size={16} /> Code
                </a>
                <a href={p.demo} className="inline-flex items-center gap-1 text-white/80 hover:text-white text-sm">
                  <ExternalLink size={16} /> Live
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

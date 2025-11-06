import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! Your message has been sent.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-black to-slate-950">
      <div className="absolute inset-0 pointer-events-none [background-image:radial-gradient(theme(colors.cyan.500/8)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s work together</h2>
          <p className="mt-3 text-white/70">Have a project or role in mind? I’d love to hear about it.</p>
        </div>

        <form onSubmit={onSubmit} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-white/70">Name</label>
              <input required type="text" className="mt-1 w-full rounded-md bg-black/50 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm text-white/70">Email</label>
              <input required type="email" className="mt-1 w-full rounded-md bg-black/50 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="jane@company.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm text-white/70">Message</label>
            <textarea required rows="5" className="mt-1 w-full rounded-md bg-black/50 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Tell me about your project or role..." />
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 text-white/70 text-sm">
              <Mail size={16} /> contact@yourdomain.dev
            </div>
            <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition-colors">
              <Send size={16} /> Send
            </button>
          </div>
          {status && (
            <p className="mt-4 text-sm text-emerald-400">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

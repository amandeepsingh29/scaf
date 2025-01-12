import { useState, useEffect } from 'react';
import { Terminal, Shield, Lock, Code2, Cpu, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GlitchText } from '../components/GlitchText';
import { CountdownTimer } from '../components/CountdownTimer';
import { HackerLoader } from '../components/HackerLoader';
import img from './final.png';
export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <HackerLoader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      {/* Matrix-like Background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      <div className="fixed inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      
      {/* Animated Circuit Lines */}
      <div className="fixed inset-0 circuit-pattern opacity-10" />

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-20 reveal">
          <div className="flex justify-center mb-8 relative">
            <div className="absolute inset-0 animate-pulse-slow bg-green-500/20 blur-xl rounded-full" />
            {/* <Shield className="w-20 h-20 text-green-400 relative animate-float" /> */}
            <img 
                  src={img}  
                  alt="Logo" 
                  className="w-25 h-25 relative animate-float" 
              />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-none">
            <GlitchText text="SeCureCode" className="font-bold tracking-tight block" />
            <GlitchText text="Auditor" className="font-bold tracking-tight block text-green-500" />
          </h1>
          <p className="text-xl md:text-3xl text-green-500/80 typewriter-1 max-w-3xl mx-auto mb-4">
            Scan. Attack. Defend. Secure Your Code
          </p>
          <p className="text-xl md:text-3xl text-green-500/80 typewriter-2 max-w-3xl mx-auto">
            Before Hackers Do That For U_
          </p>
        </header>

        {/* Countdown Section */}
        <section className="max-w-4xl mx-auto mb-20 p-10 border border-green-500/20 rounded-2xl backdrop-blur-sm bg-black/40 hover:border-green-400/40 transition-all duration-500 reveal reveal-delay-1">
          <h2 className="text-3xl text-center mb-10 glowing-text">System Launch Imminent</h2>
          <CountdownTimer />
        </section>

        {/* Features Grid */}
        <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20 reveal reveal-delay-2">
          {[
            { icon: Terminal, title: "Advanced Scanning", desc: "Real-time vulnerability detection with AI-powered analysis" },
            { icon: Lock, title: "Threat Prevention", desc: "Proactive defense against zero-day exploits" },
            { icon: Code2, title: "Code Analysis", desc: "Deep inspection with smart pattern recognition" },
            { icon: Shield, title: "24/7 Protection", desc: "Continuous monitoring and instant alerts" },
            { icon: Cpu, title: "AI Integration", desc: "Machine learning-based threat detection" },
            { icon: Zap, title: "Quick Response", desc: "Automated incident response and mitigation" }
          ].map(({ icon: Icon, title, desc }, index) => (
            <div 
              key={title} 
              className="p-6 border border-green-500/20 rounded-xl hover:border-green-400/40 transition-all duration-300 bg-black/40 backdrop-blur-sm group hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Icon className="w-8 h-8 mb-4 text-green-400 group-hover:text-green-300 transition-colors" />
              <h3 className="text-xl mb-2 font-bold">{title}</h3>
              <p className="text-green-500/70 text-sm">{desc}</p>
            </div>
          ))}
        </section>

        {/* Description */}
        <section className="text-center max-w-3xl mx-auto mb-20 p-8 rounded-xl bg-black/40 backdrop-blur-sm reveal reveal-delay-3">
          <p className="text-xl text-green-400/90 leading-relaxed">
            SecureCode Auditor is the ultimate defense system for your digital infrastructure. 
            Using advanced AI and real-time monitoring to protect your code from evolving threats.
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-green-500/70 reveal">
          <div className="mb-4 flex justify-center gap-4">
            {/* <a href="mailto:contact@securecodeauditor.com" className="hover:text-green-400 transition-colors inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-green-500/20 hover:border-green-400/40">
              <span className="hidden md:inline">Initialize Contact:</span>
              contact@securecodeauditor.com
            </a> */}
            <button
              onClick={() => navigate('/beta')}
              className="hover:text-green-400 transition-colors inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-green-500/20 hover:border-green-400/40 bg-green-500/10 hover:bg-green-500/20"
            >
              Try Out Beta
            </button>
          </div>
          <p className="animate-pulse-slow">Join the Revolution. Secure Your Code.</p>
        </footer>
      </div>
    </div>
  );
}

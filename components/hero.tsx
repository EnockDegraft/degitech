"use client"

import { useState, useEffect } from 'react';
import { Code2, Rocket } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Secure", "Scalable", "Robust", "Modern"];
  const period = 1500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [text, typingSpeed]);

  const tick = () => {
    let i = loopNum % words.length;
    let fullText = words[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed(prev => prev / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };

  return (
    <section className="relative overflow-hidden bg-background pt-16 pb-24 lg:pt-32 lg:pb-40">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-accent/20 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new projects
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              We build <br />
              <span className="text-primary min-h-[1.2em] inline-block">
                {text}
                <span className="animate-pulse ml-1 border-r-4 border-primary"></span>
              </span> 
              <br />
              digital solutions.
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Tailored web and mobile experiences for businesses, startups, and institutions seeking high-performance engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] transition-all flex items-center justify-center gap-2">
                Start Your Project <Rocket size={18} />
              </button>
              <button className="px-8 py-4 border border-input bg-background rounded-xl font-semibold hover:bg-accent transition-colors">
                View Portfolio
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-border/60">
              {[
                { number: "10+", label: "Projects" },
                { number: "20+", label: "Clients" },
                { number: "5+", label: "Years" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-foreground">{stat.number}</div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual Mockup */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative aspect-square md:aspect-video lg:aspect-square bg-slate-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center">
              
              {/* Terminal UI Mockup */}
              <div className="w-full h-full p-6 font-mono text-sm sm:text-base overflow-hidden">
                <div className="flex gap-1.5 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="space-y-2">
                  <p className="text-emerald-400 font-bold">$ npm init project-future</p>
                  <p className="text-slate-400"> {">"} Initializing architecture...</p>
                  <p className="text-slate-400"> {">"} Applying security protocols...</p>
                  <p className="text-blue-400"> {">"} Scaling infrastructure [##########] 100%</p>
                  <div className="pt-4 flex justify-center">
                     <Code2 size={80} className="text-primary/40 animate-pulse" />
                  </div>
                  <p className="text-center text-primary/60 mt-4 font-sans text-xl font-bold tracking-widest">BUILDING THE FUTURE</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
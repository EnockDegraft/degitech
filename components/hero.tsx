"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Code2, Rocket, ArrowRight } from 'lucide-react';

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
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-primary/5 pt-20 pb-32 lg:pt-40 lg:pb-56">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/15 blur-3xl opacity-40 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-primary/10 blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-small-white/[0.03]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[600px]">
          
          {/* Left Column - Enhanced */}
          <div className="space-y-10 animate-in fade-in slide-in-from-left-8 duration-1000">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-primary/15 to-accent/10 border border-primary/30 text-primary text-sm font-semibold backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <span>Available for new projects</span>
            </div>

            {/* Main Headline - Enhanced Typography */}
            <div className="space-y-6">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] text-foreground">
                We build <br />
                <span className="relative inline-block">
                  {/* Gradient background for text effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-accent blur-xl opacity-40 -z-10" />
                  <span className="relative bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                    {text}
                  </span>
                </span>
                <br />
                <span className="text-foreground">digital solutions</span>
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed font-light">
              Tailored web and mobile experiences for businesses, startups, and institutions seeking high-performance engineering.
            </p>

            {/* CTA Buttons - Enhanced */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/consultation" className="group relative px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl font-bold text-lg overflow-hidden hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2">
                <span className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  Start Your Project
                  <Rocket size={20} className="group-hover:translate-y-[-2px] transition-transform" />
                </span>
              </Link>
              <Link href="/portfolio" className="group px-8 py-4 border-2 border-primary/50 bg-primary/5 rounded-xl font-semibold text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-2">
                View Portfolio
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Stats Section - Enhanced */}
            <div className="grid grid-cols-3 gap-6 pt-12 border-t border-border/50">
              {[
                { number: "10+", label: "Projects", icon: "📦" },
                { number: "20+", label: "Clients", icon: "👥" },
                { number: "5+", label: "Years", icon: "⭐" },
              ].map((stat) => (
                <div key={stat.label} className="group cursor-pointer">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-4xl font-black text-foreground group-hover:text-primary transition-colors">{stat.number}</div>
                  <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Enhanced Visual Mockup */}
          <div className="relative group animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            {/* Floating elements around the main box */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-all duration-500" />
            <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-accent/10 rounded-full blur-xl group-hover:bg-accent/20 transition-all duration-500" />
            
            {/* Main box with enhanced border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 via-accent/30 to-primary/40 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-all duration-500 group-hover:blur-3xl" />
            
            <div className="relative aspect-square md:aspect-video lg:aspect-square bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl border border-white/15 overflow-hidden shadow-2xl flex items-center justify-center backdrop-blur-xl">
              
              {/* Terminal UI Mockup - Enhanced */}
              <div className="w-full h-full p-8 font-mono text-sm sm:text-base overflow-hidden flex flex-col justify-between">
                {/* Header */}
                <div>
                  <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500/90 shadow-lg shadow-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/90 shadow-lg shadow-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/90 shadow-lg shadow-green-500/50" />
                  </div>
                  
                  {/* Code lines with animation */}
                  <div className="space-y-3">
                    <p className="text-emerald-400 font-bold text-lg">$ npm init project-future</p>
                    <p className="text-slate-400"> {">"} <span className="text-cyan-400">Initializing</span> architecture...</p>
                    <p className="text-slate-400"> {">"} <span className="text-cyan-400">Applying</span> security protocols...</p>
                    <p className="text-blue-400 font-semibold"> {">"} <span className="text-green-400">Scaling</span> infrastructure <span className="text-emerald-400">[##########]</span> 100%</p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="flex flex-col items-center justify-center space-y-4">
                  <Code2 size={64} className="text-primary/30 animate-bounce" style={{ animationDuration: '2s' }} />
                  <p className="text-center text-primary/70 font-sans text-sm font-bold tracking-widest uppercase">Building the Future</p>
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
import React, { useState, useEffect } from 'react';
import { 
  BrainCircuit, 
  DatabaseZap, 
  Activity, 
  Workflow, 
  Terminal, 
  ArrowRight, 
  Cpu, 
  ShieldCheck, 
  Map, 
  ExternalLink,
  Stethoscope,
  Eye,
  FlaskConical
} from 'lucide-react';

// --- Types ---

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  delay: number;
}

// --- Components ---

const BackgroundEffect = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-primary/20 rounded-full blur-3xl animate-pulse-slow mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-accent/10 rounded-full blur-3xl animate-pulse-slow mix-blend-screen" style={{ animationDelay: '2s' }} />
    </div>
  );
};

const NavigationCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, href, delay }) => {
  const isExternal = href.startsWith('http');

  return (
    <a 
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
      className="group relative flex flex-col glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] animate-fade-in-up h-full"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Hover Gradient Border Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative z-10 flex-1 flex flex-col">
        {/* Header: Icon & Title */}
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-tech-primary/20 group-hover:border-tech-primary/30 transition-colors duration-300">
            <Icon className="w-8 h-8 text-gray-300 group-hover:text-tech-accent transition-colors duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]" />
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-mono text-tech-accent/80 border border-tech-accent/20 rounded px-2 py-0.5 bg-tech-accent/5">
            {isExternal ? 'EXTERNAL_TOOL' : 'SYSTEM_READY'}
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
          {description}
        </p>
      </div>

      {/* Footer: Action Button */}
      <div className="relative z-10 mt-auto">
        <div 
          className="flex items-center justify-between w-full py-3 px-4 rounded-xl bg-white/5 border border-white/10 group-hover:bg-tech-primary group-hover:border-tech-primary/50 group-hover:text-white transition-all duration-300 active:scale-95"
        >
          <span className="text-sm font-semibold tracking-wide">
            {isExternal ? '启动工具' : '立即进入'}
          </span>
          {isExternal ? (
            <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          ) : (
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          )}
        </div>
      </div>
    </a>
  );
};

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      id: 4,
      title: "Python基础原理 (Python Vision Engine)",
      description: "深度梳理python语法的最基础原理，通过物理隐喻（如传送带、开关、标签）和实时动画，将抽象的 Python 核心概念转化为直观的视觉体验。",
      icon: Eye,
      href: "https://python-vision-engine-v1-2.vercel.app/"
    },
    {
      id: 1,
      title: "AI 备考指挥中枢 v3.0 (AI Study Command Center)",
      description: "动态备考战术生成器，通过智能算法将剩余时间、基础水平与生态工具箱精准匹配，生成可视化且量化的作战路线图。",
      icon: BrainCircuit,
      href: "https://dynamic-plan-generator-v3-0.vercel.app/"
    },
    {
      id: 2,
      title: "高级AI训练师全景实战图",
      description: "重组考试知识图谱，提供全景路线图，清晰全面掌握考试核心要求。",
      icon: Map,
      href: "https://ai-trainer-comprehensive-practical.vercel.app/"
    },
    {
      id: 3,
      title: "代码医生 (Code Doctor)",
      description: "解决python报错定位不准、晦涩难懂的世纪难题。利用 AI模型深度解析 Python 代码逻辑，精准定位报错，将晦涩的报错转化为可视化的执行链路。",
      icon: Stethoscope,
      href: "https://code-docter-eight.vercel.app/"
    },
    {
      id: 5,
      title: "高级AI训练师核心函数交互实验室 (Core Function Lab)",
      description: "全面提炼高级AI训练师最核心、最常见的30+核心函数，通过动态动画演示核心函数对数据处理的逻辑，让抽象的代码“活”起来。帮助用户快速理解，迅速记忆。",
      icon: FlaskConical,
      href: "https://function-lab-delta.vercel.app/"
    }
  ];

  return (
    <div className="min-h-screen relative flex flex-col font-sans selection:bg-tech-primary/30 selection:text-white">
      <BackgroundEffect />

      {/* Header Section */}
      <header className={`relative z-10 pt-16 pb-12 px-6 text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-1.5 rounded-full glass-card border-tech-primary/20 text-tech-accent text-xs font-mono tracking-widest uppercase">
          <Cpu className="w-3 h-3" />
          <span>Professional Certification System</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400 mb-4 drop-shadow-sm tracking-tight">
          高级人工智能训练师备考辅助系统
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light">
          为非IT背景的用户开发的一站式专业备考平台，以全新的学习理念助你快速理解Python实现高效备考，预计可以节省超过80%的时间
        </p>
      </header>

      {/* Main Content - Feature Matrix */}
      <main className="relative z-10 flex-1 max-w-7xl mx-auto px-6 w-full pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {features.map((feature, index) => (
            <NavigationCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              href={feature.href}
              delay={index * 150 + 300} // Staggered animation
            />
          ))}
          
          {/* Decorative Filler Card (Visible only on large screens if needed for grid balance, or used for system status) */}
          <div className="hidden lg:flex flex-col justify-center items-center glass-card rounded-2xl p-6 border-dashed border-white/20 animate-fade-in-up" style={{ animationDelay: '1050ms' }}>
             <ShieldCheck className="w-12 h-12 text-gray-600 mb-4" />
             <p className="text-gray-500 font-mono text-sm text-center">
               SYSTEM STATUS: ONLINE<br/>
               VERSION 2.0.4
             </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center border-t border-white/5 bg-slate-950/30 backdrop-blur-md">
        <div className={`transition-opacity duration-1000 delay-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} Artificial Intelligence Trainer System
          </p>
          <p className="text-gray-600 text-xs mt-2 font-mono flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-tech-accent animate-pulse"></span>
            Designed & Developed independently by <span className="text-gray-400 font-bold hover:text-tech-primary transition-colors cursor-default">"水上寒"</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
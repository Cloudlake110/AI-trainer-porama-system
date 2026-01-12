import React, { useState, useEffect } from 'react';
import { 
  BrainCircuit, 
  Map, 
  ArrowRight, 
  Cpu, 
  ExternalLink,
  Stethoscope,
  Eye,
  FlaskConical,
  Clock,
  Calendar,
  Sparkles,
  Home,
  Timer,
  RefreshCw
} from 'lucide-react';

// --- Types ---

interface FeatureCardProps {
  id: number;
  title: string;
  description: string;
  category: string;
  icon: React.ElementType;
  href: string;
  delay: number;
  index: number;
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

const NavigationCard: React.FC<FeatureCardProps> = ({ title, description, category, icon: Icon, href, delay, index }) => {
  const isExternal = href.startsWith('http');
  const stepNumber = String(index + 1).padStart(2, '0');

  return (
    <a 
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
      className="group relative flex flex-col glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] animate-fade-in-up h-full overflow-hidden border-t border-white/10"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Background Number Watermark */}
      <div className="absolute -right-4 -top-6 text-[8rem] font-bold text-white/[0.03] group-hover:text-white/[0.06] transition-colors select-none pointer-events-none font-mono">
        {stepNumber}
      </div>

      {/* Hover Gradient Border Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative z-10 flex-1 flex flex-col">
        {/* Header: Icon & Category */}
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-tech-primary/20 group-hover:border-tech-primary/30 transition-colors duration-300 shadow-lg backdrop-blur-md">
            <Icon className="w-8 h-8 text-gray-300 group-hover:text-tech-accent transition-colors duration-300" />
          </div>
          <div className="flex flex-col items-end">
             <div className="text-xs font-mono text-tech-accent/80 border border-tech-accent/20 rounded px-2 py-0.5 bg-tech-accent/5 mb-1 backdrop-blur-md">
              STEP {stepNumber}
            </div>
            <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">
              {category}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 tracking-wide group-hover:text-tech-accent transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors line-clamp-3">
          {description}
        </p>
      </div>

      {/* Footer: Action Button */}
      <div className="relative z-10 mt-auto pt-4 border-t border-white/5">
        <div 
          className="flex items-center justify-between w-full group/btn"
        >
          <span className="text-sm font-semibold tracking-wide text-tech-primary group-hover:text-white transition-colors">
            {isExternal ? '启动模块' : '进入模块'}
          </span>
          <div className="p-1.5 rounded-full bg-white/5 group-hover:bg-tech-primary transition-colors">
            {isExternal ? (
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
            ) : (
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
            )}
          </div>
        </div>
      </div>
    </a>
  );
};

// 模拟考试倒计时组件
const StatusWidget = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 45, hours: 12, mins: 30 });
  
  // 仅作演示，实际使用时可以设置具体目标日期
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.mins === 0) return { ...prev, hours: prev.hours - 1, mins: 59 };
        return { ...prev, mins: prev.mins - 1 };
      });
    }, 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col h-full justify-between relative overflow-hidden group">
      {/* Decorative pulse background */}
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-tech-primary/10 rounded-full blur-2xl group-hover:bg-tech-primary/20 transition-colors duration-500" />

      <div>
        <div className="flex items-center gap-2 text-tech-accent mb-3">
          <Timer className="w-5 h-5 animate-pulse" />
          <span className="text-xs font-mono tracking-wider uppercase">Exam Countdown</span>
        </div>
        
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-5xl font-mono text-white font-bold tracking-tighter">
            {timeLeft.days}
          </span>
          <span className="text-sm text-gray-400 uppercase font-semibold">Days Left</span>
        </div>
        
        <div className="flex gap-4 text-gray-500 text-sm font-mono border-t border-white/10 pt-2 mt-2">
          <div>
            <span className="text-gray-300">{timeLeft.hours}</span> HRS
          </div>
          <div>
            <span className="text-gray-300">{timeLeft.mins}</span> MINS
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm relative z-10">
        <div className="flex items-center gap-2 mb-2 text-yellow-400">
           <Sparkles className="w-4 h-4" />
           <span className="text-xs font-bold uppercase">每日备考贴士</span>
        </div>
        <p className="text-xs text-gray-300 leading-relaxed italic">
          “AI不仅仅是工具，它是思维的延伸。在理解代码之前，先理解它背后的逻辑物理模型。”
        </p>
      </div>
    </div>
  );
};

// 悬浮主控按钮 - 可复制到子项目
const FloatingControl = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 pointer-events-none">
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        className="pointer-events-auto p-4 bg-tech-primary/90 hover:bg-tech-primary text-white rounded-full shadow-[0_0_20px_rgba(99,102,241,0.4)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:-translate-y-1 group flex items-center gap-0 hover:gap-2 overflow-hidden border border-white/20"
        title="系统主控台"
      >
        <Home className="w-6 h-6" />
        <span className="max-w-0 group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap opacity-0 group-hover:opacity-100 text-sm font-bold">
          主控台
        </span>
      </a>
    </div>
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
      title: "Python 视觉引擎",
      category: "基础夯实 / Foundation",
      description: "通过物理隐喻可视化代码逻辑，让零基础也能直观掌握编程思维。",
      icon: Eye,
      href: "https://python-vision-engine-v1-2.vercel.app/"
    },
    {
      id: 1,
      title: "备考指挥中枢 v3.0",
      category: "战术规划 / Strategy",
      description: "根据个人基础与时间，智能生成量化备考计划，不打无准备之仗。",
      icon: BrainCircuit,
      href: "https://dynamic-plan-generator-v3-0.vercel.app/"
    },
    {
      id: 2,
      title: "全景实战图谱",
      category: "全局视野 / Map",
      description: "上帝视角重组考点，清晰展示知识权重与联系，一张图掌握全书。",
      icon: Map,
      href: "https://ai-trainer-comprehensive-practical.vercel.app/"
    },
    {
      id: 3,
      title: "代码医生 (Code Doctor)",
      category: "问题诊断 / Debug",
      description: "AI深度诊断报错代码，可视化展示错误链路，知其然更知其所以然。",
      icon: Stethoscope,
      href: "https://copy-of-doctor-q4rv.vercel.app/"
    },
    {
      id: 5,
      title: "核心函数实验室",
      category: "深度交互 / Lab",
      description: "30+核心函数动态演示，让抽象的数据处理逻辑在你眼前生动呈现。",
      icon: FlaskConical,
      href: "https://function-lab-delta.vercel.app/"
    }
  ];

  return (
    <div className="min-h-screen relative flex flex-col font-sans selection:bg-tech-primary/30 selection:text-white pb-20">
      <BackgroundEffect />

      {/* Floating Control - Consistent across all modules */}
      <FloatingControl />

      {/* Header Section */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center bg-slate-950/50 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="flex items-center gap-3 text-white/90">
           <div className="p-1.5 bg-tech-primary/20 rounded-lg">
             <Cpu className="w-5 h-5 text-tech-primary" />
           </div>
           <span className="font-bold tracking-tight text-sm md:text-base">AI Trainer System</span>
        </div>
        <div className="flex items-center gap-4">
           <div className="hidden md:flex items-center gap-2 text-xs font-mono text-gray-500">
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
             ONLINE
           </div>
        </div>
      </nav>

      <header className={`relative z-10 pt-32 pb-12 px-6 text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-1.5 rounded-full glass-card border-tech-primary/30 text-tech-accent text-xs font-mono tracking-widest uppercase animate-fade-in shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <Sparkles className="w-3 h-3" />
          System Operational
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-500 mb-6 drop-shadow-sm tracking-tight leading-tight">
          高级人工智能训练师<br/>
          <span className="text-3xl md:text-5xl text-white/40 font-light mt-2 block">备考辅助系统</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed">
          全新的可视化学习理念，预计为您节省 <span className="text-tech-accent font-semibold border-b border-tech-accent/30 pb-0.5">80%</span> 的备考时间。
        </p>
      </header>

      {/* Main Content - Feature Matrix */}
      <main className="relative z-10 flex-1 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <NavigationCard
              key={feature.id}
              index={index}
              {...feature}
              delay={index * 150 + 300} // Staggered animation
            />
          ))}
          
          {/* Functional Widget Card: Exam Status */}
          <div className="flex flex-col glass-card rounded-2xl p-6 border border-white/10 animate-fade-in-up hover:border-tech-primary/30 transition-colors duration-300 shadow-lg" style={{ animationDelay: '1050ms' }}>
             <StatusWidget />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 py-8 text-center border-t border-white/5 bg-slate-950/30 backdrop-blur-md">
        <div className={`transition-opacity duration-1000 delay-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} AI Trainer Certification System
          </p>
          <div className="flex justify-center items-center gap-2 mt-2 text-xs text-gray-600 font-mono">
             <span>v3.5.0-stable</span>
             <span>•</span>
             <span>Designed by <span className="text-gray-400 font-bold">水上寒</span></span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
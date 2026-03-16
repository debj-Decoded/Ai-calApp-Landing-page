import React from 'react';
import {
    Smartphone,
    Zap,
    BrainCircuit,
    Layout,
    Lock,
    LineChart,
    CheckCircle2,
    ArrowRight,
    ShieldCheck,
    Database,
    Cpu
} from 'lucide-react';
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";
import image5 from "./assets/image5.png";
import image6 from "./assets/image6.png";
import image7 from "./assets/image7.png";



const Feature = ({ icon: Icon, title, desc }) => (
    <div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
            <Icon className="text-orange-600 group-hover:text-white" size={24} />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed text-sm">{desc}</p>
    </div>
);

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
            {/* --- Navigation --- */}
            <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-200">
                            <span className="text-white font-black text-xl">S</span>
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-slate-800">SmartDiet</span>
                    </div>
                    <div className="hidden md:flex gap-8 font-medium text-slate-600">
                        <a href="#features" className="hover:text-orange-500 transition-colors">Features</a>
                        <a href="#showcase" className="hover:text-orange-500 transition-colors">Gallery</a>
                        <a href="#stack" className="hover:text-orange-500 transition-colors">Tech Stack</a>
                    </div>
                </div>
            </nav>

            {/* --- Hero Section --- */}
            <section className="pt-40 pb-20 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                            </span>
                            AI-Powered Nutrition Companion
                        </div>
                        <h1 className="text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-8 text-slate-900">
                            Intelligence in <br />
                            <span className="text-orange-500 bg-clip-text">Every Bite.</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                            SmartDiet is a mobile-first product designed to help users make healthier food choices with real-time intelligence and a seamless experience.
                        </p>
                        <div className="flex items-center gap-6">
                            <a href="#showcase" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2 shadow-xl shadow-slate-200 group">
                                Explore App <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="relative flex gap-4">
                        <div className="relative z-10 w-2/3">
                            <img src={image6} alt="Dashboard" className="rounded-[2.5rem] shadow-2xl border-4 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-500" />
                        </div>
                        <div className="w-1/2 mt-20 -ml-20 relative z-20">
                            <img src={image3} alt="Meal Plan" className="rounded-[2.5rem] shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Features Grid --- */}
            <section id="features" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold mb-4">Core Capabilities</h2>
                        <p className="text-slate-500">Optimized for real-device testing, ensuring reliability before production rollout.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Feature
                            icon={BrainCircuit}
                            title="AI Meal Recommendations"
                            desc="Integrated with OpenAI/Gemini to provide personalized diet plans and suggestions tailored to your health goals."
                        />
                        <Feature
                            icon={Zap}
                            title="Real-Time Backend"
                            desc="Powered by Convex, delivering instant updates and scalable full-stack functionality with zero latency."
                        />
                        <Feature
                            icon={Smartphone}
                            title="Cross-Platform App"
                            desc="Built with React Native + Expo, ensuring smooth performance on both iOS and Android devices."
                        />
                        <Feature
                            icon={ShieldCheck}
                            title="Secure Authentication"
                            desc="Firebase Email/Password login ensures safe and reliable access to your personal health data."
                        />
                        <Feature
                            icon={LineChart}
                            title="Data Tracking"
                            desc="Log meals, track macro-nutrients, and receive adaptive recommendations based on your progress."
                        />
                        <Feature
                            icon={Layout}
                            title="Modern UI/UX"
                            desc="Clean, intuitive design principles following premium aesthetic standards for a seamless experience."
                        />
                    </div>
                </div>
            </section>

            {/* --- Tech Stack Section --- */}
            <section id="stack" className="py-24 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16">The Tech Stack</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        <div className="space-y-4">
                            <div className="mx-auto w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                                <Smartphone className="text-blue-500" />
                            </div>
                            <h4 className="font-bold">React Native + Expo</h4>
                            <p className="text-xs text-slate-500">Frontend</p>
                        </div>
                        <div className="space-y-4">
                            <div className="mx-auto w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                                <Database className="text-purple-500" />
                            </div>
                            <h4 className="font-bold">Convex</h4>
                            <p className="text-xs text-slate-500">Full Stack BaaS</p>
                        </div>
                        <div className="space-y-4">
                            <div className="mx-auto w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                                <Cpu className="text-green-500" />
                            </div>
                            <h4 className="font-bold">Gemini AI</h4>
                            <p className="text-xs text-slate-500">AI Layer</p>
                        </div>
                        <div className="space-y-4">
                            <div className="mx-auto w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                                <Lock className="text-orange-500" />
                            </div>
                            <h4 className="font-bold">Firebase</h4>
                            <p className="text-xs text-slate-500">Authentication</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- App Interface Showcase --- */}
            <section id="showcase" className="py-24 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16 text-center lg:text-left">
                        <h2 className="text-4xl font-bold mb-4">Inside SmartDiet</h2>
                        <p className="text-slate-400">Experience a modern UI designed for clarity and speed.</p>
                    </div>
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        <div className="break-inside-avoid"><img src={image1} className="rounded-3xl hover:opacity-90 transition-opacity" alt="App Screen" /></div>
                        <div className="break-inside-avoid bg-orange-500 p-8 rounded-3xl h-64 flex flex-col justify-end">
                            <h4 className="text-2xl font-bold mb-2">Modern UX</h4>
                            <p className="text-orange-100">Responsive principles for every mobile device size.</p>
                        </div>
                        <div className="break-inside-avoid"><img src={image2} className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover rounded-3xl shadow-xl"
                            alt="App Screen" /></div>
                        <div className="break-inside-avoid"><img src={image7} className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover rounded-3xl shadow-xl"
                            alt="App Screen" /></div>
                        <div className="break-inside-avoid"><img src={image4} className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover rounded-3xl shadow-xl"
                            alt="App Screen" /></div>
                    </div>
                </div>
            </section>

            {/* --- Footer --- */}
            <footer className="py-20 bg-white px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="flex justify-center items-center gap-2 mb-8">
                        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-black text-sm">S</span>
                        </div>
                        <span className="text-xl font-bold text-slate-800 tracking-tight">SmartDiet</span>
                    </div>
                    <p className="text-slate-500 max-w-md mx-auto mb-8">
                        Making healthier food choices easier through real-time intelligence.
                    </p>
                    <div className="text-slate-400 text-sm border-t border-slate-100 pt-8">
                        © 2026 SmartDiet — Built with React Native, Expo, and Convex.
                    </div>
                </div>
            </footer>
        </div>
    );
}
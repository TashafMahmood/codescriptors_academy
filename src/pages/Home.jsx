import React, { useState, useEffect, useRef } from 'react';
import { 
    Code2, ArrowRight, X, ChevronRight, Terminal, MonitorPlay, 
    Globe, Laptop, DollarSign, Users, Video, FolderGit2, 
    MessageCircleQuestion, Award, Target, CreditCard, CheckCircle2,
    Flame, Database, LayoutTemplate, Braces, Sparkles, ArrowUpRight,
    MapPin, Phone, Mail, Menu, ArrowLeft, Calendar, BookOpen, Clock,
    Cpu
} from 'lucide-react';

const customStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

    :root {
        --bg-deep: #030504;
        --surface: #0a0f0c;
        --surface-light: #121a14;
        --border-subtle: rgba(16, 185, 129, 0.15);
        --brand-main: #10b981; /* Emerald 500 */
        --brand-light: #34d399; /* Emerald 400 */
        --brand-dark: #047857; /* Emerald 700 */
    }

    body {
        font-family: 'Inter', sans-serif;
        background-color: var(--bg-deep);
        color: #e5e7eb;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4, h5, h6, .font-display {
        font-family: 'Space Grotesk', sans-serif;
    }

    /* Premium Glass Cards with 3D Hover */
    .glass-card {
        background: linear-gradient(180deg, rgba(10, 15, 12, 0.7) 0%, rgba(5, 8, 6, 0.9) 100%);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border: 1px solid var(--border-subtle);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        transform-style: preserve-3d;
    }
    
    @media (hover: hover) {
        .glass-card:hover {
            border-color: rgba(16, 185, 129, 0.5);
            box-shadow: 0 20px 40px -10px rgba(16, 185, 129, 0.2), 0 0 20px rgba(16, 185, 129, 0.1) inset;
            transform: translateY(-5px);
        }
    }
    
    .glass-card-static {
        background: rgba(10, 15, 12, 0.6);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border: 1px solid var(--border-subtle);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
    }

    /* Ultra Glass for Highlights */
    .ultra-glass {
        background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
        transition: all 0.4s ease;
    }
    
    @media (hover: hover) {
        .ultra-glass:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 40px -10px rgba(0, 0, 0, 0.5);
        }
    }

    .glass-nav {
        background: rgba(3, 5, 4, 0.85);
        backdrop-filter: blur(24px);
        border-bottom: 1px solid rgba(16, 185, 129, 0.15);
    }

    /* Animated Gradients */
    .text-gradient {
        background: linear-gradient(to right, #ffffff, #34d399, #10b981, #ffffff);
        background-size: 300% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: textShine 5s linear infinite;
    }
    
    @keyframes textShine {
        to { background-position: 300% center; }
    }

    /* Button Shine Effect */
    .btn-shine {
        position: relative;
        overflow: hidden;
    }
    .btn-shine::after {
        content: '';
        position: absolute;
        top: -50%; right: -50%; bottom: -50%; left: -50%;
        background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.4) 50%, rgba(255,255,255,0));
        transform: rotateZ(60deg) translate(-5em, 7.5em);
        opacity: 0;
        transition: all 0.6s ease-out;
    }
    .btn-shine:hover::after {
        opacity: 1;
        transform: rotateZ(60deg) translate(1em, -9em);
    }

    /* Infinite Marquee */
    .scroller {
        mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
    }
    .scroller__inner {
        display: flex;
        flex-wrap: nowrap;
        animation: scroll 35s forwards linear infinite;
    }
    @keyframes scroll {
        to { transform: translate(-50%); }
    }

    /* GSAP Reveal Utilities */
    .reveal-wrap {
        overflow: hidden;
        display: inline-block;
        vertical-align: top;
    }
    .reveal-text {
        display: inline-block;
        transform: translateY(100%);
    }

    /* Custom Scrollbar */
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: var(--bg-deep); }
    ::-webkit-scrollbar-thumb { background: #1a2e23; border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: var(--brand-main); }
    
    /* View Transitions */
    .page-transition {
        animation: fadeIn 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
    }
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(15px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .page-exit {
        animation: fadeOut 0.3s ease-in forwards;
    }
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-10px); }
    }
    
    /* Ambient Pulse */
    @keyframes pulse-slow {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 0.6; transform: scale(1.05); }
    }
    .animate-pulse-slow {
        animation: pulse-slow 6s ease-in-out infinite;
    }
`;

// --- Course Data ---
const courseDetailsData = {
    basics: {
        id: 'basics',
        title: 'Web Development Basics',
        level: 'Beginners',
        duration: '6 Weeks',
        icon: Code2,
        bgGradient: 'from-emerald-400 to-emerald-600',
        shadowColor: 'shadow-emerald-500/20',
        theme: {
            text: 'text-emerald-400',
            bgLight: 'bg-emerald-400/10',
            borderLight: 'border-emerald-400/20',
            hoverBg: 'hover:bg-emerald-400',
            hoverBorder: 'hover:border-emerald-400',
            glowBase: 'bg-emerald-400/20',
            glowHover: 'group-hover:bg-emerald-400/40',
            glowPulse: 'bg-emerald-400/10',
            hoverTextGradient: 'group-hover:from-emerald-400 group-hover:to-emerald-600'
        },
        description: 'Learn how websites are made from the ground up. This course covers HTML for structure, CSS for design, and JavaScript for basic interactivity. Perfect for absolute beginners with no prior coding background.',
        skills: ['HTML5', 'CSS3', 'Responsive Design', 'JavaScript Basics', 'DOM Manipulation'],
        syllabus: [
            { week: 'Week 1', title: 'How the Web Works & HTML5', topics: ['Internet fundamentals', 'HTML tags & structure', 'Forms, tables, and semantic HTML', 'Building your first static page'] },
            { week: 'Week 2', title: 'Styling with CSS3', topics: ['CSS Selectors & Properties', 'Colors, typography & backgrounds', 'The Box Model (Margin, Padding, Borders)', 'CSS Transitions & Hover effects'] },
            { week: 'Week 3', title: 'Advanced CSS & Layouts', topics: ['CSS Flexbox for 1D layouts', 'CSS Grid for 2D layouts', 'Media queries & Responsive Design', 'Mobile-first approach'] },
            { week: 'Week 4', title: 'JavaScript Fundamentals', topics: ['Variables, Data Types & Operators', 'If/Else statements & Logic', 'Loops (For, While)', 'Functions & Scope'] },
            { week: 'Week 5', title: 'Interactive Web Pages (DOM)', topics: ['Selecting elements', 'Event Listeners (Clicks, inputs)', 'Modifying CSS with JS', 'Building a dynamic To-Do list'] },
            { week: 'Week 6', title: 'Final Project & Hosting', topics: ['Putting it all together', 'Debugging best practices', 'Introduction to Git & GitHub', 'Deploying your site live on Netlify/Vercel'] }
        ]
    },
    frontend: {
        id: 'frontend',
        title: 'Frontend Mastery',
        level: 'Intermediate',
        duration: '8 Weeks',
        icon: Flame,
        bgGradient: 'from-[#d4ff66] to-[#a3cc14]',
        shadowColor: 'shadow-[#caff33]/20',
        theme: {
            text: 'text-[#caff33]',
            bgLight: 'bg-[#caff33]/10',
            borderLight: 'border-[#caff33]/20',
            hoverBg: 'hover:bg-[#caff33]',
            hoverBorder: 'hover:border-[#caff33]',
            glowBase: 'bg-[#caff33]/20',
            glowHover: 'group-hover:bg-[#caff33]/40',
            glowPulse: 'bg-[#caff33]/10',
            hoverTextGradient: 'group-hover:from-[#d4ff66] group-hover:to-[#a3cc14]'
        },
        description: 'Designed for students who already know the basics. Learn advanced JavaScript and build modern, highly-responsive user interfaces using React.js, modern CSS frameworks, and state management techniques.',
        skills: ['Advanced JS (ES6+)', 'React.js', 'React Hooks', 'Tailwind CSS', 'API Integration', 'State Management'],
        syllabus: [
            { week: 'Week 1', title: 'Advanced JavaScript (ES6+)', topics: ['Arrow functions & Template literals', 'Destructuring & Spread operators', 'Map, Filter, Reduce arrays', 'Promises & Async/Await'] },
            { week: 'Week 2', title: 'Introduction to React.js', topics: ['Why React? Virtual DOM', 'Components & JSX', 'Props and Component reusability', 'React Developer Tools'] },
            { week: 'Week 3', title: 'State & Event Handling', topics: ['useState hook', 'Handling forms and inputs in React', 'Conditional rendering', 'Building a dynamic counter & interactive UI'] },
            { week: 'Week 4', title: 'Side Effects & Data Fetching', topics: ['useEffect hook', 'Component lifecycle', 'Fetching data from REST APIs', 'Handling loading and error states'] },
            { week: 'Week 5', title: 'Modern Styling', topics: ['Introduction to Tailwind CSS', 'Utility-first styling methodologies', 'Building responsive layouts fast', 'CSS Modules & Styled Components overview'] },
            { week: 'Week 6', title: 'Routing & Navigation', topics: ['React Router DOM', 'Creating multi-page React apps', 'Dynamic routing & URL parameters', 'Nested routes'] },
            { week: 'Week 7', title: 'Advanced State Management', topics: ['Prop drilling vs Context API', 'useContext & useReducer', 'Introduction to Redux Toolkit (overview)', 'Managing global app state'] },
            { week: 'Week 8', title: 'Performance & Capstone Project', topics: ['useMemo & useCallback', 'Code splitting & Lazy loading', 'Building a complete E-commerce frontend', 'Deploying React applications'] }
        ]
    },
    fullstack: {
        id: 'fullstack',
        title: 'Full-Stack Mastery',
        level: 'Career-Focused',
        duration: '16 Weeks',
        icon: Database,
        bgGradient: 'from-cyan-400 to-blue-500',
        shadowColor: 'shadow-cyan-500/20',
        theme: {
            text: 'text-cyan-400',
            bgLight: 'bg-cyan-400/10',
            borderLight: 'border-cyan-400/20',
            hoverBg: 'hover:bg-cyan-400',
            hoverBorder: 'hover:border-cyan-400',
            glowBase: 'bg-cyan-400/20',
            glowHover: 'group-hover:bg-cyan-400/40',
            glowPulse: 'bg-cyan-400/10',
            hoverTextGradient: 'group-hover:from-cyan-400 group-hover:to-blue-500'
        },
        description: 'A complete end-to-end program teaching both frontend and backend development. Learn to build full web applications with databases, secure authentication, scalable architectures, and live deployment for real-world use.',
        skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Authentication (JWT)', 'RESTful APIs', 'Cloud Deployment'],
        syllabus: [
            { week: 'Weeks 1-4', title: 'Frontend Deep Dive', topics: ['Advanced React patterns', 'State management (Redux)', 'Tailwind CSS mastery', 'Building the UI for our Capstone App'] },
            { week: 'Weeks 5-6', title: 'Node.js Fundamentals', topics: ['Node.js runtime & architecture', 'Modules & File System (fs)', 'NPM & package management', 'Creating basic web servers'] },
            { week: 'Weeks 7-8', title: 'Express.js & REST APIs', topics: ['Express framework setup', 'Routing & Middleware', 'Handling requests and responses', 'REST API design principles'] },
            { week: 'Weeks 9-10', title: 'Databases with MongoDB', topics: ['NoSQL vs SQL', 'Setting up MongoDB Atlas', 'Mongoose ODM models & schemas', 'CRUD operations with database'] },
            { week: 'Weeks 11-12', title: 'Authentication & Security', topics: ['User registration & passwords (Bcrypt)', 'JSON Web Tokens (JWT)', 'Protecting API routes', 'Handling CORS & common vulnerabilities'] },
            { week: 'Weeks 13-14', title: 'MERN Integration', topics: ['Connecting React frontend to Express backend', 'CORS configuration', 'Managing state with remote data', 'Handling file uploads (Images)'] },
            { week: 'Week 15', title: 'Deployment & Architecture', topics: ['Environment variables (.env)', 'Deploying Frontend to Vercel', 'Deploying Backend to Render/Heroku', 'Setting up CI/CD basics'] },
            { week: 'Week 16', title: 'Final Career Capstone', topics: ['Building a full-stack SaaS application', 'Code review & Refactoring', 'Resume & GitHub portfolio building', 'Mock interviews'] }
        ]
    }
};

export default function Home() {
    const mainRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    // View state
    const [activeView, setActiveView] = useState({ type: 'home', data: null });
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [renderView, setRenderView] = useState({ type: 'home', data: null });

    // Handle smooth view transitions
    useEffect(() => {
        if (activeView.type !== renderView.type || activeView.data?.id !== renderView.data?.id) {
            setIsTransitioning(true);
            const timer = setTimeout(() => {
                setRenderView(activeView);
                window.scrollTo({ top: 0, behavior: 'instant' });
                setIsTransitioning(false);
            }, 300); // Duration of fadeOut animation
            return () => clearTimeout(timer);
        }
    }, [activeView, renderView]);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setIsModalOpen(false);
        alert("Class Booked Successfully! We will send the details to your email.");
    };

    const navigateToHome = (e, targetId = null) => {
        if(e) e.preventDefault();
        setActiveView({ type: 'home', data: null });
        setIsMobileMenuOpen(false);
        
        if (targetId) {
            setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 400); // Wait for transition
        }
    };

    const navigateToCourse = (courseId) => {
        setActiveView({ type: 'course', data: courseDetailsData[courseId] });
    };

    // Re-initialize GSAP on view render
    useEffect(() => {
        if (isTransitioning) return; // Don't run while fading out
        
        let ctx;
        const initAnimations = () => {
            const gsap = window.gsap;
            const ScrollTrigger = window.ScrollTrigger;
            if (!gsap || !ScrollTrigger) return;
            
            // Kill old triggers to prevent overlap on re-render
            ScrollTrigger.getAll().forEach(t => t.kill());

            ctx = gsap.context(() => {
                const tl = gsap.timeline();
                
                // Hero Reveal Animation
                if(document.querySelector(".reveal-text")) {
                    tl.to(".reveal-text", {
                        y: "0%",
                        duration: 1.2,
                        stagger: 0.1,
                        ease: "power4.out",
                        delay: 0.1
                    })
                    .fromTo(".hero-fade", 
                        { opacity: 0, y: 30 },
                        { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "power3.out" },
                        "-=0.8"
                    );
                }

                // Scroll Animations for Section Headers
                gsap.utils.toArray('.gsap-header').forEach(header => {
                    gsap.fromTo(header, 
                        { opacity: 0, y: 40 },
                        {
                            opacity: 1, y: 0, duration: 1, ease: "power3.out",
                            scrollTrigger: { trigger: header, start: "top 80%" }
                        }
                    );
                });

                // Grid / Card Stagger Reveal (3D Flip effect)
                gsap.utils.toArray('.gsap-stagger-grid').forEach(grid => {
                    const items = grid.querySelectorAll('.gsap-item');
                    gsap.fromTo(items,
                        { opacity: 0, y: 40, rotateX: 5 },
                        {
                            opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.1, ease: "power2.out",
                            scrollTrigger: { trigger: grid, start: "top 85%" }
                        }
                    );
                });

                // Ambient Glow Parallax
                if(document.querySelector(".ambient-glow-1")) {
                    gsap.to(".ambient-glow-1", {
                        yPercent: 30, xPercent: -20, ease: "none",
                        scrollTrigger: { trigger: "body", start: "top top", end: "bottom top", scrub: 1 }
                    });
                }
                if(document.querySelector(".ambient-glow-2")) {
                    gsap.to(".ambient-glow-2", {
                        yPercent: -40, xPercent: 20, ease: "none",
                        scrollTrigger: { trigger: "body", start: "top top", end: "bottom top", scrub: 1 }
                    });
                }

            }, mainRef);
        };

        if (window.gsap && window.ScrollTrigger) {
            setTimeout(initAnimations, 100);
        } else {
            const script1 = document.createElement('script');
            script1.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
            document.head.appendChild(script1);

            script1.onload = () => {
                const script2 = document.createElement('script');
                script2.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
                document.head.appendChild(script2);
                script2.onload = () => {
                    window.gsap.registerPlugin(window.ScrollTrigger);
                    initAnimations();
                };
            };
        }
        return () => { if (ctx) ctx.revert(); };
    }, [renderView, isTransitioning]);

    return (
        <div ref={mainRef} className="relative min-h-screen">
            <style dangerouslySetInnerHTML={{ __html: customStyles }} />
            
            {/* Ambient Background Glows */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="ambient-glow-1 absolute top-[0%] left-[-10%] w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px] animate-pulse-slow"></div>
                <div className="ambient-glow-2 absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-emerald-400/5 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
            </div>

            {/* Navbar */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass-nav shadow-2xl' : 'py-6 bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-5 lg:px-6 flex justify-between items-center">
                    <a href="#" onClick={(e) => navigateToHome(e)} className="flex items-center gap-2 group relative z-50">
                        <Terminal size={26} className="text-emerald-500 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="font-display font-bold text-[19px] sm:text-xl text-white tracking-tight">
                            CodeScriptors <span className="bg-emerald-500/20 text-emerald-400 text-[10px] px-2 py-0.5 rounded-full ml-1 border border-emerald-500/30 uppercase tracking-wider hidden sm:inline-block">Academy</span>
                        </span>
                    </a>
                    
                    <div className="hidden md:flex gap-8 items-center bg-white/5 px-6 py-2.5 rounded-full border border-white/5 backdrop-blur-md shadow-lg">
                        <a href="#" onClick={(e) => navigateToHome(e, 'home')} className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors">Home</a>
                        <a href="#" onClick={(e) => navigateToHome(e, 'courses')} className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors">Courses</a>
                        <a href="#" onClick={(e) => navigateToHome(e, 'about')} className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors">About</a>
                        <a href="#" onClick={(e) => navigateToHome(e, 'projects')} className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors">Projects</a>
                    </div>

                    <div className="hidden md:block relative z-50">
                        <button onClick={() => setIsModalOpen(true)} className="bg-emerald-500 btn-shine text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all duration-300">
                            Book Free Class
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button 
                        className="md:hidden text-white relative z-50 hover:text-emerald-400 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`md:hidden absolute top-0 left-0 w-full bg-[#030504]/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'} pt-24 pb-8 px-6 flex flex-col gap-6 shadow-2xl`}>
                    <a href="#" onClick={(e) => navigateToHome(e, 'home')} className="text-lg font-medium text-gray-300 hover:text-emerald-400 transition-colors">Home</a>
                    <a href="#" onClick={(e) => navigateToHome(e, 'courses')} className="text-lg font-medium text-gray-300 hover:text-emerald-400 transition-colors">Courses</a>
                    <a href="#" onClick={(e) => navigateToHome(e, 'about')} className="text-lg font-medium text-gray-300 hover:text-emerald-400 transition-colors">About</a>
                    <a href="#" onClick={(e) => navigateToHome(e, 'projects')} className="text-lg font-medium text-gray-300 hover:text-emerald-400 transition-colors">Projects</a>
                    <button onClick={() => { setIsModalOpen(true); setIsMobileMenuOpen(false); }} className="bg-emerald-500 text-black px-6 py-3.5 rounded-full text-base font-bold hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300 w-full mt-4">
                        Book Free Class
                    </button>
                </div>
            </nav>

            {/* Content Wrapper for Transitions */}
            <div className={isTransitioning ? 'page-exit' : 'page-transition'} key={renderView.data?.id || 'home'}>
                {/* View Management: Render Home or Course Detail */}
                {renderView.type === 'home' ? (
                    <div>
                        {/* Hero Section */}
                        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 text-center z-10 bg-[url('https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center bg-fixed">
                            <div className="absolute inset-0 bg-gradient-to-b from-[#030504]/70 via-[#030504]/85 to-[#030504] backdrop-blur-[2px]"></div> {/* Overlay */}
                            
                            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
                                <h1 className="font-display text-4xl sm:text-5xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05] mb-4 md:mb-6 drop-shadow-2xl">
                                    <span className="reveal-wrap"><span className="reveal-text text-white">Become a</span></span> <br/>
                                    <span className="reveal-wrap"><span className="reveal-text text-gradient">Web Developer.</span></span>
                                </h1>
                                
                                <h2 className="hero-fade font-display text-lg sm:text-xl md:text-2xl text-emerald-50 font-medium mb-6 sm:mb-8 text-shadow-sm">
                                    Learn, Build & Get Job Ready.
                                </h2>

                                <p className="hero-fade text-sm sm:text-base text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-2">
                                    Learn HTML, CSS, JavaScript, React & Node.js from industry experts. Live, practical, and beginner-friendly classes designed for:
                                </p>

                                {/* Audience Tags */}
                                <div className="hero-fade flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12">
                                    {['Non-IT Learners', 'College Students', 'Housewives', 'Working Professionals', 'Fresh Graduates'].map((tag, idx) => (
                                        <span key={idx} className="bg-white/5 border border-white/10 text-gray-300 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-white transition-all cursor-default backdrop-blur-md shadow-lg">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                
                                {/* Hero Buttons */}
                                <div className="hero-fade flex flex-col sm:flex-row justify-center gap-4 sm:gap-5 w-full sm:w-auto">
                                    <button onClick={() => setIsModalOpen(true)} className="bg-emerald-500 btn-shine text-black px-6 py-3 sm:px-8 sm:py-3.5 rounded-full font-bold text-sm sm:text-base hover:bg-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
                                        Book a Free Class <ArrowRight size={18} />
                                    </button>
                                    <button onClick={(e) => navigateToHome(e, 'courses')} className="bg-white/5 backdrop-blur-md text-white border border-white/20 px-6 py-3 sm:px-8 sm:py-3.5 rounded-full font-bold text-sm sm:text-base hover:bg-white/10 hover:-translate-y-1 hover:border-emerald-500/50 transition-all duration-300 w-full sm:w-auto">
                                        Explore Courses
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Tech Stack Marquee */}
                        <section className="py-6 sm:py-8 border-y border-white/5 bg-[#030504]/80 backdrop-blur-md relative z-20 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                            <div className="scroller w-full max-w-7xl mx-auto">
                                <div className="scroller__inner flex gap-12 lg:gap-24 items-center w-max">
                                    {[...Array(3)].map((_, i) => (
                                        <React.Fragment key={i}>
                                            <div className="flex items-center gap-3 text-emerald-500/50 hover:text-emerald-400 transition-colors duration-300"><Code2 size={24} className="sm:w-7 sm:h-7"/> <span className="font-display font-bold text-lg sm:text-xl tracking-wider">HTML/CSS</span></div>
                                            <div className="flex items-center gap-3 text-emerald-500/50 hover:text-emerald-400 transition-colors duration-300"><Braces size={24} className="sm:w-7 sm:h-7"/> <span className="font-display font-bold text-lg sm:text-xl tracking-wider">JAVASCRIPT</span></div>
                                            <div className="flex items-center gap-3 text-emerald-500/50 hover:text-emerald-400 transition-colors duration-300"><LayoutTemplate size={24} className="sm:w-7 sm:h-7"/> <span className="font-display font-bold text-lg sm:text-xl tracking-wider">REACT.JS</span></div>
                                            <div className="flex items-center gap-3 text-emerald-500/50 hover:text-emerald-400 transition-colors duration-300"><Database size={24} className="sm:w-7 sm:h-7"/> <span className="font-display font-bold text-lg sm:text-xl tracking-wider">NODE.JS</span></div>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Why Learn Web Development (Career Growth) */}
                        <section id="about" className="py-20 md:py-32 relative z-10 bg-[#060a08] overflow-hidden">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                                <div className="gsap-header text-center mb-12 sm:mb-20">
                                    <span className="inline-block bg-emerald-500/10 text-emerald-400 text-[10px] sm:text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.2)] mb-4">Career Growth</span>
                                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">Why Learn Web Development?</h2>
                                    <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-lg">Web development is one of the most in-demand skills today. It helps you build real products, earn globally, and grow your career.</p>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                                    <div className="gsap-stagger-grid grid sm:grid-cols-2 gap-4 sm:gap-6">
                                        {[
                                            { icon: <Target size={24}/>, title: 'High Demand Skill', desc: 'Developers are needed globally in startups & enterprise companies.' },
                                            { icon: <Globe size={24}/>, title: 'Work From Anywhere', desc: 'Build applications remotely from anywhere in the world.' },
                                            { icon: <Users size={24}/>, title: 'Career Switch Friendly', desc: 'No tech background required. Start from scratch and grow.' },
                                            { icon: <DollarSign size={24}/>, title: 'Multiple Income Options', desc: 'Get a full-time job, freelance, or build your own SaaS.' }
                                        ].map((item, index) => (
                                            <div key={index} className="gsap-item glass-card p-5 sm:p-6 rounded-2xl group hover:bg-[#0a1410]">
                                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center mb-4 sm:mb-5 border border-emerald-500/20 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                                                    {item.icon}
                                                </div>
                                                <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-emerald-400 transition-colors">{item.title}</h4>
                                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="gsap-header relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(16,185,129,0.15)] border border-white/10 group h-[350px] sm:h-full sm:min-h-[500px]">
                                        <div className="absolute inset-0 bg-emerald-500/20 group-hover:bg-emerald-500/0 transition-colors duration-700 z-10 mix-blend-overlay"></div>
                                        <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop" alt="Advanced coding setup" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#030504] via-[#030504]/40 to-transparent z-10"></div>
                                        
                                        <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 bg-[#0a1410]/80 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-emerald-500/20 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="flex items-center gap-3 sm:gap-4">
                                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.6)]">
                                                    <Award size={20} className="text-black sm:w-6 sm:h-6" />
                                                </div>
                                                <div>
                                                    <h5 className="font-display font-bold text-white text-base sm:text-lg mb-0.5 sm:mb-1">Learn Once. Build Forever.</h5>
                                                    <p className="text-emerald-400 text-xs sm:text-sm">Skills that grow with you.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Course Highlights (Ultra Glass Design) */}
                        <section id="courses" className="py-20 md:py-32 relative z-10 bg-gradient-to-b from-[#0a1410] to-[#030504]">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                                <div className="gsap-header text-center mb-16 md:mb-20">
                                    <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">Course Highlights</h2>
                                    <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-lg">Live, hands-on classes focused on real projects, clear explanations, and practical skills.</p>
                                </div>

                                <div className="gsap-stagger-grid grid md:grid-cols-3 gap-6 sm:gap-8">
                                    {/* Map over courses for highlights */}
                                    {Object.values(courseDetailsData).map((course, idx) => (
                                        <div key={course.id} className="gsap-item ultra-glass rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 flex flex-col h-full relative overflow-hidden group">
                                            <div className={`absolute -top-20 -right-20 w-48 h-48 ${course.theme.glowBase} blur-[60px] rounded-full ${course.theme.glowHover} transition-colors duration-500`}></div>
                                            
                                            <div className={`inline-block bg-white/5 ${course.theme.text} font-mono text-[10px] sm:text-xs px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-6 sm:mb-8 w-max border border-white/10 backdrop-blur-md`}>Level: {course.level}</div>
                                            
                                            <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${course.bgGradient} text-black flex items-center justify-center mb-6 sm:mb-8 shadow-lg ${course.shadowColor} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                                                <course.icon className="w-6 h-6 sm:w-[30px] sm:h-[30px]" />
                                            </div>
                                            
                                            <h3 className={`font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${course.theme.hoverTextGradient} transition-all`}>{course.title}</h3>
                                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 flex-1 line-clamp-4">
                                                {course.description}
                                            </p>
                                            
                                            <div className="mt-auto pt-5 sm:pt-6 border-t border-white/10">
                                                <div className="flex items-center justify-between mb-5 sm:mb-6">
                                                    <span className="text-gray-500 text-xs sm:text-sm flex items-center gap-1 sm:gap-2"><Clock size={14}/> Duration</span>
                                                    <span className={`${course.theme.text} font-bold text-xs sm:text-sm ${course.theme.bgLight} px-2.5 py-1 rounded-lg`}>{course.duration}</span>
                                                </div>
                                                <button onClick={() => navigateToCourse(course.id)} className={`w-full bg-white/5 border border-white/10 text-white font-bold text-sm sm:text-base py-3 sm:py-4 rounded-xl ${course.theme.hoverBg} hover:text-black ${course.theme.hoverBorder} hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 flex justify-center items-center gap-2`}>
                                                    View Details <ArrowUpRight size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Why Choose Us Grid */}
                        <section className="py-20 md:py-32 relative z-10 bg-[#040806]">
                            <div className="max-w-7xl mx-auto px-4 md:px-6">
                                <div className="gsap-header text-center mb-12 md:mb-20">
                                    <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">Why Choose Us?</h2>
                                    <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto">Everything you need to learn web development with confidence and clarity.</p>
                                </div>

                                <div className="gsap-stagger-grid grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                                    {[
                                        { icon: <MonitorPlay size={20} className="w-5 h-5 md:w-6 md:h-6"/>, title: "Beginner Friendly", desc: "Start from zero with simple explanations." },
                                        { icon: <Video size={20} className="w-5 h-5 md:w-6 md:h-6"/>, title: "Live Classes", desc: "Learn directly from an experienced mentor." },
                                        { icon: <Globe size={20} className="w-5 h-5 md:w-6 md:h-6"/>, title: "Recorded Access", desc: "Revise anytime with recorded sessions." },
                                        { icon: <FolderGit2 size={20} className="w-5 h-5 md:w-6 md:h-6"/>, title: "Real Projects", desc: "Build practical projects to gain confidence." },
                                        { icon: <MessageCircleQuestion size={20} className="w-5 h-5 md:w-6 md:h-6"/>, title: "Doubt Clearing", desc: "Ask questions and get personal guidance." },
                                        { icon: <Award size={20} className="w-5 h-5 md:w-6 md:h-6"/>, title: "Certificate", desc: "Get a certificate after successful completion." },
                                        { icon: <Target size={20} className="w-5 h-5 md:w-6 md:h-6"/>, title: "Interview Prep", desc: "Learn interview questions and best practices." },
                                        { icon: <CreditCard size={20} className="w-5 h-5 md:w-6 md:h-6"/>, title: "Affordable", desc: "High-quality training at a student-friendly price." },
                                    ].map((feature, i) => (
                                        <div key={i} className="gsap-item glass-card p-4 md:p-8 rounded-[1rem] md:rounded-[2rem] group flex flex-col h-full border-white/5 hover:border-emerald-500/40">
                                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1rem] md:rounded-[2rem]"></div>
                                            <div className="relative z-10 flex flex-col h-full">
                                                <div className="w-10 h-10 md:w-14 md:h-14 bg-[#121a14] text-emerald-400 rounded-xl flex items-center justify-center mb-4 md:mb-6 border border-white/10 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-black group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-300 shrink-0">
                                                    {feature.icon}
                                                </div>
                                                <h4 className="font-display font-bold text-white text-[15px] md:text-xl mb-2 md:mb-3 group-hover:text-emerald-400 transition-colors leading-tight">{feature.title}</h4>
                                                <p className="text-gray-400 text-[12px] md:text-sm leading-relaxed flex-1">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Projects You Will Build */}
                        <section id="projects" className="py-20 md:py-32 relative z-10 bg-gradient-to-b from-[#0a1410] to-[#030504]">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                                <div className="gsap-header text-center mb-12 md:mb-20">
                                    <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">Projects You Will Build</h2>
                                    <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto">Build real-world projects that strengthen your skills and portfolio.</p>
                                </div>

                                <div className="gsap-stagger-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                                    {/* Beginner */}
                                    <div className="gsap-item glass-card p-6 sm:p-8 rounded-3xl border-t-4 border-t-emerald-400 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500 group-hover:scale-110">
                                            <LayoutTemplate size={120} />
                                        </div>
                                        <h4 className="font-display text-xl sm:text-2xl font-bold text-emerald-400 mb-6 sm:mb-8">Beginner</h4>
                                        <ul className="space-y-4 sm:space-y-5">
                                            <li className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300 group-hover:translate-x-2 transition-transform duration-300"><span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]"></span> Counter App</li>
                                            <li className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300 group-hover:translate-x-2 transition-transform duration-300 delay-75"><span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]"></span> Password Generator</li>
                                            <li className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300 group-hover:translate-x-2 transition-transform duration-300 delay-100"><span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]"></span> Calculator</li>
                                            <li className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300 group-hover:translate-x-2 transition-transform duration-300 delay-150"><span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]"></span> Digital Clock</li>
                                        </ul>
                                        <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-emerald-400/50 font-mono">And many more...</p>
                                    </div>

                                    {/* Intermediate */}
                                    <div className="gsap-item glass-card p-6 sm:p-8 rounded-3xl border-t-4 border-t-[#caff33] relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500 group-hover:scale-110">
                                            <Code2 size={120} />
                                        </div>
                                        <h4 className="font-display text-xl sm:text-2xl font-bold text-[#caff33] mb-6 sm:mb-8">Intermediate</h4>
                                        <ul className="space-y-4 sm:space-y-5">
                                            <li className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300 group-hover:translate-x-2 transition-transform duration-300"><span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#caff33] shadow-[0_0_10px_#caff33]"></span> Todo App</li>
                                            <li className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300 group-hover:translate-x-2 transition-transform duration-300 delay-75"><span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#caff33] shadow-[0_0_10px_#caff33]"></span> Quiz App</li>
                                            <li className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300 group-hover:translate-x-2 transition-transform duration-300 delay-100"><span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#caff33] shadow-[0_0_10px_#caff33]"></span> Expense Tracker</li>
                                            <li className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300 group-hover:translate-x-2 transition-transform duration-300 delay-150"><span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#caff33] shadow-[0_0_10px_#caff33]"></span> Search Filter App</li>
                                        </ul>
                                        <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-[#caff33]/50 font-mono">And many more...</p>
                                    </div>

                                    {/* Advanced */}
                                    <div className="gsap-item glass-card p-6 sm:p-8 rounded-3xl border-t-4 border-t-cyan-400 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500 group-hover:scale-110">
                                            <Globe size={120} />
                                        </div>
                                        <h4 className="font-display text-xl sm:text-2xl font-bold text-cyan-400 mb-6 sm:mb-8">Advanced</h4>
                                        <ul className="space-y-4 sm:space-y-5">
                                            <li className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300 group-hover:translate-x-2 transition-transform duration-300"><span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></span> Weather App</li>
                                            <li className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300 group-hover:translate-x-2 transition-transform duration-300 delay-75"><span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></span> Movie Search App</li>
                                            <li className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300 group-hover:translate-x-2 transition-transform duration-300 delay-100"><span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></span> Infinite Scroll</li>
                                            <li className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300 group-hover:translate-x-2 transition-transform duration-300 delay-150"><span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></span> Drag & Drop App</li>
                                        </ul>
                                        <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-cyan-400/50 font-mono">And many more...</p>
                                    </div>

                                    {/* Full Stack */}
                                    <div className="gsap-item glass-card p-6 sm:p-8 rounded-3xl border-t-4 border-t-blue-400 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500 group-hover:scale-110">
                                            <Database size={120} />
                                        </div>
                                        <h4 className="font-display text-xl sm:text-2xl font-bold text-blue-400 mb-6 sm:mb-8">Full Stack</h4>
                                        <ul className="space-y-4 sm:space-y-5">
                                            <li className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300 group-hover:translate-x-2 transition-transform duration-300"><span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]"></span> Auth System</li>
                                            <li className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300 group-hover:translate-x-2 transition-transform duration-300 delay-75"><span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]"></span> Blog Platform</li>
                                            <li className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300 group-hover:translate-x-2 transition-transform duration-300 delay-100"><span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]"></span> Admin Dashboard</li>
                                            <li className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300 group-hover:translate-x-2 transition-transform duration-300 delay-150"><span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]"></span> MERN App</li>
                                        </ul>
                                        <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-blue-400/50 font-mono">And many more...</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                ) : (
                    /* --- Course Details Page View --- */
                    <div className="relative z-10 bg-[#030504]">
                        {/* Course Hero */}
                        <div className="pt-28 pb-16 lg:pt-40 lg:pb-24 border-b border-white/5 relative overflow-hidden bg-gradient-to-b from-[#0a120e] to-[#030504]">
                            <div className={`absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] ${renderView.data.theme.glowPulse} rounded-full blur-[100px] sm:blur-[150px] pointer-events-none animate-pulse-slow`}></div>
                            
                            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
                                <button onClick={(e) => navigateToHome(e)} className="flex items-center gap-2 text-gray-400 hover:text-white bg-white/5 px-4 py-2 rounded-full transition-colors mb-8 sm:mb-10 text-xs sm:text-sm font-medium w-max border border-white/10 hover:border-white/30">
                                    <ArrowLeft size={16} className="sm:w-4 sm:h-4" /> Back to Home
                                </button>
                                
                                <div className="gsap-header flex items-center gap-4 sm:gap-5 mb-6 sm:mb-8">
                                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${renderView.data.bgGradient} text-black flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] ${renderView.data.shadowColor}`}>
                                        <renderView.data.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                                    </div>
                                    <div>
                                        <div className={`inline-block bg-white/10 ${renderView.data.theme.text} font-mono text-[10px] sm:text-xs px-3 py-1 rounded-full mb-1 sm:mb-2 border border-white/10`}>Level: {renderView.data.level}</div>
                                        <div className="flex items-center gap-1 sm:gap-2 text-gray-400 text-xs sm:text-sm font-mono">
                                            <Clock size={12} className="sm:w-[14px] sm:h-[14px]"/> {renderView.data.duration} Training
                                        </div>
                                    </div>
                                </div>
                                
                                <h1 className="gsap-header font-display text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
                                    {renderView.data.title}
                                </h1>
                                <p className="gsap-header text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-8 sm:mb-10 max-w-3xl">
                                    {renderView.data.description}
                                </p>
                                
                                <div className="gsap-header flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                                    <button onClick={() => setIsModalOpen(true)} className="bg-emerald-500 btn-shine text-black px-6 py-3 sm:px-8 sm:py-3.5 rounded-full font-bold text-sm sm:text-base hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                                        Enroll in this Course
                                    </button>
                                    <a href="#syllabus" className="bg-white/5 backdrop-blur-md text-white border border-white/20 px-6 py-3 sm:px-8 sm:py-3.5 rounded-full font-bold text-sm sm:text-base hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
                                        <BookOpen size={18} className="sm:w-5 sm:h-5"/> Jump to Syllabus
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Course Content: Skills & Syllabus */}
                        <div className="py-16 sm:py-24 relative z-10">
                            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                                
                                {/* Skills Acquired */}
                                <div className="mb-16 sm:mb-20 gsap-header">
                                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3">
                                        <Cpu className="text-emerald-500 w-6 h-6 sm:w-8 sm:h-8" /> Technologies Covered
                                    </h3>
                                    <div className="flex flex-wrap gap-2 sm:gap-3">
                                        {renderView.data.skills.map((skill, index) => (
                                            <span key={index} className="glass-card-static border border-white/10 text-gray-200 px-4 py-2 sm:px-5 sm:py-3 rounded-xl font-medium text-xs sm:text-sm hover:border-emerald-500/50 hover:text-emerald-400 cursor-default transition-colors shadow-lg">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Syllabus Timeline */}
                                <div id="syllabus" className="gsap-header">
                                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12 flex items-center gap-3">
                                        <Calendar className="text-emerald-500 w-6 h-6 sm:w-8 sm:h-8" /> Complete Syllabus
                                    </h3>
                                    
                                    <div className="space-y-4 sm:space-y-6">
                                        {renderView.data.syllabus.map((week, idx) => (
                                            <div key={idx} className="gsap-item glass-card-static p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl flex flex-col md:flex-row gap-4 sm:gap-6 items-start relative overflow-hidden group">
                                                <div className={`absolute left-0 top-0 bottom-0 w-1 sm:w-1.5 bg-white/10 group-hover:bg-gradient-to-b group-hover:${renderView.data.bgGradient} transition-all duration-500`}></div>
                                                <div className="shrink-0 w-full md:w-32 pt-1 pl-3 sm:pl-4">
                                                    <span className={`inline-block ${renderView.data.theme.text} font-mono font-bold text-[10px] sm:text-sm tracking-widest uppercase ${renderView.data.theme.bgLight} px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border ${renderView.data.theme.borderLight}`}>
                                                        {week.week}
                                                    </span>
                                                </div>
                                                <div className="flex-1 pl-3 sm:pl-4 md:pl-0 w-full">
                                                    <h4 className="font-display text-lg sm:text-2xl font-bold text-white mb-3 sm:mb-5 group-hover:text-emerald-50 transition-colors">{week.title}</h4>
                                                    <ul className="space-y-2.5 sm:space-y-4">
                                                        {week.topics.map((topic, tIdx) => (
                                                            <li key={tIdx} className="flex items-start gap-3 sm:gap-4 text-gray-400 text-xs sm:text-base group-hover:text-gray-300 transition-colors">
                                                                <CheckCircle2 size={16} className={`${renderView.data.theme.text} shrink-0 mt-0.5 sm:w-5 sm:h-5 opacity-50 group-hover:opacity-100 transition-opacity`} />
                                                                <span>{topic}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                )}

                {/* Massive Glowing CTA (Shared across both views) */}
                <section className="py-6 md:py-24 relative z-10 overflow-hidden bg-[#030504]">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-[80vw] max-w-[800px] h-[300px] bg-emerald-500/20 blur-[150px] rounded-full animate-pulse-slow"></div>
                    </div>
                    
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center glass-card rounded-3xl md:rounded-[3rem] py-8 px-4 md:p-20 border border-emerald-500/30">
                        <h2 className="font-display text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tight leading-tight">
                            Ready to start your <br className="hidden md:block" /> coding journey?
                        </h2>
                        <p className="text-gray-300 text-sm md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto">
                            Join us today and transform your career with skills that pay. No prior experience required.
                        </p>
                        
                        <button onClick={() => setIsModalOpen(true)} className="bg-emerald-500 btn-shine text-black px-6 py-3.5 md:px-12 md:py-5 rounded-full font-bold text-base md:text-xl hover:bg-white hover:scale-105 hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] transition-all duration-300 flex items-center justify-center gap-3 mx-auto w-full sm:w-auto">
                            Start Building Today <ArrowRight size={20} className="md:w-6 md:h-6" />
                        </button>
                    </div>
                </section>

                {/* Extended Footer */}
                <footer className="border-t border-white/5 bg-[#020302] pt-16 md:pt-20 pb-8 md:pb-10 relative z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
                            
                            {/* Brand Column */}
                            <div className="lg:col-span-1">
                                <a href="#" onClick={(e) => navigateToHome(e)} className="flex items-center gap-2 mb-4 md:mb-6 group">
                                    <Terminal size={24} className="text-emerald-500 group-hover:rotate-12 transition-transform md:w-7 md:h-7" />
                                    <span className="font-display font-bold text-xl md:text-2xl text-white tracking-tight">CodeScriptors</span>
                                </a>
                                <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6">
                                    Empowering the next generation of web developers with practical, project-based learning and expert mentorship.
                                </p>
                                <div className="flex gap-3 md:gap-4">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-white/10 hover:scale-110 transition-all cursor-pointer"><Globe size={16} className="md:w-[18px] md:h-[18px]"/></div>
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-white/10 hover:scale-110 transition-all cursor-pointer"><MonitorPlay size={16} className="md:w-[18px] md:h-[18px]"/></div>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div>
                                <h4 className="text-white font-display font-bold text-base md:text-lg mb-4 md:mb-6">Quick Links</h4>
                                <ul className="space-y-2 md:space-y-3">
                                    <li><a href="#" onClick={(e) => navigateToHome(e, 'home')} className="text-gray-400 hover:text-emerald-400 transition-colors text-xs md:text-sm flex items-center gap-2"><ChevronRight size={12} className="md:w-3.5 md:h-3.5"/> Home</a></li>
                                    <li><a href="#" onClick={(e) => navigateToHome(e, 'courses')} className="text-gray-400 hover:text-emerald-400 transition-colors text-xs md:text-sm flex items-center gap-2"><ChevronRight size={12} className="md:w-3.5 md:h-3.5"/> All Courses</a></li>
                                    <li><a href="#" onClick={(e) => navigateToHome(e, 'projects')} className="text-gray-400 hover:text-emerald-400 transition-colors text-xs md:text-sm flex items-center gap-2"><ChevronRight size={12} className="md:w-3.5 md:h-3.5"/> Student Projects</a></li>
                                    <li><a href="#" onClick={(e) => navigateToHome(e, 'about')} className="text-gray-400 hover:text-emerald-400 transition-colors text-xs md:text-sm flex items-center gap-2"><ChevronRight size={12} className="md:w-3.5 md:h-3.5"/> About Us</a></li>
                                </ul>
                            </div>

                            {/* Resources */}
                            <div>
                                <h4 className="text-white font-display font-bold text-base md:text-lg mb-4 md:mb-6">Resources</h4>
                                <ul className="space-y-2 md:space-y-3">
                                    <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-xs md:text-sm flex items-center gap-2"><ChevronRight size={12} className="md:w-3.5 md:h-3.5"/> Free Masterclass</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-xs md:text-sm flex items-center gap-2"><ChevronRight size={12} className="md:w-3.5 md:h-3.5"/> Coding Blog</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-xs md:text-sm flex items-center gap-2"><ChevronRight size={12} className="md:w-3.5 md:h-3.5"/> Interview Questions</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-xs md:text-sm flex items-center gap-2"><ChevronRight size={12} className="md:w-3.5 md:h-3.5"/> Help Center</a></li>
                                </ul>
                            </div>

                            {/* Contact */}
                            <div>
                                <h4 className="text-white font-display font-bold text-base md:text-lg mb-4 md:mb-6">Contact Us</h4>
                                <ul className="space-y-3 md:space-y-4">
                                    <li className="flex items-start gap-2 md:gap-3 text-gray-400 text-xs md:text-sm hover:text-emerald-400 transition-colors cursor-pointer">
                                        <Mail size={16} className="text-emerald-500 shrink-0 mt-0.5 md:w-[18px] md:h-[18px]" />
                                        <span>hello@codescriptors.com</span>
                                    </li>
                                    <li className="flex items-start gap-2 md:gap-3 text-gray-400 text-xs md:text-sm hover:text-emerald-400 transition-colors cursor-pointer">
                                        <Phone size={16} className="text-emerald-500 shrink-0 mt-0.5 md:w-[18px] md:h-[18px]" />
                                        <span>+1 (555) 123-4567</span>
                                    </li>
                                    <li className="flex items-start gap-2 md:gap-3 text-gray-400 text-xs md:text-sm hover:text-emerald-400 transition-colors cursor-pointer">
                                        <MapPin size={16} className="text-emerald-500 shrink-0 mt-0.5 md:w-[18px] md:h-[18px]" />
                                        <span>Tech Park, Innovation Drive, Silicon Valley, CA</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="border-t border-white/5 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between text-xs md:text-sm text-gray-600 gap-4 md:gap-0">
                            <p className="text-center md:text-left">&copy; 2026 CodeScriptors Academy. All rights reserved.</p>
                            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                                <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
                                <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
                                <a href="#" className="hover:text-gray-400 transition-colors">Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

            {/* Application Modal (Form Popup) */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
                    <div className="glass-card rounded-3xl p-6 sm:p-8 w-full max-w-md relative animate-in fade-in zoom-in duration-300 shadow-[0_0_50px_rgba(16,185,129,0.15)] border border-emerald-500/30">
                        
                        <button 
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-gray-400 hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 hover:scale-110"
                        >
                            <X size={18} />
                        </button>
                        
                        <div className="mb-5 sm:mb-6 pr-6">
                            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Book a Free Class</h3>
                            <p className="text-gray-400 text-xs sm:text-sm">Fill your details below. We will send you the class link shortly.</p>
                        </div>

                        <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-4">
                            <div>
                                <label className="block text-[10px] sm:text-xs font-mono text-emerald-500/80 mb-1 sm:mb-1.5 uppercase tracking-wide">Full Name</label>
                                <input required type="text" className="w-full bg-[#050806] border border-white/10 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3.5 text-white focus:outline-none focus:border-emerald-500 focus:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all text-xs sm:text-sm" placeholder="John Doe" />
                            </div>
                            
                            <div>
                                <label className="block text-[10px] sm:text-xs font-mono text-emerald-500/80 mb-1 sm:mb-1.5 uppercase tracking-wide">Email Address</label>
                                <input required type="email" className="w-full bg-[#050806] border border-white/10 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3.5 text-white focus:outline-none focus:border-emerald-500 focus:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all text-xs sm:text-sm" placeholder="john@example.com" />
                            </div>
                            
                            <div>
                                <label className="block text-[10px] sm:text-xs font-mono text-emerald-500/80 mb-1 sm:mb-1.5 uppercase tracking-wide">Select Course</label>
                                <div className="relative">
                                    <select 
                                        required 
                                        className="w-full bg-[#050806] border border-white/10 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3.5 text-white focus:outline-none focus:border-emerald-500 focus:shadow-[0_0_15px_rgba(16,185,129,0.2)] appearance-none transition-all text-xs sm:text-sm cursor-pointer"
                                        defaultValue={activeView.type === 'course' ? activeView.data.id : ""}
                                    >
                                        <option value="" disabled>Choose a course...</option>
                                        <option value="basics">Web Development Basics (Beginner)</option>
                                        <option value="frontend">Frontend Mastery (Intermediate)</option>
                                        <option value="fullstack">Full-Stack Mastery (Career-focused)</option>
                                    </select>
                                    <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
                                </div>
                            </div>

                            <button type="submit" className="w-full btn-shine bg-emerald-500 text-black py-3 sm:py-4 rounded-xl font-bold hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all mt-4 sm:mt-6 flex items-center justify-center gap-2 text-sm sm:text-base">
                                Confirm Booking <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]"/>
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
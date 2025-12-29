"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { useTheme } from "@/components/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ["All", "E-Commerce", "Corporate", "SaaS"];

const PROJECTS = [
    {
        id: 1,
        title: "EcoStyle Fashion",
        description: "A complete overhaul of a sustainable fashion brand's e-commerce platform. Focused on storytelling and rapid checkout flow.",
        metric: "Conversion +35%",
        tags: ["Next.js", "Shopify", "Tailwind"],
        image: "/placeholder-1.jpg",
        category: "E-Commerce",
    },
    {
        id: 2,
        title: "Apex Finance",
        description: "Corporate portal for a high-frequency trading firm. Real-time data visualization and uncompromising security standards.",
        metric: "Load Time < 0.4s",
        tags: ["React", "D3.js", "Cybersecurity"],
        image: "/placeholder-2.jpg",
        category: "Corporate",
    },
    {
        id: 3,
        title: "TaskFlow Pro",
        description: "SaaS project management tool for creative agencies. Implemented drag-and-drop kanban boards and team collaboration features.",
        metric: "Retention +15%",
        tags: ["Next.js", "Supabase", "WebSockets"],
        image: "/placeholder-3.jpg",
        category: "SaaS",
    },
    {
        id: 4,
        title: "Urban Sneakers",
        description: "High-hype drop platform. Engineered to handle traffic spikes of 100k+ users during limited releases.",
        metric: "100% Uptime",
        tags: ["Vercel Edge", "Redis", "Next.js"],
        image: "/placeholder-4.jpg",
        category: "E-Commerce",
    },
];

export default function WebSolutions() {
    const { theme } = useTheme();
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? PROJECTS
        : PROJECTS.filter(p => p.category === activeCategory);

    return (
        <main className="min-h-screen p-8 md:p-12 lg:p-24 bg-background transition-colors duration-300">

            {/* Page Header */}
            <div className="mb-16 max-w-2xl">
                <h1 className="text-5xl md:text-7xl font-bold font-theme tracking-tight mb-6">
                    Web Solutions
                </h1>
                <p className="text-xl opacity-80">
                    We don't just write code. We engineer digital assets that solve specific business problems.
                    Performance, conversion, and scalability are our KPIs.
                </p>
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap gap-4 mb-12">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`
              px-6 py-2 text-sm font-bold transition-all relative
              ${theme === 'minimalist'
                                ? activeCategory === cat ? 'text-foreground underline underline-offset-4' : 'opacity-60 hover:opacity-100'
                                : ''}
              ${theme === 'neubrutalist'
                                ? `border-[3px] border-black shadow-[4px_4px_0px_#000] hover:-translate-y-1 ${activeCategory === cat ? 'bg-accent text-black' : 'bg-white text-black'}`
                                : ''}
              ${theme === 'discord'
                                ? `rounded-full ${activeCategory === cat ? 'bg-accent text-white' : 'bg-accent-secondary text-gray-400 hover:bg-[#40444b] hover:text-white'}`
                                : ''}
            `}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            {...project}
                        />
                    ))}
                </AnimatePresence>
            </motion.div>

        </main>
    );
}

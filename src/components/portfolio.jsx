"use client";

import { useState } from "react";
import Image from "next/image";
import { FaReact, FaNodeJs, FaAws, FaPhp, FaDatabase } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiCodeigniter,
  SiFlutter,
} from "react-icons/si";
import { TbBrandGraphql } from "react-icons/tb";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("Muhammad Ridwan Syah");

  // Tambahkan mapping icon untuk setiap tech
  const techIcons = {
    React: <FaReact className="w-5 h-5" />,
    "Next.js": <SiNextdotjs className="w-5 h-5" />,
    "Node.js": <FaNodeJs className="w-5 h-5" />,
    AWS: <FaAws className="w-5 h-5" />,
    PHP: <FaPhp className="w-5 h-5" />,
    "Codeigniter 3": <SiCodeigniter className="w-5 h-5" />,
    MongoDB: <SiMongodb className="w-5 h-5" />,
    TypeScript: <SiTypescript className="w-5 h-5" />,
    GraphQL: <TbBrandGraphql className="w-5 h-5" />,
    Flutter: <SiFlutter className="w-5 h-5" />,
    MySQL: <FaDatabase className="w-5 h-5" />,
  };

  // Data untuk masing-masing portfolio
  const userData = {
    "Muhammad Ridwan Syah": {
      profile: {
        image: "/profile-ridwan.jpg",
        name: "Muhammad Ridwan Syah",
        role: "Software Engineer",
        bio: "I have a passion for creating and developing software programs that solve problems and Learning new things with getting new experience. With experience in a variety of programming languages, I am skilled in designing, maintaining computer lab, websites and operating systems. In my current role in the tech, I have the opportunity to work on exciting projects and collaborate with talented teams to bring innovative ideas to fruition.",
        skills: ["JavaScript", "React", "Next.js", "Node.js", "AWS", "MongoDB"],
        experience: "2+ years of professional development experience",
      },
      projects: [
        {
          title: "Virtual Tour Website Wisata Gunung Padang",
          description:
            "Developed a virtual tour platform for Indonesia's historical site with these key contributions:\n• Designed database architecture\n• Optimized performance for 10k+ users\n• Integrated RESTful APIs\n• Server-side debugging",
          tech: ["PHP", "Codeigniter 3", "MySQL", "REST API", "AWS EC2"],
          link: "#",
          image: "/",
        },
        {
          title: "E-commerce Platform",
          description:
            "Built a full-stack e-commerce solution with mobile-first design and real-time inventory management",
          tech: ["Next.js", "TypeScript", "MongoDB", "Node.js"],
          link: "#",
          image: "/",
        },
      ],
    },
    "Raihan Rifaldi": {
      profile: {
        image: "/",
        name: "Raihan Rifaldi",
        role: "Frontend Developer",
        bio: "Specializing in creating beautiful and functional user interfaces with modern web technologies.",
        skills: [
          "React",
          "TypeScript",
          "Figma",
          "Tailwind CSS",
          "UI/UX",
          "GraphQL",
        ],
        experience: "1.5+ years in frontend development",
      },
      projects: [
        {
          title: "Social Media Dashboard",
          description:
            "Created an analytics dashboard with real-time data visualization",
          tech: ["React", "Chart.js", "Firebase", "Material UI"],
          link: "#",
          image: "/",
        },
        {
          title: "Travel Mobile App",
          description:
            "Designed and developed a cross-platform travel application",
          tech: ["Flutter", "Dart", "Node.js", "MongoDB"],
          link: "#",
          image: "/",
        },
      ],
    },
  };

  const currentUser = userData[activeTab];

  return (
    <div className="min-h-screen p-8 md:p-16 bg-gradient-to-b from-zinc-200 dark:from-zinc-900">
      {/* Tab Navigation dengan Glass Effect */}
      <div className="max-w-4xl mx-auto mb-8 flex border-b border-gray-300 dark:border-neutral-700 backdrop-blur-lg bg-white/30 dark:bg-black/30 rounded-[8px] shadow-lg">
        {Object.keys(userData).map((userName) => (
          <button
            key={userName}
            onClick={() => setActiveTab(userName)}
            className={`flex-1 px-6 py-3 font-medium text-sm md:text-base transition-all ${
              activeTab === userName
                ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-100/30 dark:hover:bg-gray-800/30"
            } first:rounded-l-[8px] last:rounded-r-[8px]`}
          >
            {userName}
          </button>
        ))}
      </div>

      {/* Konten Utama */}
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Profile Card dengan Glass Effect */}
        <div className="backdrop-blur-lg bg-white/30 dark:bg-black/30 rounded-2xl p-8 border border-white/20 dark:border-neutral-700/50 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src={currentUser.profile.image}
              alt="Profile"
              width={120}
              height={120}
              className="rounded-full border-4 border-white/30 dark:border-neutral-700/50"
            />
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                {currentUser.profile.name}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                {currentUser.profile.role}
              </p>
              <p className="text-gray-700 dark:text-gray-400 mt-4 max-w-2xl">
                {currentUser.profile.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="backdrop-blur-lg bg-white/30 dark:bg-black/30 rounded-2xl p-8 border border-white/20 dark:border-neutral-700/50 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {currentUser.profile.skills.map((skill) => (
              <div
                key={skill}
                className="px-4 py-2 text-sm rounded-full bg-white/50 dark:bg-neutral-800/50 border border-gray-200 dark:border-neutral-700 flex items-center justify-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8">
          {currentUser.projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group backdrop-blur-lg bg-white/30 dark:bg-black/30 rounded-2xl p-8 border border-white/20 dark:border-neutral-700/50 shadow-lg hover:bg-white/50 dark:hover:bg-black/50 transition-all"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="relative h-48 rounded-xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 whitespace-pre-line">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

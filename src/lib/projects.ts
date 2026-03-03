export interface Project {
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  imageUrl: string;
  tags: string[];
  size: "large" | "medium" | "small";
  // You can optionally add a url or preview link if you want the card to be clickable
  link?: string;
}

// A central list of projects that powers the homepage grid.  
// Edit this file whenever you want to add, remove or update a project.

import projectAttendance from "@/assets/project-attendance.jpg";
import projectIpl from "@/assets/project-ipl.jpg";
import projectGan from "@/assets/project-gan.jpg";

export const projects: Project[] = [
  {
    title: "Restaurant Pro UI/UX Concept",
    description: "Restaurant Pro is a modern, responsive UI/UX project designed to simplify the way users interact with restaurants online. This concept focuses on creating a seamless digital experience where customers can easily reserve tables and place food orders through a clean, intuitive interface.",
    stat: "Open Source Project",
    statLabel: "Restaurant Pro",
    imageUrl: "dashboard-thumbnail.png",
    tags: ["Figma", "UI/UX", "Web Design", "Navigation"],
    size: "small",
    link: "https://www.figma.com/community/file/1610666451378830052",
  },
  {
    title: "Core X Landing Page",
    description: "CoreX was designed to demonstrate how bold typography, high-contrast color psychology, and structured content flow can create a powerful, conversion-driven fitness landing page. The project emphasizes community, commitment, and seamless reservation booking within a visually striking interface.",
    stat: "Open Source Project",
    statLabel: "CoreX",
    imageUrl: "landing-thumbnail.png",
    tags: ["Figma", "UI/UX", "Landing Page", "Typography"],
    size: "large",
    link: "https://www.figma.com/community/file/1610676034357241746",
  },
  {
    title: "Scalinox",
    description: "Scalinox is a web-based creative suite and a two-sided marketplace that bridges the gap between imagination and creation.",
    stat: "React App",
    statLabel: "Scalinox - AI-Powered Image Scaling",
    imageUrl: "landing-thumbnail.png",
    tags: ["Figma", "UI/UX", "Creativity", "React"],
    size: "medium",
    link: "https://scalinox.vercel.app/",
  },
  
];

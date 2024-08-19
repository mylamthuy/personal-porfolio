"use client";
import React from "react"
import projectData from "./projectData.json";
import ProjectCard from "./ProjectCard";

function Projects() {

  return (
    <div id="projects" className="mt-20">
      <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12">My Projects</h2>
      {/* <div className="project-container flex items-center">
          <div className="w-200 h-200 bg-slate-800 rounded-full border-2"></div>
          <div className="w-5 h-5 bg-[#2EA8C8] rounded-full blur"></div>
      </div> */}
      
      <div className="grid md:grid-cols-2 gap-8 md:map-12">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            techStacks={project.techStack}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            liveUrl={project.liveUrl}
            />
        ))}

      </div>
    </div>
  )
}

export default Projects; 
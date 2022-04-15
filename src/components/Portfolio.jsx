import React from "react";
import { projects } from "./Data";
const Portfolio = () => {
  return (
    <div>
      <section id="portfolio" className="max-w-[1140px] mx-auto p-6">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {projects.map((project) => {
            return (
              <div
                className="rounded overflow-hidden shadow-lg"
                key={project.id}
              >
                <img
                  className="w-full h-[230px]"
                  src={project.src}
                  alt="Mountain"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{project.name}</div>
                  <p className="text-gray-700 text-base">{project.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

import { projects } from "@constants/index"
import Section from "../layout/Section"
import Card from "./Card"

export default function Projects() {
  return (
    <Section id="projects">
      <div className="w-full flex flex-col items-center justify-center py-36">
        <div className="max-w-7xl w-full">
          <h1 className="text-4xl text-light font-bold text-center pb-20">Projects</h1>
          <div className="flex flex-row flex-wrap justify-center items-stretch gap-10">
            {projects.map((project) => (
              <Card {...project} key={project.title} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

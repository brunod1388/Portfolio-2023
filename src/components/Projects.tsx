import { projects } from "@constants/index"
import Section from "../layout/Section"
import Card from "./Card"
import Title from "./Title"

export default function Projects() {
  return (
    <Section id="projects">
      <div className="w-full flex flex-col items-center justify-center py-12">
        <div className="max-w-9xl">
          <Title>Projects</Title>
          <div className="flex flex-row flex-wrap justify-center items-stretch gap-10 pb-10 mt-[50px]">
            {projects.map((project) => (
              <Card {...project} key={project.title} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

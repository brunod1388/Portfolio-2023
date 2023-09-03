import Section from "../layout/Section"

export default function Skills() {
  return (
    <Section id="skills">
      <div className="flex flex-col items-center gap-10 w-screen overflow-hidden mx-5 ">
        <div className="flex flex-col">
          <h1 className="text-dark text-center text-[35px] italic dark:text-light">Skills</h1>
          <div className="hidden sm:block bg-gradient-to-r from-pink-500 to-yellow-500 h-[4px] rounded" />
        </div>
      </div>
    </Section>
  )
}

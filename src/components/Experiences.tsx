import { WorkIcon } from "@assets/index"
import Section from "../layout/Section"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import resolveConfig from "tailwindcss/resolveConfig"
import tailwindConfig from "../../tailwind.config.js"
import { useDarkTheme } from "@context/DarkTheme"
import { experiences } from "@constants/index.js"
import { hexToRGB } from "@utils/colorHelper.js"

interface TLElementProps {
  date: string
  title: string
  entreprise: string
  location: string
  description: string
  iconPath: string
  textColor: string
  bgColor: string
}

function Icon({ image }: { image: string }) {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <img src={image} className="" />
    </div>
  )
}

function TLElement({
  date,
  title,
  entreprise,
  location,
  description,
  iconPath,
  textColor,
  bgColor,
}: TLElementProps) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: hexToRGB(bgColor, 0.6),
        color: textColor,
        padding: "10px 15px",
        backdropFilter: "blur(10px)",
      }}
      contentArrowStyle={{ borderRight: `7px solid  ${hexToRGB(bgColor, 0.6)}` }}
      date={date}
      dateClassName="text-dark dark:text-light font-bold"
      iconStyle={{ background: "white" }}
      icon={<Icon image={iconPath} />}
    >
      <h3 className="">{title}</h3>
      <h3 className="vertical-timeline-element-title">{entreprise}</h3>
      <h4 className="vertical-timeline-element-subtitle">{location}</h4>
      <p className="italic text-[8px]">{description}</p>
    </VerticalTimelineElement>
  )
}

export default function Experiences() {
  const colors = resolveConfig(tailwindConfig).theme.colors
  const { dark } = useDarkTheme()
  const bgColor = dark ? colors.light : colors.dark
  const textColor = dark ? colors.dark : colors.light
  return (
    <Section id="experiences">
      <div className="flex flex-col items-center gap-10 h-screen w-screen overflow-hidden">
        <div className="flex flex-col">
          <h1 className="text-dark text-[35px] italic dark:text-light">Professional Experiences</h1>
          <div className="bg-gradient-to-r from-pink-500 to-yellow-500 h-[4px] rounded" />
        </div>
        <div className="relative overflow-scroll w-full h-4/6 bg-blob bg-content bg-no-repeat bg-center my-5">
          <div className="sticky top-0 w-full h-[50px] bg-gradient-to-b from-light dark:from-dark to-transparent z-10" />
          <VerticalTimeline lineColor={dark ? colors.light : colors.dark}>
            {experiences.map((experience) => (
              <TLElement
                {...experience}
                textColor={textColor}
                bgColor={bgColor}
                key={experience.title}
              />
            ))}
          </VerticalTimeline>
          <div className="sticky bottom-0 w-full h-[50px] bg-gradient-to-t from-light dark:from-dark to-transparent z-10" />
        </div>
      </div>
    </Section>
  )
}

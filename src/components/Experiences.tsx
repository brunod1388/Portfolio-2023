import Section from "../layout/Section"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { useDarkTheme } from "@context/DarkTheme"
import { experiences } from "@constants/index.js"
import { hexToRGB } from "@utils/colorHelper.ts"
import { theme } from "@constants/theme"
import { useWindowsSize } from "hooks"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Title from "./Title"

function Icon({ image }: { image: string }) {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <img src={image} className="" />
    </div>
  )
}

export default function Experiences() {
  const { dark } = useDarkTheme()
  const color1 = dark ? theme.colors.light : theme.colors.dark
  const color2 = dark ? theme.colors.dark : theme.colors.light
  const bgColorOpacity = hexToRGB(color1, 0.6)
  const { width } = useWindowsSize()
  const [layout, setLayout] = useState<"1-column" | "2-columns">("1-column")

  useEffect(() => {
    if (width < parseInt(theme.screens.lg)) setLayout("1-column")
    else setLayout("2-columns")
  }, [width])

  return (
    <Section id="experiences">
      <div className="flex flex-col items-center gap-10 w-screen overflow-hidden mx-5 ">
        <Title>Professional Experiences</Title>
        <motion.div
          initial={{ opacity: 0, y: 500 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="relative overflow-scroll bg-blob bg-content bg-no-repeat bg-center mx-3 mb-[200px]"
        >
          <div className="absolute top-0 w-full h-[30px] bg-gradient-to-b from-light dark:from-dark to-transparent z-10" />
          <VerticalTimeline lineColor={color1} layout={layout}>
            {experiences.map(({ date, iconPath, title, entreprise, location, description }) => (
              <VerticalTimelineElement
                className="vertical-timeline-element--work "
                contentStyle={{
                  background: bgColorOpacity,
                  color: color2,
                  padding: "10px 15px",
                  backdropFilter: "blur(10px)",
                  maxWidth: layout === "1-column" ? "450px" : "none",
                }}
                contentArrowStyle={{ borderRight: `7px solid  ${bgColorOpacity}` }}
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
            ))}
          </VerticalTimeline>
          <div className="absolute bottom-0 w-full h-[30px] bg-gradient-to-t from-light dark:from-dark to-transparent z-10" />
        </motion.div>
      </div>
    </Section>
  )
}

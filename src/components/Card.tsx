import { GitIcon } from "@assets/index"
import { styles } from "styles"
import { motion } from "framer-motion"

type Props = {
  title: string
  description: string
  imagePath: string
  link?: string
}

export default function Card({ title, description, imagePath, link = "" }: Props) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1 }}
      className={`${styles.neoXl} min-w-[300px] max-w-[400px] flex flex-col rounded-xl overflow-hidden mx-5`}
    >
      <div className="h-[300px] flex flex-row justify-center items-center bg-magic bg-center bg-cover bg-no-repeat rounded-xl m-4">
        <img src={imagePath} alt="" className="max-h-[90%] max-w-[90%]" />
      </div>
      <div className="grow flex flex-col gap-2 p-8 shrink">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="grow">{description}</p>
        {link && (
          <a
            href={link}
            className={`${styles.invertNeoSm} ${styles.buttonAnimation} rounded-md p-1 pl-2 pr-4 flex items-center self-start mt-5`}
          >
            <img src={GitIcon} alt="github" className="w-8 h-8 invert dark:invert-0" /> Github
          </a>
        )}
      </div>
    </motion.div>
  )
}

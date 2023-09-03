import { PropsWithChildren } from "react"
import { motion } from "framer-motion"

export default function Title({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col mb-[30px] mx-auto"
      >
        <h1 className="text-dark text-center text-[35px] italic dark:text-light">{children}</h1>
        <div className="hidden sm:block bg-gradient-to-r from-pink-500 to-yellow-500 h-[4px] rounded" />
      </motion.div>
    </div>
  )
}
